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
            institution: 'Statistics Netherlands (CBS)',
            url: 'https://opendata.cbs.nl/ODataApi/odata',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            format: 'OData',
            tableCodes: {
                trade: '82009ENG'
            },
            docs: 'https://opendata.cbs.nl/statline/portal.html?_la=en&_catalog=CBS'
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
            institution: 'Office for National Statistics (ONS)',
            url: 'https://api.ons.gov.uk',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            datasets: {
                trade: '/datasets/trade'
            },
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
            institution: 'Swiss Federal Customs Administration',
            url: 'https://www.gate.ezv.admin.ch/swissimpex',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.gate.ezv.admin.ch/'
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
            institution: 'Statistics Finland',
            url: 'https://pxdata.stat.fi/PxWeb/api/v1',
            authRequired: false,
            quality: 'excellent',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.stat.fi/org/lainsaadanto/avoin_data_en.html'
        }
    },

    // ===== NIVEAU 2 : APIs Standard (Bonne qualité, documentation disponible) =====
    standard: {
        'DE': {
            country: 'Allemagne',
            institution: 'Federal Statistical Office (Destatis)',
            url: 'https://www-genesis.destatis.de/genesisWS/rest/2020',
            authRequired: true,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.destatis.de/EN/Service/OpenData/_node.html'
        },
        'FR': {
            country: 'France',
            institution: 'Banque de France & Douanes Françaises',
            url: 'https://webstat.banque-france.fr/ws/',
            urlSecondary: 'https://api.gouv.fr/les-api/api_cle_douane',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://developer.webstat.banque-france.fr/'
        },
        'IT': {
            country: 'Italie',
            institution: 'Italian National Institute of Statistics (ISTAT)',
            url: 'http://sdmx.istat.it/SDMXWS/rest',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            format: 'SDMX',
            docs: 'https://www.istat.it/en/analysis-and-products/api'
        },
        'ES': {
            country: 'Espagne',
            institution: 'National Statistics Institute (INE)',
            url: 'https://servicios.ine.es/wstempus/js/EN',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.ine.es/dyngs/DataLab/en/manual.html?cid=45'
        },
        'JP': {
            country: 'Japon',
            institution: 'e-Stat (Ministry of Internal Affairs)',
            url: 'https://api.e-stat.go.jp/rest/3.0/app',
            authRequired: true,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            language: 'ja/en',
            docs: 'https://www.e-stat.go.jp/api/'
        },
        'KR': {
            country: 'Corée du Sud',
            institution: 'Korea Customs Service',
            url: 'https://unipass.customs.go.kr/api',
            authRequired: true,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://unipass.customs.go.kr/'
        },
        'BR': {
            country: 'Brésil',
            institution: 'Comex Stat (MDIC)',
            url: 'http://api.comexstat.mdic.gov.br/general',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'http://comexstat.mdic.gov.br/en/api'
        },
        'MX': {
            country: 'Mexique',
            institution: 'INEGI',
            url: 'https://www.inegi.org.mx/app/api/denue/v1',
            authRequired: true,
            quality: 'good',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            docs: 'https://www.inegi.org.mx/servicios/api_indicadores.html'
        },
        'IN': {
            country: 'Inde',
            institution: 'DGCI&S (Ministry of Commerce)',
            url: 'https://tradestat.commerce.gov.in/eidb',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://tradestat.commerce.gov.in/'
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
            institution: 'Statistics Austria',
            url: 'https://data.statistik.gv.at/web/meta.jsp',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.statistik.at/en/services/tools/services/open-data'
        },
        'BE': {
            country: 'Belgique',
            institution: 'StatBel',
            url: 'https://statbel.fgov.be/en/open-data',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://statbel.fgov.be/en/open-data'
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
            institution: 'INDEC',
            url: 'https://apis.datos.gob.ar/series/api',
            authRequired: false,
            quality: 'good',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            docs: 'https://apis.datos.gob.ar/'
        },
        'CL': {
            country: 'Chili',
            institution: 'INE Chile',
            url: 'https://api.ine.cl/api/v1',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.ine.cl/herramientas/desarrolladores'
        },
        'ZA': {
            country: 'Afrique du Sud',
            institution: 'Stats SA',
            url: 'http://www.statssa.gov.za/api',
            authRequired: false,
            quality: 'good',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            docs: 'http://www.statssa.gov.za/'
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
            institution: 'Thai Customs',
            url: 'https://www.customs.go.th/statistic_report.php',
            authRequired: true,
            quality: 'moderate',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.customs.go.th/'
        },
        'MY': {
            country: 'Malaisie',
            institution: 'DOSM',
            url: 'https://api.dosm.gov.my',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://open.dosm.gov.my/'
        },
        'ID': {
            country: 'Indonésie',
            institution: 'BPS Statistics Indonesia',
            url: 'https://webapi.bps.go.id',
            authRequired: true,
            quality: 'moderate',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            docs: 'https://webapi.bps.go.id/'
        },
        'PH': {
            country: 'Philippines',
            institution: 'Philippine Statistics Authority',
            url: 'https://psa.gov.ph/id/162679',
            authRequired: false,
            quality: 'moderate',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            docs: 'https://psa.gov.ph/'
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
            institution: 'DANE',
            url: 'https://www.dane.gov.co/files/sen/ccee/microdatos',
            authRequired: false,
            quality: 'moderate',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            docs: 'https://www.dane.gov.co/'
        },
        'PE': {
            country: 'Pérou',
            institution: 'INEI',
            url: 'https://www.inei.gob.pe/',
            authRequired: false,
            quality: 'moderate',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            docs: 'https://www.inei.gob.pe/'
        },
        'PT': {
            country: 'Portugal',
            institution: 'Statistics Portugal (INE)',
            url: 'https://www.ine.pt/xportal/xmain?xpid=INE',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.ine.pt/'
        },
        'GR': {
            country: 'Grèce',
            institution: 'Hellenic Statistical Authority (ELSTAT)',
            url: 'https://www.statistics.gr/en/home/',
            authRequired: false,
            quality: 'moderate',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.statistics.gr/'
        },
        'IE': {
            country: 'Irlande',
            institution: 'Central Statistics Office',
            url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset',
            authRequired: false,
            quality: 'good',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://data.cso.ie/'
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
            institution: 'TurkStat',
            url: 'https://data.tuik.gov.tr/Kategori/GetKategori?p=dis-ticaret-104',
            authRequired: true,
            quality: 'moderate',
            coverage: 'complete',
            updateFrequency: 'monthly',
            docs: 'https://www.tuik.gov.tr/'
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
            institution: 'Rosstat',
            url: 'https://rosstat.gov.ru/',
            authRequired: false,
            quality: 'limited',
            coverage: 'partial',
            updateFrequency: 'quarterly',
            note: 'Accès restreint en 2026',
            docs: 'https://rosstat.gov.ru/'
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
