// Configuration de l'API Banque de France
const API_CONFIG = {
    baseUrl: 'https://webstat.banque-france.fr/ws/',
    
    // Exemples de séries pour la balance des paiements
    // Format: code de la série pour chaque pays
    balancePaiements: {
        // Ces codes sont à adapter selon la documentation BdF
        // Format général: BOP.A.{COUNTRY_CODE}.{INDICATOR}
        series: [
            'BOP-001', // Balance globale
            'BOP-002', // Balance courante
            'BOP-003'  // Balance des capitaux
        ]
    },
    
    // Fonction pour construire l'URL d'une série
    getSeriesUrl: function(seriesCode) {
        return `${this.baseUrl}series/${seriesCode}`;
    },
    
    // Fonction pour récupérer les données
    async fetchSeries(seriesCode) {
        try {
            const response = await fetch(this.getSeriesUrl(seriesCode));
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Erreur lors de la récupération de ${seriesCode}:`, error);
            return null;
        }
    },
    
    // Récupérer les données de balance des paiements pour tous les pays
    async fetchBalancePaiements(year = 2025) {
        console.log(`🔄 Chargement des données Banque de France pour ${year}...`);
        
        // Pour l'instant, utilisons des données simulées
        // À remplacer par de vraies requêtes API une fois les codes trouvés
        return this.getSimulatedData(year);
    },
    
    // Données simulées pour tester (à remplacer par vraies données API)
    getSimulatedData(year = 2025) {
        // Créer des données plus variées pour mieux voir les différences
        const majorPartners = ['Allemagne', 'États-Unis', 'Chine', 'Italie', 'Espagne', 'Royaume-Uni', 'Belgique'];
        const mediumPartners = ['Pays-Bas', 'Suisse', 'Pologne', 'Japon', 'Inde', 'Brésil', 'Canada'];
        
        // Facteur de croissance basé sur l'année (2013 = base)
        const yearFactor = 1 + ((year - 2013) * 0.035); // ~3.5% de croissance par an
        const yearVariance = (year * 123) % 1000 / 1000; // Variance spécifique à l'année
        
        return countries.map(country => {
            if (country.name === 'France') {
                return { ...country, balance: 0, exports: 0, imports: 0, volume: 0 };
            }
            
            let exports, imports;
            
            // Grands partenaires commerciaux (80-150 Md€)
            if (majorPartners.includes(country.name)) {
                exports = (40000 + (Math.random() + yearVariance) * 70000) * yearFactor;
                imports = (40000 + (Math.random() + yearVariance) * 70000) * yearFactor;
            }
            // Partenaires moyens (10-40 Md€)
            else if (mediumPartners.includes(country.name)) {
                exports = (5000 + (Math.random() + yearVariance) * 30000) * yearFactor;
                imports = (5000 + (Math.random() + yearVariance) * 30000) * yearFactor;
            }
            // Petits partenaires (0.5-10 Md€)
            else {
                exports = (250 + (Math.random() + yearVariance) * 8000) * yearFactor;
                imports = (250 + (Math.random() + yearVariance) * 8000) * yearFactor;
            }
            
            const balance = exports - imports;
            const volume = exports + imports;
            
            return {
                ...country,
                balance: balance,
                exports: exports,
                imports: imports,
                volume: volume
            };
        });
    }
};

// Configuration pour l'API VesselFinder (gratuit, limité)
const VESSEL_CONFIG = {
    // VesselFinder API publique (limitée, pas de clé requise pour endpoints basiques)
    baseUrl: 'https://www.vesselfinder.com/api/pub/vesselsonmap',
    
    // Zones géographiques pour filtrer (bounding boxes)
    zones: {
        mediterranean: { zoom: 5, centerLat: 38, centerLon: 15 },
        northAtlantic: { zoom: 4, centerLat: 45, centerLon: -35 },
        channel: { zoom: 7, centerLat: 50, centerLon: 0 },
        suez: { zoom: 7, centerLat: 30, centerLon: 32 },
        worldWide: { zoom: 2, centerLat: 30, centerLon: 0 }
    },
    
    // Fonction pour récupérer les positions des navires
    async fetchVessels(zone = 'worldWide') {
        try {
            const z = this.zones[zone];
            // VesselFinder API publique (données limitées mais gratuites)
            const url = `${this.baseUrl}?zoom=${z.zoom}&lat=${z.centerLat}&lon=${z.centerLon}`;
            
            console.log(`🔍 Tentative VesselFinder: ${zone}...`);
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (!response.ok) {
                console.warn(`⚠️ VesselFinder ${zone}: HTTP ${response.status}`);
                return null;
            }
            
            const data = await response.json();
            
            // Parser les données VesselFinder
            if (data && Array.isArray(data)) {
                const vessels = data.map(v => ({
                    mmsi: v.mmsi || v.MMSI || v[0],
                    lat: parseFloat(v.lat || v.LAT || v[1]),
                    lng: parseFloat(v.lon || v.LON || v[2]),
                    speed: parseFloat(v.speed || v.SPEED || v[3] || 0),
                    course: parseFloat(v.course || v.COURSE || v[4] || 0),
                    heading: parseFloat(v.heading || v.HEADING || v[4] || 0),
                    shipType: v.type || v.TYPE || v[5] || 'Unknown',
                    name: v.name || v.SHIPNAME || 'Unknown'
                })).filter(v => v.lat && v.lng && !isNaN(v.lat) && !isNaN(v.lng));
                
                console.log(`✅ VesselFinder ${zone}: ${vessels.length} navires`);
                return vessels;
            }
            
            console.warn(`⚠️ VesselFinder ${zone}: format inattendu`);
            return null;
        } catch (error) {
            console.warn(`❌ Erreur VesselFinder ${zone}:`, error.message);
            return null;
        }
    },
    
    // Cache pour éviter trop de requêtes
    cache: {
        data: null,
        timestamp: 0,
        ttl: 120000 // 2 minutes (API limitée)
    },
    
    // Fonction avec cache
    async getCachedVessels() {
        const now = Date.now();
        if (this.cache.data && (now - this.cache.timestamp) < this.cache.ttl) {
            console.log(`♻️ Utilisation cache: ${this.cache.data.length} navires`);
            return this.cache.data;
        }
        
        // Essayer la vue mondiale d'abord (plus de données)
        console.log('🌍 Récupération données VesselFinder...');
        let allVessels = await this.fetchVessels('worldWide');
        
        // Si échec ou peu de données, essayer zones spécifiques
        if (!allVessels || allVessels.length < 10) {
            console.log('🔄 Tentative zones spécifiques...');
            allVessels = [];
            const zones = ['mediterranean', 'northAtlantic', 'channel'];
            
            for (const zone of zones) {
                const vessels = await this.fetchVessels(zone);
                if (vessels) {
                    allVessels = allVessels.concat(vessels);
                }
                // Petite pause pour éviter rate limiting
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
        
        if (allVessels && allVessels.length > 0) {
            // Dédupliquer par MMSI
            const uniqueVessels = Array.from(
                new Map(allVessels.map(v => [v.mmsi, v])).values()
            );
            
            this.cache.data = uniqueVessels;
            this.cache.timestamp = now;
            console.log(`✅ ${uniqueVessels.length} navires uniques récupérés`);
            return uniqueVessels;
        }
        
        console.warn('⚠️ Aucune donnée VesselFinder disponible');
        return null;
    }
};
