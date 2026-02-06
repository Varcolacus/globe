// Configuration des APIs des institutions statistiques nationales
// Priorité : Données nationales > Organisations internationales

const NATIONAL_APIS = {
    // ===== NIVEAU 1 : APIs Excellentes (Documentation complète, temps réel) =====
    premium: {
        'NO': {
            country: 'Norvège',
            institution: 'Statistics Norway (SSB)',
            url: 'https://data.ssb.no/api/v0',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            tableCodes: {
                exports: '08809',
                imports: '08810',
                balance: '08811'
            },
            docs: 'https://www.ssb.no/en/api'
        },
        'NL': {
            country: 'Pays-Bas',
            institution: 'De Nederlandsche Bank (DNB) & CBS',
            url: 'https://statistiek.dnb.nl/downloads/',
            urlSecondary: 'https://opendata.cbs.nl/ODataApi/odata',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            format: 'SDMX',
            note: 'Balance des paiements (DNB), commerce extérieur (CBS)',
            docs: 'https://www.dnb.nl/en/statistics/'
        },
        'SE': {
            country: 'Suède',
            institution: 'Statistics Sweden (SCB)',
            url: 'https://api.scb.se/OV0104/v1/doris',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            format: 'JSON-stat',
            docs: 'https://www.scb.se/en/services/open-data-api/'
        },
        'US': {
            country: 'États-Unis',
            institution: 'US Census Bureau',
            url: 'https://api.census.gov/data/timeseries/intltrade',
            authRequired: true,
            apiKeyUrl: 'https://api.census.gov/data/key_signup.html',
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.census.gov/data/developers/data-sets/international-trade.html'
        },
        'GB': {
            country: 'Royaume-Uni',
            institution: 'Bank of England & ONS',
            url: 'https://api.ons.gov.uk',
            urlSecondary: 'https://www.bankofengland.co.uk/boeapps/database/',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            note: 'Balance des paiements (ONS), statistiques monétaires (BoE)',
            docs: 'https://developer.ons.gov.uk/'
        },
        'AU': {
            country: 'Australie',
            institution: 'Australian Bureau of Statistics (ABS)',
            url: 'https://api.data.abs.gov.au',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.abs.gov.au/about/data-services/application-programming-interfaces-apis'
        },
        'CA': {
            country: 'Canada',
            institution: 'Statistics Canada',
            url: 'https://www150.statcan.gc.ca/t1/wds/rest',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            tableCodes: {
                imports: '12-10-0011-01',
                exports: '12-10-0011-01'
            },
            docs: 'https://www.statcan.gc.ca/en/developers'
        },
        'CH': {
            country: 'Suisse',
            institution: 'Swiss National Bank (SNB)',
            url: 'https://data.snb.ch/en',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements et statistiques monétaires',
            docs: 'https://data.snb.ch/en/topics/aube'
        },
        'DK': {
            country: 'Danemark',
            institution: 'Statistics Denmark',
            url: 'https://api.statbank.dk/v1',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            tableCodes: {
                trade: 'SITC3'
            },
            docs: 'https://www.dst.dk/en/Statistik/statistikbanken/api'
        },
        'FI': {
            country: 'Finlande',
            institution: 'Bank of Finland (Suomen Pankki)',
            url: 'https://www.suomenpankki.fi/en/Statistics/',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            note: 'Balance des paiements',
            docs: 'https://www.suomenpankki.fi/en/Statistics/'
        }
    },

    // ===== NIVEAU 2 : APIs Standard (Bonne qualité, documentation disponible) =====
    standard: {
        'DE': {
            country: 'Allemagne',
            institution: 'Deutsche Bundesbank (Central Bank)',
            url: 'https://api.statistiken.bundesbank.de/rest',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.bundesbank.de/en/statistics/time-series-databases'
        },
        'FR': {
            country: 'France',
            institution: 'Banque de France (Central Bank)',
            url: 'https://webstat.banque-france.fr',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            note: 'Balance des paiements, commerce extérieur, statistiques monétaires',
            docs: 'https://webstat.banque-france.fr'
        },
        'IT': {
            country: 'Italie',
            institution: 'Banca d\'Italia (Central Bank)',
            url: 'https://infostat.bancaditalia.it/inquiry/',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            format: 'SDMX',
            note: 'Balance des paiements et statistiques financières',
            docs: 'https://www.bancaditalia.it/statistiche/index.html'
        },
        'ES': {
            country: 'Espagne',
            institution: 'Banco de España (Central Bank)',
            url: 'https://www.bde.es/webbe/es/estadisticas/',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            note: 'Balance des paiements et commerce extérieur',
            docs: 'https://www.bde.es/bde/en/areas/estadis/'
        },
        'JP': {
            country: 'Japon',
            institution: 'Bank of Japan & Ministry of Finance',
            url: 'https://www.stat-search.boj.or.jp/index_en.html',
            urlSecondary: 'https://api.e-stat.go.jp/rest/3.0/app',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            note: 'Balance des paiements (BoJ/MoF)',
            docs: 'https://www.boj.or.jp/en/statistics/index.htm'
        },
        'KR': {
            country: 'Corée du Sud',
            institution: 'Bank of Korea',
            url: 'https://ecos.bok.or.kr/api/',
            authRequired: true,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://ecos.bok.or.kr/'
        },
        'BR': {
            country: 'Brésil',
            institution: 'Banco Central do Brasil',
            url: 'https://www.bcb.gov.br/en/statistics',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            note: 'Balance des paiements',
            docs: 'https://www.bcb.gov.br/en/statistics'
        },
        'MX': {
            country: 'Mexique',
            institution: 'Banco de México (Central Bank)',
            url: 'https://www.banxico.org.mx/SieAPIRest/service/v1/',
            authRequired: true,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.banxico.org.mx/SieAPIRest/service/v1/doc/'
        },
        'IN': {
            country: 'Inde',
            institution: 'Reserve Bank of India (RBI)',
            url: 'https://www.rbi.org.in/Scripts/Statistics.aspx',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.rbi.org.in/Scripts/Statistics.aspx'
        },
        'SG': {
            country: 'Singapour',
            institution: 'SingStat',
            url: 'https://www.tablebuilder.singstat.gov.sg/api',
            authRequired: true,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.singstat.gov.sg/standards/standards-and-classifications/api'
        },
        'NZ': {
            country: 'Nouvelle-Zélande',
            institution: 'Stats NZ',
            url: 'https://api.stats.govt.nz',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.stats.govt.nz/developers/'
        },
        'AT': {
            country: 'Autriche',
            institution: 'Oesterreichische Nationalbank (OeNB)',
            url: 'https://www.oenb.at/en/Statistics.html',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            note: 'Balance des paiements',
            docs: 'https://www.oenb.at/en/Statistics.html'
        },
        'BE': {
            country: 'Belgique',
            institution: 'National Bank of Belgium (NBB)',
            url: 'https://stat.nbb.be/',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            note: 'Balance des paiements et commerce extérieur',
            docs: 'https://www.nbb.be/en/statistics'
        },
        'PL': {
            country: 'Pologne',
            institution: 'Statistics Poland (GUS)',
            url: 'https://api.stat.gov.pl',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://stat.gov.pl/en/api/'
        },
        'AR': {
            country: 'Argentine',
            institution: 'Banco Central de la República Argentina (BCRA)',
            url: 'https://www.bcra.gob.ar/PublicacionesEstadisticas/Principales_variables.asp',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.bcra.gob.ar/'
        },
        'CL': {
            country: 'Chili',
            institution: 'Banco Central de Chile',
            url: 'https://si3.bcentral.cl/siete',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.bcentral.cl/en/web/banco-central/areas/statistics'
        },
        'ZA': {
            country: 'Afrique du Sud',
            institution: 'South African Reserve Bank (SARB)',
            url: 'https://www.resbank.co.za/en/home/what-we-do/statistics',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.resbank.co.za/en/home/what-we-do/statistics'
        },
        'IL': {
            country: 'Israël',
            institution: 'Central Bureau of Statistics',
            url: 'https://data.gov.il/api/3',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://data.gov.il/'
        },
        'TH': {
            country: 'Thaïlande',
            institution: 'Bank of Thailand',
            url: 'https://www.bot.or.th/en/statistics.html',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.bot.or.th/en/statistics.html'
        },
        'MY': {
            country: 'Malaisie',
            institution: 'Bank Negara Malaysia (BNM)',
            url: 'https://www.bnm.gov.my/publications/statistics',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.bnm.gov.my/'
        },
        'ID': {
            country: 'Indonésie',
            institution: 'Bank Indonesia (BI)',
            url: 'https://www.bi.go.id/en/statistik/',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.bi.go.id/en/statistik/'
        },
        'PH': {
            country: 'Philippines',
            institution: 'Bangko Sentral ng Pilipinas (BSP)',
            url: 'https://www.bsp.gov.ph/SitePages/Statistics/Statistics.aspx',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.bsp.gov.ph/'
        },
        'VN': {
            country: 'Vietnam',
            institution: 'General Statistics Office',
            url: 'https://www.gso.gov.vn/en/statistical-data/',
            authRequired: false,
            quality: 'moderate',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            docs: 'https://www.gso.gov.vn/'
        },
        'CO': {
            country: 'Colombie',
            institution: 'Banco de la República (Colombia)',
            url: 'https://www.banrep.gov.co/en/statistics',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.banrep.gov.co/en/statistics'
        },
        'PE': {
            country: 'Pérou',
            institution: 'Banco Central de Reserva del Perú (BCRP)',
            url: 'https://estadisticas.bcrp.gob.pe/estadisticas/series/',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://estadisticas.bcrp.gob.pe/'
        },
        'PT': {
            country: 'Portugal',
            institution: 'Banco de Portugal (Central Bank)',
            url: 'https://www.bportugal.pt/en/page/statistics',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            note: 'Balance des paiements',
            docs: 'https://bpstat.bportugal.pt/'
        },
        'GR': {
            country: 'Grèce',
            institution: 'Bank of Greece (Central Bank)',
            url: 'https://www.bankofgreece.gr/en/statistics',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            note: 'Balance des paiements',
            docs: 'https://www.bankofgreece.gr/en/statistics'
        },
        'IE': {
            country: 'Irlande',
            institution: 'Central Bank of Ireland',
            url: 'https://data.centralbank.ie/',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.centralbank.ie/statistics'
        },
        'CZ': {
            country: 'République tchèque',
            institution: 'Czech Statistical Office',
            url: 'https://vdb.czso.cz/pll/eweb/package_eurodwh.createxml',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.czso.cz/csu/czso/otevrena_data'
        },
        'HU': {
            country: 'Hongrie',
            institution: 'Hungarian Central Statistical Office',
            url: 'https://www.ksh.hu/',
            authRequired: false,
            quality: 'moderate',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.ksh.hu/'
        },
        'RO': {
            country: 'Roumanie',
            institution: 'National Institute of Statistics',
            url: 'http://statistici.insse.ro:8077/tempo-ins/',
            authRequired: false,
            quality: 'moderate',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'http://www.insse.ro/'
        },
        'TR': {
            country: 'Turquie',
            institution: 'Central Bank of Turkey (TCMB)',
            url: 'https://evds2.tcmb.gov.tr/index.php',
            authRequired: true,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://evds2.tcmb.gov.tr/'
        },
        'AE': {
            country: 'Émirats Arabes Unis',
            institution: 'Federal Competitiveness and Statistics Centre',
            url: 'https://fcsc.gov.ae/en-us',
            authRequired: false,
            quality: 'moderate',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            docs: 'https://fcsc.gov.ae/'
        }
    },

    // ===== NIVEAU 3 : Limité (Couverture partielle, API limitée) =====
    limited: {
        'CN': {
            country: 'Chine',
            institution: 'China Customs',
            url: 'http://www.customs.gov.cn/',
            authRequired: true,
            quality: 'limited',
            coverage: 'aggregate',
            updateFrequency: 'monthly',
            note: 'Données agrégées uniquement, accès restreint aux détails',
            docs: 'http://english.customs.gov.cn/'
        },
        'RU': {
            country: 'Russie',
            institution: 'Bank of Russia (CBR)',
            url: 'https://www.cbr.ru/eng/statistics/',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'quarterly',
            note: 'Balance des paiements',
            docs: 'https://www.cbr.ru/eng/statistics/'
        },
        'EG': {
            country: 'Égypte',
            institution: 'CAPMAS',
            url: 'https://www.capmas.gov.eg/',
            authRequired: false,
            quality: 'limited',
            coverage: 'partial',
            updateFrequency: 'annual',
            docs: 'https://www.capmas.gov.eg/'
        },
        'KE': {
            country: 'Kenya',
            institution: 'Kenya National Bureau of Statistics',
            url: 'https://www.knbs.or.ke/',
            authRequired: false,
            quality: 'limited',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            docs: 'https://www.knbs.or.ke/'
        }
    },

    // ===== FALLBACK : Organisations Internationales =====
    international: {
        'COMTRADE': {
            name: 'UN Comtrade',
            url: 'https://comtradeapi.un.org/data/v1',
            coverage: '190+ countries',
            authRequired: false,
            limits: { hourly: 100 },
            quality: 'good',
            priority: 2,
            note: 'Fallback si API nationale indisponible',
            docs: 'https://comtradeapi.un.org/'
        },
        'WORLDBANK': {
            name: 'World Bank',
            url: 'https://api.worldbank.org/v2',
            coverage: '200+ countries',
            authRequired: false,
            quality: 'good',
            priority: 3,
            indicators: {
                exports: 'NE.EXP.GNFS.CD',
                imports: 'NE.IMP.GNFS.CD',
                tradeBalance: 'NE.RSB.GNFS.CD'
            },
            note: 'Fallback secondaire',
            docs: 'https://datahelpdesk.worldbank.org/knowledgebase/topics/125589'
        },
        'IMF': {
            name: 'International Monetary Fund',
            url: 'https://www.imf.org/external/datamapper/api/v1',
            coverage: '190+ countries',
            authRequired: false,
            quality: 'good',
            priority: 3,
            note: 'Balance des paiements',
            docs: 'https://www.imf.org/en/Data'
        },
        'EUROSTAT': {
            name: 'Eurostat',
            url: 'https://ec.europa.eu/eurostat/api',
            coverage: '27 EU countries',
            authRequired: false,
            quality: 'excellent',
            priority: 1,
            region: 'EU',
            note: 'Prioritaire pour pays UE si API nationale échoue',
            docs: 'https://ec.europa.eu/eurostat/web/main/data/web-services'
        }
    }
};

// ISO Country codes mapping
const COUNTRY_ISO_CODES = {
    'France': 'FR',
    'Allemagne': 'DE',
    'Italie': 'IT',
    'Espagne': 'ES',
    'Pays-Bas': 'NL',
    'Belgique': 'BE',
    'Pologne': 'PL',
    'Suède': 'SE',
    'Danemark': 'DK',
    'Finlande': 'FI',
    'Norvège': 'NO',
    'Autriche': 'AT',
    'Portugal': 'PT',
    'Grèce': 'GR',
    'Irlande': 'IE',
    'République tchèque': 'CZ',
    'Hongrie': 'HU',
    'Roumanie': 'RO',
    'Royaume-Uni': 'GB',
    'Suisse': 'CH',
    'Russie': 'RU',
    'Turquie': 'TR',
    'États-Unis': 'US',
    'Canada': 'CA',
    'Brésil': 'BR',
    'Mexique': 'MX',
    'Argentine': 'AR',
    'Chili': 'CL',
    'Colombie': 'CO',
    'Pérou': 'PE',
    'Japon': 'JP',
    'Corée du Sud': 'KR',
    'Chine': 'CN',
    'Inde': 'IN',
    'Australie': 'AU',
    'Nouvelle-Zélande': 'NZ',
    'Singapour': 'SG',
    'Thaïlande': 'TH',
    'Malaisie': 'MY',
    'Indonésie': 'ID',
    'Philippines': 'PH',
    'Vietnam': 'VN',
    'Israël': 'IL',
    'Émirats Arabes Unis': 'AE',
    'Afrique du Sud': 'ZA',
    'Égypte': 'EG',
    'Kenya': 'KE'
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NATIONAL_APIS, COUNTRY_ISO_CODES };
}
