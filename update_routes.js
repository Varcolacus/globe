const fs = require('fs');

// Lire le fichier app.js
const content = fs.readFileSync('app.js', 'utf8');

// Trouver les limites de la section routes
const startMarker = '    return [';
const endMarker = '    ];\n}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex) + endMarker.length;

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find route section markers');
    process.exit(1);
}

// Nouvelles routes (54 routes régionales)
const newRoutes = `    return [
        
        // ===== ASIE DE L'EST (Chine, Japon, Corée) - 8 routes =====
        
        // 1. Shanghai Hub North (Shanghai → Tianjin → Qingdao → Dalian)
        {
            name: 'China North Coast',
            waypoints: [
                { lat: 31.23, lng: 121.47 }, // Shanghai
                { lat: 32.5, lng: 121.0 },   // Intermédiaire
                { lat: 34.0, lng: 120.5 },   // Intermédiaire
                { lat: 36.07, lng: 120.38 }, // Qingdao
                { lat: 37.5, lng: 119.5 },   // Intermédiaire
                { lat: 39.13, lng: 117.20 }, // Tianjin
                { lat: 39.0, lng: 120.0 },   // Intermédiaire
                { lat: 38.91, lng: 121.60 }  // Dalian
            ],
            intensity: 280,
            annualPassages: 5200,
            color: '#e74c3c'
        },
        
        // 2. Shanghai Hub South (Shanghai → Ningbo → Xiamen)
        {
            name: 'China Central Coast',
            waypoints: [
                { lat: 31.23, lng: 121.47 }, // Shanghai
                { lat: 30.5, lng: 121.5 },   // Intermédiaire
                { lat: 29.87, lng: 121.55 }, // Ningbo-Zhoushan
                { lat: 27.0, lng: 120.0 },   // Intermédiaire
                { lat: 24.48, lng: 118.09 }  // Xiamen
            ],
            intensity: 300,
            annualPassages: 5800,
            color: '#e74c3c'
        },
        
        // 3. Pearl River Delta (Xiamen → Shenzhen → Guangzhou → Hong Kong)
        {
            name: 'Pearl River Delta',
            waypoints: [
                { lat: 24.48, lng: 118.09 }, // Xiamen
                { lat: 23.5, lng: 116.0 },   // Intermédiaire
                { lat: 22.54, lng: 114.06 }, // Shenzhen
                { lat: 22.8, lng: 113.7 },   // Intermédiaire
                { lat: 23.13, lng: 113.26 }, // Guangzhou
                { lat: 22.7, lng: 113.8 },   // Intermédiaire
                { lat: 22.30, lng: 114.17 }  // Hong Kong
            ],
            intensity: 320,
            annualPassages: 6200,
            color: '#e74c3c'
        },
        
        // 4. Korea-China Link (Shanghai → Busan)
        {
            name: 'China-Korea',
            waypoints: [
                { lat: 31.23, lng: 121.47 }, // Shanghai
                { lat: 32.5, lng: 124.0 },   // Mer Jaune
                { lat: 34.0, lng: 126.5 },   // Mer Jaune Centre
                { lat: 35.18, lng: 129.08 }  // Busan
            ],
            intensity: 250,
            annualPassages: 4800,
            color: '#e67e22'
        },
        
        // 5. Korea-Japan (Busan → Tokyo → Yokohama)
        {
            name: 'Korea-Japan',
            waypoints: [
                { lat: 35.18, lng: 129.08 }, // Busan
                { lat: 35.0, lng: 132.0 },   // Mer du Japon
                { lat: 35.2, lng: 135.0 },   // Intermédiaire
                { lat: 35.62, lng: 139.78 }, // Tokyo
                { lat: 35.5, lng: 139.7 },   // Intermédiaire
                { lat: 35.44, lng: 139.64 }  // Yokohama
            ],
            intensity: 220,
            annualPassages: 4200,
            color: '#e67e22'
        },
        
        // 6. Japan Coastal (Tokyo → Yokohama loop)
        {
            name: 'Tokyo Bay',
            waypoints: [
                { lat: 35.62, lng: 139.78 }, // Tokyo
                { lat: 35.5, lng: 139.9 },   // Baie de Tokyo
                { lat: 35.44, lng: 139.64 }, // Yokohama
                { lat: 35.55, lng: 139.7 }   // Retour
            ],
            intensity: 180,
            annualPassages: 3400,
            color: '#3498db'
        },
        
        // 7. Taiwan Circuit (Hong Kong → Kaohsiung → Xiamen)
        {
            name: 'Taiwan Strait',
            waypoints: [
                { lat: 22.30, lng: 114.17 }, // Hong Kong
                { lat: 22.0, lng: 117.0 },   // Détroit de Taiwan
                { lat: 22.61, lng: 120.30 }, // Kaohsiung
                { lat: 23.5, lng: 119.5 },   // Côte Taiwan
                { lat: 24.48, lng: 118.09 }  // Xiamen
            ],
            intensity: 240,
            annualPassages: 4600,
            color: '#9b59b6'
        },
        
        // 8. North Japan-Korea (Dalian → Busan → Tokyo)
        {
            name: 'Northeast Asia',
            waypoints: [
                { lat: 38.91, lng: 121.60 }, // Dalian
                { lat: 37.5, lng: 125.0 },   // Mer Jaune
                { lat: 35.18, lng: 129.08 }, // Busan
                { lat: 35.3, lng: 134.0 },   // Mer du Japon
                { lat: 35.62, lng: 139.78 }  // Tokyo
            ],
            intensity: 200,
            annualPassages: 3800,
            color: '#1abc9c'
        },
        
        // ===== ASIE DU SUD-EST - 10 routes =====
        
        // 9. Singapore Hub North (Singapore → Port Klang → Penang)
        {
            name: 'Malacca Strait West',
            waypoints: [
                { lat: 1.29, lng: 103.85 },  // Singapore
                { lat: 1.8, lng: 103.0 },    // Détroit Malacca Sud
                { lat: 2.99, lng: 101.39 },  // Port Klang
                { lat: 4.0, lng: 100.8 },    // Intermédiaire
                { lat: 5.42, lng: 100.34 }   // Penang
            ],
            intensity: 290,
            annualPassages: 5600,
            color: '#f39c12'
        },
        
        // 10. Singapore-Thailand (Singapore → Tanjung Pelepas → Laem Chabang)
        {
            name: 'Singapore-Thailand',
            waypoints: [
                { lat: 1.29, lng: 103.85 },  // Singapore
                { lat: 1.32, lng: 103.7 },   // Intermédiaire
                { lat: 1.36, lng: 103.55 },  // Tanjung Pelepas
                { lat: 3.0, lng: 102.5 },    // Golfe de Thaïlande Sud
                { lat: 6.0, lng: 101.5 },    // Golfe de Thaïlande
                { lat: 10.0, lng: 101.0 },   // Approche Laem Chabang
                { lat: 13.08, lng: 100.88 }  // Laem Chabang
            ],
            intensity: 270,
            annualPassages: 5200,
            color: '#f39c12'
        },
        
        // 11. Vietnam Coast (Ho Chi Minh → Hai Phong)
        {
            name: 'Vietnam Coast',
            waypoints: [
                { lat: 10.77, lng: 106.70 }, // Ho Chi Minh City
                { lat: 13.0, lng: 107.5 },   // Centre Vietnam
                { lat: 16.0, lng: 108.0 },   // Da Nang
                { lat: 19.0, lng: 107.0 },   // Nord Vietnam
                { lat: 20.86, lng: 106.68 }  // Hai Phong
            ],
            intensity: 210,
            annualPassages: 4000,
            color: '#16a085'
        },
        
        // 12. Indochina Link (Laem Chabang → Ho Chi Minh → Manila)
        {
            name: 'Indochina-Philippines',
            waypoints: [
                { lat: 13.08, lng: 100.88 }, // Laem Chabang
                { lat: 12.0, lng: 103.5 },   // Golfe Thaïlande Est
                { lat: 10.77, lng: 106.70 }, // Ho Chi Minh City
                { lat: 11.5, lng: 110.0 },   // Mer de Chine Sud
                { lat: 13.0, lng: 115.0 },   // Approche Philippines
                { lat: 14.59, lng: 120.98 }  // Manila
            ],
            intensity: 230,
            annualPassages: 4400,
            color: '#16a085'
        },
        
        // 13. Philippines-Taiwan (Manila → Kaohsiung → Hong Kong)
        {
            name: 'Philippines-Taiwan',
            waypoints: [
                { lat: 14.59, lng: 120.98 }, // Manila
                { lat: 18.0, lng: 121.0 },   // Nord Luzon
                { lat: 21.0, lng: 120.5 },   // Approche Taiwan
                { lat: 22.61, lng: 120.30 }, // Kaohsiung
                { lat: 22.4, lng: 117.0 },   // Détroit Taiwan
                { lat: 22.30, lng: 114.17 }  // Hong Kong
            ],
            intensity: 200,
            annualPassages: 3800,
            color: '#8e44ad'
        },
        
        // 14. Indonesia West (Singapore → Jakarta → Penang)
        {
            name: 'Indonesia-Malaysia',
            waypoints: [
                { lat: 1.29, lng: 103.85 },  // Singapore
                { lat: -2.0, lng: 105.0 },   // Détroit Sunda
                { lat: -6.10, lng: 106.88 }, // Jakarta
                { lat: -3.0, lng: 104.0 },   // Côte Sumatra
                { lat: 1.0, lng: 102.0 },    // Détroit Malacca
                { lat: 5.42, lng: 100.34 }   // Penang
            ],
            intensity: 220,
            annualPassages: 4200,
            color: '#27ae60'
        },
        
        // 15. Myanmar-Thailand (Yangon → Laem Chabang)
        {
            name: 'Myanmar-Thailand',
            waypoints: [
                { lat: 16.78, lng: 96.16 },  // Yangon
                { lat: 14.0, lng: 97.5 },    // Golfe Martaban
                { lat: 11.5, lng: 99.0 },    // Golfe Thaïlande Ouest
                { lat: 13.08, lng: 100.88 }  // Laem Chabang
            ],
            intensity: 150,
            annualPassages: 2800,
            color: '#27ae60'
        },
        
        // 16. China-Vietnam (Hong Kong → Hai Phong → Ho Chi Minh)
        {
            name: 'China-Vietnam',
            waypoints: [
                { lat: 22.30, lng: 114.17 }, // Hong Kong
                { lat: 21.0, lng: 110.0 },   // Golfe Tonkin
                { lat: 20.86, lng: 106.68 }, // Hai Phong
                { lat: 16.0, lng: 108.0 },   // Centre Vietnam
                { lat: 10.77, lng: 106.70 }  // Ho Chi Minh City
            ],
            intensity: 190,
            annualPassages: 3600,
            color: '#c0392b'
        },
        
        // 17. Bangkok-Singapore Express
        {
            name: 'Thailand-Singapore Express',
            waypoints: [
                { lat: 13.08, lng: 100.88 }, // Laem Chabang
                { lat: 8.0, lng: 100.5 },    // Isthme de Kra
                { lat: 5.42, lng: 100.34 },  // Penang
                { lat: 2.99, lng: 101.39 },  // Port Klang
                { lat: 1.29, lng: 103.85 }   // Singapore
            ],
            intensity: 260,
            annualPassages: 5000,
            color: '#d35400'
        },
        
        // 18. Indonesia East (Jakarta → Manila)
        {
            name: 'Indonesia-Philippines',
            waypoints: [
                { lat: -6.10, lng: 106.88 }, // Jakarta
                { lat: -2.0, lng: 110.0 },   // Mer de Java
                { lat: 2.0, lng: 115.0 },    // Bornéo Sud
                { lat: 6.0, lng: 118.0 },    // Mer de Sulu
                { lat: 10.0, lng: 120.0 },   // Approche Manila
                { lat: 14.59, lng: 120.98 }  // Manila
            ],
            intensity: 170,
            annualPassages: 3200,
            color: '#2c3e50'
        },
        
        // ===== ASIE DU SUD & OCÉAN INDIEN - 6 routes =====
        
        // 19. India West Coast (Mundra → Jawaharlal Nehru)
        {
            name: 'India West Coast',
            waypoints: [
                { lat: 22.84, lng: 69.72 },  // Mundra
                { lat: 21.0, lng: 71.0 },    // Golfe de Kutch
                { lat: 18.95, lng: 72.95 }   // Jawaharlal Nehru (Mumbai)
            ],
            intensity: 240,
            annualPassages: 4600,
            color: '#16a085'
        },
        
        // 20. India East Coast (Chennai → Calcutta → Chittagong)
        {
            name: 'Bay of Bengal',
            waypoints: [
                { lat: 13.08, lng: 80.27 },  // Chennai
                { lat: 17.0, lng: 84.0 },    // Côte Est Inde
                { lat: 22.57, lng: 88.36 },  // Calcutta
                { lat: 22.4, lng: 90.0 },    // Intermédiaire
                { lat: 22.36, lng: 91.78 }   // Chittagong
            ],
            intensity: 180,
            annualPassages: 3400,
            color: '#16a085'
        },
        
        // 21. Sri Lanka Hub (Colombo → Chennai → Jawaharlal Nehru)
        {
            name: 'India-Sri Lanka',
            waypoints: [
                { lat: 6.93, lng: 79.85 },   // Colombo
                { lat: 10.0, lng: 79.5 },    // Intermédiaire
                { lat: 13.08, lng: 80.27 },  // Chennai
                { lat: 16.0, lng: 76.0 },    // Côte Inde Ouest
                { lat: 18.95, lng: 72.95 }   // Jawaharlal Nehru
            ],
            intensity: 220,
            annualPassages: 4200,
            color: '#27ae60'
        },
        
        // 22. Pakistan-India (Karachi → Mundra → Jawaharlal Nehru)
        {
            name: 'Pakistan-India',
            waypoints: [
                { lat: 24.86, lng: 67.02 },  // Karachi
                { lat: 23.5, lng: 68.5 },    // Côte Pakistan
                { lat: 22.84, lng: 69.72 },  // Mundra
                { lat: 20.5, lng: 71.5 },    // Côte Gujarat
                { lat: 18.95, lng: 72.95 }   // Jawaharlal Nehru
            ],
            intensity: 160,
            annualPassages: 3000,
            color: '#e67e22'
        },
        
        // 23. Colombo-Singapore (via Malacca)
        {
            name: 'Indian Ocean Crossing',
            waypoints: [
                { lat: 6.93, lng: 79.85 },   // Colombo
                { lat: 5.0, lng: 85.0 },     // Océan Indien
                { lat: 4.0, lng: 92.0 },     // Approche Malacca
                { lat: 3.0, lng: 98.0 },     // Détroit Malacca
                { lat: 1.29, lng: 103.85 }   // Singapore
            ],
            intensity: 280,
            annualPassages: 5400,
            color: '#3498db'
        },
        
        // 24. Mumbai-Middle East (Jawaharlal Nehru → Dubai → Salalah)
        {
            name: 'India-Middle East',
            waypoints: [
                { lat: 18.95, lng: 72.95 },  // Jawaharlal Nehru
                { lat: 22.0, lng: 66.0 },    // Mer d'Arabie
                { lat: 25.28, lng: 55.33 },  // Dubai
                { lat: 21.0, lng: 58.0 },    // Golfe d'Oman
                { lat: 16.95, lng: 54.00 }   // Salalah
            ],
            intensity: 230,
            annualPassages: 4400,
            color: '#9b59b6'
        },
        
        // ===== MOYEN-ORIENT & MER ROUGE - 4 routes =====
        
        // 25. Gulf Route (Dubai → Salalah → Jeddah)
        {
            name: 'Arabian Gulf',
            waypoints: [
                { lat: 25.28, lng: 55.33 },  // Dubai
                { lat: 23.0, lng: 58.0 },    // Golfe d'Oman
                { lat: 19.0, lng: 58.0 },    // Mer d'Arabie
                { lat: 16.95, lng: 54.00 },  // Salalah
                { lat: 15.0, lng: 48.0 },    // Golfe d'Aden
                { lat: 16.0, lng: 42.0 },    // Mer Rouge Sud
                { lat: 21.54, lng: 39.17 }   // Jeddah
            ],
            intensity: 210,
            annualPassages: 4000,
            color: '#e74c3c'
        },
        
        // 26. Red Sea Route (Jeddah → Suez → Port Said)
        {
            name: 'Red Sea',
            waypoints: [
                { lat: 21.54, lng: 39.17 },  // Jeddah
                { lat: 25.0, lng: 37.0 },    // Mer Rouge Centre
                { lat: 28.0, lng: 34.5 },    // Mer Rouge Nord
                { lat: 29.97, lng: 32.55 },  // Suez Canal
                { lat: 31.26, lng: 32.30 }   // Port Said
            ],
            intensity: 260,
            annualPassages: 5000,
            color: '#c0392b'
        },
        
        // 27. Suez-Mediterranean (Port Said → Alexandria → Piraeus)
        {
            name: 'Eastern Mediterranean',
            waypoints: [
                { lat: 31.26, lng: 32.30 },  // Port Said
                { lat: 31.23, lng: 30.0 },   // Intermédiaire
                { lat: 31.20, lng: 29.92 },  // Alexandria
                { lat: 34.0, lng: 27.0 },    // Mer Méditerranée Est
                { lat: 37.95, lng: 23.65 }   // Piraeus
            ],
            intensity: 200,
            annualPassages: 3800,
            color: '#3498db'
        },
        
        // 28. Colombo-Suez (Main Suez feeder)
        {
            name: 'Suez Feeder Route',
            waypoints: [
                { lat: 6.93, lng: 79.85 },   // Colombo
                { lat: 10.0, lng: 72.0 },    // Océan Indien
                { lat: 12.0, lng: 60.0 },    // Approche Golfe Aden
                { lat: 13.0, lng: 50.0 },    // Golfe d'Aden
                { lat: 13.5, lng: 43.3 },    // Bab el-Mandeb
                { lat: 16.0, lng: 40.0 },    // Mer Rouge Sud
                { lat: 22.0, lng: 37.0 },    // Mer Rouge Centre
                { lat: 29.97, lng: 32.55 }   // Suez
            ],
            intensity: 290,
            annualPassages: 5600,
            color: '#8e44ad'
        },
        
        // ===== EUROPE DU NORD - 6 routes =====
        
        // 29. North Range (Rotterdam → Antwerp → Hamburg → Bremerhaven)
        {
            name: 'North Sea Range',
            waypoints: [
                { lat: 51.92, lng: 4.48 },   // Rotterdam
                { lat: 51.6, lng: 4.4 },     // Intermédiaire
                { lat: 51.27, lng: 4.41 },   // Antwerp
                { lat: 52.0, lng: 5.5 },     // Mer du Nord Sud
                { lat: 53.55, lng: 9.99 },   // Hamburg
                { lat: 53.54, lng: 8.58 }    // Bremerhaven
            ],
            intensity: 280,
            annualPassages: 5400,
            color: '#2ecc71'
        },
        
        // 30. UK-Benelux (Felixstowe → Rotterdam → Antwerp)
        {
            name: 'UK-Benelux',
            waypoints: [
                { lat: 51.96, lng: 1.35 },   // Felixstowe
                { lat: 51.9, lng: 3.0 },     // Mer du Nord
                { lat: 51.92, lng: 4.48 },   // Rotterdam
                { lat: 51.6, lng: 4.4 },     // Intermédiaire
                { lat: 51.27, lng: 4.41 }    // Antwerp
            ],
            intensity: 240,
            annualPassages: 4600,
            color: '#3498db'
        },
        
        // 31. Channel Route (Le Havre → Rotterdam → Hamburg)
        {
            name: 'Channel-North Sea',
            waypoints: [
                { lat: 49.49, lng: 0.12 },   // Le Havre
                { lat: 51.0, lng: 1.5 },     // Manche
                { lat: 51.92, lng: 4.48 },   // Rotterdam
                { lat: 52.5, lng: 7.0 },     // Mer du Nord
                { lat: 53.55, lng: 9.99 }    // Hamburg
            ],
            intensity: 220,
            annualPassages: 4200,
            color: '#9b59b6'
        },
        
        // 32. Baltic Route (Hamburg → Gdansk → Helsinki → St. Petersburg)
        {
            name: 'Baltic Sea',
            waypoints: [
                { lat: 53.55, lng: 9.99 },   // Hamburg
                { lat: 54.5, lng: 13.0 },    // Mer Baltique Ouest
                { lat: 54.35, lng: 18.65 },  // Gdansk
                { lat: 57.0, lng: 20.0 },    // Mer Baltique Centre
                { lat: 60.17, lng: 24.94 },  // Helsinki
                { lat: 60.0, lng: 27.5 },    // Golfe de Finlande
                { lat: 59.94, lng: 30.31 }   // St. Petersburg
            ],
            intensity: 180,
            annualPassages: 3400,
            color: '#16a085'
        },
        
        // 33. Scandinavia Route (Gothenburg → Hamburg → Gdansk)
        {
            name: 'Scandinavia',
            waypoints: [
                { lat: 57.71, lng: 11.97 },  // Gothenburg
                { lat: 56.0, lng: 12.5 },    // Cattégat
                { lat: 54.5, lng: 12.0 },    // Mer Baltique
                { lat: 53.55, lng: 9.99 },   // Hamburg
                { lat: 54.0, lng: 14.0 },    // Retour Baltique
                { lat: 54.35, lng: 18.65 }   // Gdansk
            ],
            intensity: 150,
            annualPassages: 2800,
            color: '#e67e22'
        },
        
        // 34. Nordic-Baltic (Helsinki → Riga → Gdansk)
        {
            name: 'Nordic-Baltic',
            waypoints: [
                { lat: 60.17, lng: 24.94 },  // Helsinki
                { lat: 59.0, lng: 23.5 },    // Golfe de Finlande Sud
                { lat: 56.95, lng: 24.11 },  // Riga
                { lat: 55.5, lng: 21.0 },    // Mer Baltique
                { lat: 54.35, lng: 18.65 }   // Gdansk
            ],
            intensity: 130,
            annualPassages: 2400,
            color: '#95a5a6'
        },
        
        // ===== MÉDITERRANÉE - 6 routes =====
        
        // 35. West Mediterranean (Barcelona → Valencia → Algeciras)
        {
            name: 'Spain East Coast',
            waypoints: [
                { lat: 41.35, lng: 2.17 },   // Barcelona
                { lat: 40.0, lng: 0.5 },     // Intermédiaire
                { lat: 39.47, lng: -0.38 },  // Valencia
                { lat: 37.5, lng: -2.0 },    // Méditerranée Sud Espagne
                { lat: 36.13, lng: -5.45 }   // Algeciras
            ],
            intensity: 210,
            annualPassages: 4000,
            color: '#e74c3c'
        },
        
        // 36. Gibraltar-Italy (Algeciras → Marseille → Genoa)
        {
            name: 'West Med Main',
            waypoints: [
                { lat: 36.13, lng: -5.45 },  // Algeciras
                { lat: 39.0, lng: 0.0 },     // Baléares
                { lat: 43.30, lng: 5.37 },   // Marseille
                { lat: 43.8, lng: 7.5 },     // Côte d'Azur
                { lat: 44.41, lng: 8.93 }    // Genoa
            ],
            intensity: 240,
            annualPassages: 4600,
            color: '#3498db'
        },
        
        // 37. Tyrrhenian Route (Genoa → Gioia Tauro → Piraeus)
        {
            name: 'Italy-Greece',
            waypoints: [
                { lat: 44.41, lng: 8.93 },   // Genoa
                { lat: 42.0, lng: 11.0 },    // Mer Tyrrhénienne
                { lat: 38.43, lng: 15.90 },  // Gioia Tauro
                { lat: 37.5, lng: 19.0 },    // Mer Ionienne
                { lat: 37.95, lng: 23.65 }   // Piraeus
            ],
            intensity: 220,
            annualPassages: 4200,
            color: '#9b59b6'
        },
        
        // 38. Adriatic Route (Piraeus → Barcelona via Italy)
        {
            name: 'Adriatic-West Med',
            waypoints: [
                { lat: 37.95, lng: 23.65 },  // Piraeus
                { lat: 38.0, lng: 18.0 },    // Mer Ionienne
                { lat: 38.43, lng: 15.90 },  // Gioia Tauro
                { lat: 40.0, lng: 12.0 },    // Mer Tyrrhénienne
                { lat: 41.35, lng: 2.17 }    // Barcelona
            ],
            intensity: 190,
            annualPassages: 3600,
            color: '#1abc9c'
        },
        
        // 39. Black Sea Route (Istanbul → Constanta → Odessa)
        {
            name: 'Black Sea',
            waypoints: [
                { lat: 41.02, lng: 28.97 },  // Istanbul
                { lat: 42.0, lng: 29.5 },    // Mer Noire Ouest
                { lat: 44.17, lng: 28.65 },  // Constanta
                { lat: 45.5, lng: 30.0 },    // Mer Noire Nord
                { lat: 46.48, lng: 30.73 }   // Odessa
            ],
            intensity: 170,
            annualPassages: 3200,
            color: '#34495e'
        },
        
        // 40. Turkey Route (Istanbul → Izmir → Piraeus)
        {
            name: 'Turkey-Greece',
            waypoints: [
                { lat: 41.02, lng: 28.97 },  // Istanbul
                { lat: 40.0, lng: 27.5 },    // Mer de Marmara
                { lat: 38.42, lng: 27.14 },  // Izmir
                { lat: 38.0, lng: 25.0 },    // Mer Égée
                { lat: 37.95, lng: 23.65 }   // Piraeus
            ],
            intensity: 180,
            annualPassages: 3400,
            color: '#f39c12'
        },
        
        // ===== AMÉRIQUE DU NORD - 6 routes =====
        
        // 41. US West Coast (Seattle → Vancouver → Los Angeles → Long Beach)
        {
            name: 'US West Coast',
            waypoints: [
                { lat: 49.28, lng: -123.12 },// Vancouver
                { lat: 48.0, lng: -123.5 },  // Puget Sound
                { lat: 47.60, lng: -122.33 },// Seattle
                { lat: 40.0, lng: -124.0 },  // Côte Oregon/Californie
                { lat: 35.0, lng: -121.0 },  // Californie Centre
                { lat: 33.74, lng: -118.27 },// Los Angeles
                { lat: 33.76, lng: -118.23 },// Intermédiaire
                { lat: 33.75, lng: -118.19 } // Long Beach
            ],
            intensity: 260,
            annualPassages: 5000,
            color: '#e74c3c'
        },
        
        // 42. US East Coast North (New York → Savannah → Charleston)
        {
            name: 'US East Coast',
            waypoints: [
                { lat: 40.67, lng: -74.05 }, // New York/New Jersey
                { lat: 38.0, lng: -75.0 },   // Atlantique
                { lat: 32.78, lng: -79.93 }, // Charleston
                { lat: 32.4, lng: -80.5 },   // Intermédiaire
                { lat: 32.03, lng: -81.09 }  // Savannah
            ],
            intensity: 240,
            annualPassages: 4600,
            color: '#2ecc71'
        },
        
        // 43. Gulf Coast (Houston → Colon)
        {
            name: 'US Gulf-Panama',
            waypoints: [
                { lat: 29.73, lng: -95.27 }, // Houston
                { lat: 27.0, lng: -92.0 },   // Golfe Mexique
                { lat: 22.0, lng: -86.0 },   // Yucatan
                { lat: 17.0, lng: -82.0 },   // Mer Caraïbes Ouest
                { lat: 12.0, lng: -80.0 },   // Approche Panama
                { lat: 9.36, lng: -79.90 }   // Colon (Panama)
            ],
            intensity: 200,
            annualPassages: 3800,
            color: '#3498db'
        },
        
        // 44. Trans-Atlantic Main (New York → Rotterdam)
        {
            name: 'North Atlantic Main',
            waypoints: [
                { lat: 40.67, lng: -74.05 }, // New York
                { lat: 42.0, lng: -65.0 },   // Large USA
                { lat: 44.0, lng: -50.0 },   // Atlantique Ouest
                { lat: 47.0, lng: -35.0 },   // Mid-Atlantic
                { lat: 49.0, lng: -20.0 },   // Atlantique Est
                { lat: 50.5, lng: -5.0 },    // Manche Approche
                { lat: 51.92, lng: 4.48 }    // Rotterdam
            ],
            intensity: 270,
            annualPassages: 5200,
            color: '#9b59b6'
        },
        
        // 45. Canada-Europe (Vancouver → Hamburg via Atlantic)
        {
            name: 'Canada-Europe',
            waypoints: [
                { lat: 49.28, lng: -123.12 },// Vancouver
                { lat: 40.67, lng: -74.05 }, // New York (via terre conceptuel - simplifié)
                { lat: 45.0, lng: -50.0 },   // Atlantique
                { lat: 50.0, lng: -25.0 },   // Mid-Atlantic
                { lat: 53.55, lng: 9.99 }    // Hamburg
            ],
            intensity: 150,
            annualPassages: 2800,
            color: '#16a085'
        },
        
        // 46. East Coast-Mediterranean (New York → Algeciras)
        {
            name: 'US-Mediterranean',
            waypoints: [
                { lat: 40.67, lng: -74.05 }, // New York
                { lat: 38.0, lng: -60.0 },   // Atlantique
                { lat: 36.0, lng: -40.0 },   // Mid-Atlantic Sud
                { lat: 36.0, lng: -20.0 },   // Atlantique Est
                { lat: 36.0, lng: -8.0 },    // Approche Gibraltar
                { lat: 36.13, lng: -5.45 }   // Algeciras
            ],
            intensity: 190,
            annualPassages: 3600,
            color: '#e67e22'
        },
        
        // ===== AMÉRIQUE DU SUD & CARAÏBES - 4 routes =====
        
        // 47. Caribbean Route (Colon → Cartagena → Santos)
        {
            name: 'Caribbean-Brazil',
            waypoints: [
                { lat: 9.36, lng: -79.90 },  // Colon
                { lat: 10.39, lng: -75.51 }, // Cartagena
                { lat: 5.0, lng: -60.0 },    // Atlantique Tropical
                { lat: -5.0, lng: -40.0 },   // Côte Brésil Nord
                { lat: -15.0, lng: -38.0 },  // Côte Brésil
                { lat: -23.96, lng: -46.33 } // Santos
            ],
            intensity: 180,
            annualPassages: 3400,
            color: '#f39c12'
        },
        
        // 48. South America West Coast (Callao → Colon)
        {
            name: 'Pacific South America',
            waypoints: [
                { lat: -12.05, lng: -77.15 },// Callao (Lima)
                { lat: -5.0, lng: -81.0 },   // Équateur
                { lat: 2.0, lng: -80.0 },    // Colombie Pacifique
                { lat: 9.36, lng: -79.90 }   // Colon
            ],
            intensity: 140,
            annualPassages: 2600,
            color: '#1abc9c'
        },
        
        // 49. South Atlantic (Santos → Buenos Aires → Cape Town)
        {
            name: 'South Atlantic',
            waypoints: [
                { lat: -23.96, lng: -46.33 },// Santos
                { lat: -30.0, lng: -50.0 },  // Large Brésil Sud
                { lat: -34.61, lng: -58.37 },// Buenos Aires
                { lat: -35.0, lng: -40.0 },  // Atlantique Sud
                { lat: -34.0, lng: -20.0 },  // Approche Afrique
                { lat: -33.93, lng: 18.42 }  // Cape Town
            ],
            intensity: 120,
            annualPassages: 2200,
            color: '#8e44ad'
        },
        
        // 50. US East-South America (New York → Santos)
        {
            name: 'North-South America',
            waypoints: [
                { lat: 40.67, lng: -74.05 }, // New York
                { lat: 32.03, lng: -81.09 }, // Savannah
                { lat: 20.0, lng: -65.0 },   // Caraïbes
                { lat: 5.0, lng: -50.0 },    // Atlantique Équatorial
                { lat: -10.0, lng: -40.0 },  // Côte Brésil
                { lat: -23.96, lng: -46.33 } // Santos
            ],
            intensity: 160,
            annualPassages: 3000,
            color: '#27ae60'
        },
        
        // ===== AFRIQUE - 4 routes bonus =====
        
        // 51. North Africa (Tanger Med → Algeciras → Casablanca → Dakar)
        {
            name: 'North-West Africa',
            waypoints: [
                { lat: 35.88, lng: -5.57 },  // Tanger Med
                { lat: 36.0, lng: -5.5 },    // Détroit Gibraltar
                { lat: 36.13, lng: -5.45 },  // Algeciras
                { lat: 35.0, lng: -6.5 },    // Côte Maroc
                { lat: 33.59, lng: -7.62 },  // Casablanca
                { lat: 20.0, lng: -17.0 },   // Côte Atlantique Afrique
                { lat: 14.69, lng: -17.44 }  // Dakar
            ],
            intensity: 150,
            annualPassages: 2800,
            color: '#d35400'
        },
        
        // 52. West Africa (Dakar → Abidjan → Lagos → Tema)
        {
            name: 'West Africa Coast',
            waypoints: [
                { lat: 14.69, lng: -17.44 }, // Dakar
                { lat: 10.0, lng: -15.0 },   // Côte Guinée
                { lat: 5.31, lng: -4.01 },   // Abidjan
                { lat: 5.62, lng: -0.02 },   // Tema
                { lat: 6.0, lng: 2.0 },      // Golfe Guinée
                { lat: 6.44, lng: 3.40 }     // Lagos
            ],
            intensity: 130,
            annualPassages: 2400,
            color: '#c0392b'
        },
        
        // 53. East Africa (Durban → Mombasa → Dar es Salaam)
        {
            name: 'East Africa Coast',
            waypoints: [
                { lat: -29.86, lng: 31.04 }, // Durban
                { lat: -20.0, lng: 35.0 },   // Canal Mozambique
                { lat: -6.80, lng: 39.28 },  // Dar es Salaam
                { lat: -5.0, lng: 39.5 },    // Intermédiaire
                { lat: -4.04, lng: 39.67 }   // Mombasa
            ],
            intensity: 140,
            annualPassages: 2600,
            color: '#16a085'
        },
        
        // 54. Cape-Suez (Cape Town → Durban → Mombasa → Suez)
        {
            name: 'Africa East Coast-Suez',
            waypoints: [
                { lat: -33.93, lng: 18.42 }, // Cape Town
                { lat: -29.86, lng: 31.04 }, // Durban
                { lat: -15.0, lng: 40.0 },   // Canal Mozambique
                { lat: -4.04, lng: 39.67 },  // Mombasa
                { lat: 5.0, lng: 45.0 },     // Océan Indien Ouest
                { lat: 13.0, lng: 45.0 },    // Golfe Aden
                { lat: 20.0, lng: 38.0 },    // Mer Rouge
                { lat: 29.97, lng: 32.55 }   // Suez
            ],
            intensity: 170,
            annualPassages: 3200,
            color: '#2c3e50'
        }
    ];
}`;

// Remplacer la section
const newContent = content.substring(0, startIndex) + newRoutes + content.substring(endIndex);

// Écrire le nouveau fichier
fs.writeFileSync('app.js', newContent, 'utf8');

console.log('✅ Successfully updated routes! 54 regional routes created.');
console.log('📊 Route coverage:');
console.log('  - East Asia: 8 routes');
console.log('  - Southeast Asia: 10 routes');
console.log('  - South Asia & Indian Ocean: 6 routes');
console.log('  - Middle East & Red Sea: 4 routes');
console.log('  - Northern Europe: 6 routes');
console.log('  - Mediterranean: 6 routes');
console.log('  - North America: 6 routes');
console.log('  - South America & Caribbean: 4 routes');
console.log('  - Africa: 4 routes');
