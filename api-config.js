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
