// Import national APIs configuration
// const { NATIONAL_APIS, COUNTRY_ISO_CODES } = require('./national-apis-config.js');

// Configuration intelligente avec fallback automatique
const API_SMART_CONFIG = {
    // Stratégie de fallback : National > Regional > International
    fallbackStrategy: ['national', 'regional', 'international'],
    
    // Cache des métadonnées de sources
    sourceMetadata: new Map(),
    
    /**
     * Obtenir la configuration API appropriée pour un pays
     * @param {string} countryName - Nom du pays
     * @returns {Object} Configuration avec métadonnées de source
     */
    getAPIConfigForCountry(countryName) {
        const isoCode = COUNTRY_ISO_CODES[countryName];
        
        // Priorité 1 : API nationale premium
        if (isoCode && NATIONAL_APIS.premium[isoCode]) {
            return {
                type: 'national',
                tier: 'premium',
                config: NATIONAL_APIS.premium[isoCode],
                metadata: {
                    source: NATIONAL_APIS.premium[isoCode].institution,
                    sourceType: 'National Statistical Office',
                    country: countryName,
                    quality: 'excellent',
                    priority: 1,
                    lastUpdate: new Date().toISOString()
                }
            };
        }
        
        // Priorité 2 : API nationale standard
        if (isoCode && NATIONAL_APIS.standard[isoCode]) {
            return {
                type: 'national',
                tier: 'standard',
                config: NATIONAL_APIS.standard[isoCode],
                metadata: {
                    source: NATIONAL_APIS.standard[isoCode].institution,
                    sourceType: 'National Statistical Office',
                    country: countryName,
                    quality: 'good',
                    priority: 2,
                    lastUpdate: new Date().toISOString()
                }
            };
        }
        
        // Priorité 3 : API nationale limitée
        if (isoCode && NATIONAL_APIS.limited[isoCode]) {
            return {
                type: 'national',
                tier: 'limited',
                config: NATIONAL_APIS.limited[isoCode],
                metadata: {
                    source: NATIONAL_APIS.limited[isoCode].institution,
                    sourceType: 'National Statistical Office',
                    country: countryName,
                    quality: 'limited',
                    priority: 3,
                    note: NATIONAL_APIS.limited[isoCode].note,
                    lastUpdate: new Date().toISOString()
                }
            };
        }
        
        // Priorité 4 : Eurostat pour pays UE
        if (this.isEUCountry(countryName)) {
            return {
                type: 'regional',
                tier: 'eurostat',
                config: NATIONAL_APIS.international.EUROSTAT,
                metadata: {
                    source: 'Eurostat',
                    sourceType: 'Regional Organization (EU)',
                    country: countryName,
                    quality: 'excellent',
                    priority: 4,
                    note: 'National API unavailable, using EU regional data',
                    lastUpdate: new Date().toISOString()
                }
            };
        }
        
        // Priorité 5 : UN Comtrade (fallback international)
        return {
            type: 'international',
            tier: 'comtrade',
            config: NATIONAL_APIS.international.COMTRADE,
            metadata: {
                source: 'UN Comtrade',
                sourceType: 'International Organization',
                country: countryName,
                quality: 'good',
                priority: 5,
                note: 'National API unavailable, using UN aggregated data',
                lastUpdate: new Date().toISOString()
            }
        };
    },
    
    /**
     * Vérifier si un pays est membre de l'UE
     */
    isEUCountry(countryName) {
        const euCountries = [
            'Allemagne', 'Autriche', 'Belgique', 'Bulgarie', 'Chypre', 'Croatie',
            'Danemark', 'Espagne', 'Estonie', 'Finlande', 'France', 'Grèce',
            'Hongrie', 'Irlande', 'Italie', 'Lettonie', 'Lituanie', 'Luxembourg',
            'Malte', 'Pays-Bas', 'Pologne', 'Portugal', 'République tchèque',
            'Roumanie', 'Slovaquie', 'Slovénie', 'Suède'
        ];
        return euCountries.includes(countryName);
    },
    
    /**
     * Tenter de récupérer les données avec fallback automatique
     */
    async fetchTradeDataWithFallback(countryName, year = 2025) {
        const apiConfig = this.getAPIConfigForCountry(countryName);
        
        console.log(`📊 ${countryName}: Trying ${apiConfig.metadata.source} (${apiConfig.type}/${apiConfig.tier})`);
        
        try {
            // Tentative avec l'API configurée
            const data = await this.attemptFetch(apiConfig, countryName, year);
            
            if (data) {
                // Succès : stocker les métadonnées
                this.sourceMetadata.set(countryName, apiConfig.metadata);
                return {
                    ...data,
                    _metadata: apiConfig.metadata
                };
            }
        } catch (error) {
            console.warn(`⚠️ ${apiConfig.metadata.source} failed for ${countryName}:`, error.message);
        }
        
        // Si échec, essayer le fallback suivant
        if (apiConfig.type !== 'international') {
            console.log(`🔄 ${countryName}: Falling back to international data...`);
            const fallbackConfig = {
                type: 'international',
                tier: 'worldbank',
                config: NATIONAL_APIS.international.WORLDBANK,
                metadata: {
                    source: 'World Bank',
                    sourceType: 'International Organization',
                    country: countryName,
                    quality: 'good',
                    priority: 6,
                    note: 'Fallback due to national API failure',
                    lastUpdate: new Date().toISOString()
                }
            };
            
            const fallbackData = await this.attemptFetch(fallbackConfig, countryName, year);
            if (fallbackData) {
                this.sourceMetadata.set(countryName, fallbackConfig.metadata);
                return {
                    ...fallbackData,
                    _metadata: fallbackConfig.metadata
                };
            }
        }
        
        // Dernier recours : données simulées
        console.log(`⚠️ ${countryName}: Using simulated data (all APIs unavailable)`);
        return this.getSimulatedDataForCountry(countryName, year);
    },
    
    /**
     * Tentative de récupération depuis une API spécifique
     */
    async attemptFetch(apiConfig, countryName, year) {
        // Pour l'instant, retourner null pour simuler l'échec
        // Dans une vraie implémentation, faire la vraie requête HTTP
        return null;
    },
    
    /**
     * Obtenir toutes les métadonnées de sources utilisées
     */
    getAllSourceMetadata() {
        const metadata = {
            totalCountries: this.sourceMetadata.size,
            bySourceType: {},
            byQuality: {},
            sources: []
        };
        
        for (const [country, meta] of this.sourceMetadata.entries()) {
            // Compter par type de source
            metadata.bySourceType[meta.sourceType] = 
                (metadata.bySourceType[meta.sourceType] || 0) + 1;
            
            // Compter par qualité
            metadata.byQuality[meta.quality] = 
                (metadata.byQuality[meta.quality] || 0) + 1;
            
            // Ajouter détails
            metadata.sources.push({
                country,
                source: meta.source,
                type: meta.sourceType,
                quality: meta.quality,
                priority: meta.priority,
                note: meta.note
            });
        }
        
        return metadata;
    },
    
    /**
     * Données simulées pour un pays spécifique (avec métadonnées)
     */
    getSimulatedDataForCountry(countryName, year = 2025) {
        const majorPartners = ['Allemagne', 'États-Unis', 'Chine', 'Italie', 'Espagne', 'Royaume-Uni', 'Belgique'];
        const mediumPartners = ['Pays-Bas', 'Suisse', 'Pologne', 'Japon', 'Inde', 'Brésil', 'Canada'];
        
        const yearFactor = 1 + ((year - 2013) * 0.035);
        const yearVariance = (year * 123) % 1000 / 1000;
        
        let exports, imports;
        
        if (majorPartners.includes(countryName)) {
            exports = (40000 + (Math.random() + yearVariance) * 70000) * yearFactor;
            imports = (40000 + (Math.random() + yearVariance) * 70000) * yearFactor;
        } else if (mediumPartners.includes(countryName)) {
            exports = (5000 + (Math.random() + yearVariance) * 30000) * yearFactor;
            imports = (5000 + (Math.random() + yearVariance) * 30000) * yearFactor;
        } else {
            exports = (250 + (Math.random() + yearVariance) * 8000) * yearFactor;
            imports = (250 + (Math.random() + yearVariance) * 8000) * yearFactor;
        }
        
        const balance = exports - imports;
        const volume = exports + imports;
        
        const simulatedMetadata = {
            source: 'Simulated Data',
            sourceType: 'Internal Generation',
            country: countryName,
            quality: 'simulated',
            priority: 99,
            note: 'All external APIs unavailable - using statistical simulation',
            lastUpdate: new Date().toISOString()
        };
        
        this.sourceMetadata.set(countryName, simulatedMetadata);
        
        return {
            balance,
            exports,
            imports,
            volume,
            _metadata: simulatedMetadata
        };
    },
    
    /**
     * Obtenir données pour tous les pays (mode batch avec métadonnées)
     */
    async fetchAllCountriesData(year = 2025, selectedCountry = 'France') {
        console.log(`\n🌍 Fetching trade data for all countries (year: ${year}, from: ${selectedCountry})`);
        console.log(`📋 Strategy: National API → Regional → International → Simulated\n`);
        
        const results = [];
        
        for (const country of countries) {
            if (country.name === selectedCountry) {
                // Pays source = balance 0
                results.push({
                    ...country,
                    balance: 0,
                    exports: 0,
                    imports: 0,
                    volume: 0,
                    _metadata: {
                        source: 'Source Country',
                        sourceType: 'Reference',
                        country: selectedCountry,
                        quality: 'N/A',
                        priority: 0,
                        note: 'This is the reference country',
                        lastUpdate: new Date().toISOString()
                    }
                });
            } else {
                const data = await this.fetchTradeDataWithFallback(country.name, year);
                results.push({
                    ...country,
                    ...data
                });
            }
        }
        
        // Afficher résumé des sources
        const metadata = this.getAllSourceMetadata();
        console.log(`\n✅ Data fetching complete!`);
        console.log(`📊 Sources summary:`);
        console.log(`   - Total countries: ${metadata.totalCountries}`);
        console.log(`   - By source type:`, metadata.bySourceType);
        console.log(`   - By quality:`, metadata.byQuality);
        
        return {
            data: results,
            metadata: metadata,
            timestamp: new Date().toISOString(),
            year: year,
            sourceCountry: selectedCountry
        };
    }
};

// Backward compatibility: ancienne API_CONFIG pointant vers le nouveau système
const API_CONFIG = {
    async fetchBalancePaiements(year = 2025, selectedCountry = 'France') {
        return API_SMART_CONFIG.fetchAllCountriesData(year, selectedCountry);
    },
    
    // Méthode simplifiée conservée pour compatibilité
    getSimulatedData(year = 2025) {
        const yearFactor = 1 + ((year - 2013) * 0.035); // ~3.5% de croissance par an
        const yearVariance = (year * 123) % 1000 / 1000; // Variance spécifique à l'année
        
        const majorPartners = ['Allemagne', 'États-Unis', 'Chine', 'Italie', 'Espagne', 'Royaume-Uni', 'Belgique'];
        const mediumPartners = ['Pays-Bas', 'Suisse', 'Pologne', 'Japon', 'Inde', 'Brésil', 'Canada'];
        
        return countries.map(country => {
            if (country.name === 'France') {
                return { 
                    ...country, 
                    balance: 0, 
                    exports: 0, 
                    imports: 0, 
                    volume: 0,
                    _metadata: {
                        source: 'Source Country',
                        sourceType: 'Reference',
                        quality: 'N/A'
                    }
                };
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
                volume: volume,
                _metadata: {
                    source: 'Simulated (Legacy)',
                    sourceType: 'Internal Generation',
                    quality: 'simulated'
                }
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
