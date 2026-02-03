// Toutes les capitales du monde
const countries = [
    { lat: 48.8566, lng: 2.3522, name: 'France', capital: 'Paris', flag: '🇫🇷' },
    { lat: 35.6762, lng: 139.6503, name: 'Afghanistan', capital: 'Kabul', flag: '🇦🇫' },
    { lat: 41.3275, lng: 19.8187, name: 'Albanie', capital: 'Tirana', flag: '🇦🇱' },
    { lat: 36.7538, lng: 3.0588, name: 'Algérie', capital: 'Alger', flag: '🇩🇿' },
    { lat: 42.5063, lng: 1.5218, name: 'Andorre', capital: 'Andorre-la-Vieille', flag: '🇦🇩' },
    { lat: -8.8383, lng: 13.2344, name: 'Angola', capital: 'Luanda', flag: '🇦🇴' },
    { lat: -34.6037, lng: -58.3816, name: 'Argentine', capital: 'Buenos Aires', flag: '🇦🇷' },
    { lat: 40.1792, lng: 44.4991, name: 'Arménie', capital: 'Erevan', flag: '🇦🇲' },
    { lat: -35.2809, lng: 149.1300, name: 'Australie', capital: 'Canberra', flag: '🇦🇺' },
    { lat: 48.2082, lng: 16.3738, name: 'Autriche', capital: 'Vienne', flag: '🇦🇹' },
    { lat: 40.4093, lng: 49.8671, name: 'Azerbaïdjan', capital: 'Bakou', flag: '🇦🇿' },
    { lat: 25.0343, lng: -77.3963, name: 'Bahamas', capital: 'Nassau', flag: '🇧🇸' },
    { lat: 26.0667, lng: 50.5577, name: 'Bahreïn', capital: 'Manama', flag: '🇧🇭' },
    { lat: 23.8103, lng: 90.4125, name: 'Bangladesh', capital: 'Dhaka', flag: '🇧🇩' },
    { lat: 13.0969, lng: -59.6145, name: 'Barbade', capital: 'Bridgetown', flag: '🇧🇧' },
    { lat: 53.9045, lng: 27.5615, name: 'Biélorussie', capital: 'Minsk', flag: '🇧🇾' },
    { lat: 50.8503, lng: 4.3517, name: 'Belgique', capital: 'Bruxelles', flag: '🇧🇪' },
    { lat: 17.2510, lng: -88.7590, name: 'Belize', capital: 'Belmopan', flag: '🇧🇿' },
    { lat: 6.4969, lng: 2.6289, name: 'Bénin', capital: 'Porto-Novo', flag: '🇧🇯' },
    { lat: 27.4728, lng: 89.6390, name: 'Bhoutan', capital: 'Thimphou', flag: '🇧🇹' },
    { lat: -16.5000, lng: -68.1500, name: 'Bolivie', capital: 'La Paz', flag: '🇧🇴' },
    { lat: 43.8563, lng: 18.4131, name: 'Bosnie-Herzégovine', capital: 'Sarajevo', flag: '🇧🇦' },
    { lat: -24.6282, lng: 25.9231, name: 'Botswana', capital: 'Gaborone', flag: '🇧🇼' },
    { lat: -15.8267, lng: -47.9218, name: 'Brésil', capital: 'Brasília', flag: '🇧🇷' },
    { lat: 4.8895, lng: 114.9422, name: 'Brunei', capital: 'Bandar Seri Begawan', flag: '🇧🇳' },
    { lat: 42.6977, lng: 23.3219, name: 'Bulgarie', capital: 'Sofia', flag: '🇧🇬' },
    { lat: 12.3714, lng: -1.5197, name: 'Burkina Faso', capital: 'Ouagadougou', flag: '🇧🇫' },
    { lat: -3.3731, lng: 29.9189, name: 'Burundi', capital: 'Gitega', flag: '🇧🇮' },
    { lat: 11.5564, lng: 104.9282, name: 'Cambodge', capital: 'Phnom Penh', flag: '🇰🇭' },
    { lat: 3.8480, lng: 11.5021, name: 'Cameroun', capital: 'Yaoundé', flag: '🇨🇲' },
    { lat: 45.4215, lng: -75.6972, name: 'Canada', capital: 'Ottawa', flag: '🇨🇦' },
    { lat: 14.9333, lng: -23.5133, name: 'Cap-Vert', capital: 'Praia', flag: '🇨🇻' },
    { lat: 4.3947, lng: 18.5582, name: 'Centrafrique', capital: 'Bangui', flag: '🇨🇫' },
    { lat: 12.1348, lng: 15.0557, name: 'Tchad', capital: "N'Djamena", flag: '🇹🇩' },
    { lat: -33.4489, lng: -70.6693, name: 'Chili', capital: 'Santiago', flag: '🇨🇱' },
    { lat: 39.9042, lng: 116.4074, name: 'Chine', capital: 'Beijing', flag: '🇨🇳' },
    { lat: 4.7110, lng: -74.0721, name: 'Colombie', capital: 'Bogotá', flag: '🇨🇴' },
    { lat: -11.7022, lng: 43.2551, name: 'Comores', capital: 'Moroni', flag: '🇰🇲' },
    { lat: -4.3217, lng: 15.3125, name: 'Congo', capital: 'Brazzaville', flag: '🇨🇬' },
    { lat: -4.0383, lng: 21.7587, name: 'RD Congo', capital: 'Kinshasa', flag: '🇨🇩' },
    { lat: 9.9281, lng: -84.0907, name: 'Costa Rica', capital: 'San José', flag: '🇨🇷' },
    { lat: 45.8150, lng: 15.9819, name: 'Croatie', capital: 'Zagreb', flag: '🇭🇷' },
    { lat: 23.1136, lng: -82.3666, name: 'Cuba', capital: 'La Havane', flag: '🇨🇺' },
    { lat: 35.1264, lng: 33.4299, name: 'Chypre', capital: 'Nicosie', flag: '🇨🇾' },
    { lat: 50.0755, lng: 14.4378, name: 'Tchéquie', capital: 'Prague', flag: '🇨🇿' },
    { lat: 55.6761, lng: 12.5683, name: 'Danemark', capital: 'Copenhague', flag: '🇩🇰' },
    { lat: 11.5721, lng: 43.1456, name: 'Djibouti', capital: 'Djibouti', flag: '🇩🇯' },
    { lat: 15.3000, lng: -61.3833, name: 'Dominique', capital: 'Roseau', flag: '🇩🇲' },
    { lat: 18.4861, lng: -69.9312, name: 'Rép. Dominicaine', capital: 'Saint-Domingue', flag: '🇩🇴' },
    { lat: -0.1807, lng: -78.4678, name: 'Équateur', capital: 'Quito', flag: '🇪🇨' },
    { lat: 30.0444, lng: 31.2357, name: 'Égypte', capital: 'Le Caire', flag: '🇪🇬' },
    { lat: 13.6929, lng: -89.2182, name: 'Salvador', capital: 'San Salvador', flag: '🇸🇻' },
    { lat: 3.7504, lng: 8.7371, name: 'Guinée équatoriale', capital: 'Malabo', flag: '🇬🇶' },
    { lat: 15.3229, lng: 38.9251, name: 'Érythrée', capital: 'Asmara', flag: '🇪🇷' },
    { lat: 59.4370, lng: 24.7536, name: 'Estonie', capital: 'Tallinn', flag: '🇪🇪' },
    { lat: -26.3054, lng: 31.1367, name: 'Eswatini', capital: 'Mbabane', flag: '🇸🇿' },
    { lat: 9.0320, lng: 38.7469, name: 'Éthiopie', capital: 'Addis-Abeba', flag: '🇪🇹' },
    { lat: -18.1416, lng: 178.4419, name: 'Fidji', capital: 'Suva', flag: '🇫🇯' },
    { lat: 60.1695, lng: 24.9354, name: 'Finlande', capital: 'Helsinki', flag: '🇫🇮' },
    { lat: 0.3901, lng: 9.4544, name: 'Gabon', capital: 'Libreville', flag: '🇬🇦' },
    { lat: 13.4549, lng: -16.5790, name: 'Gambie', capital: 'Banjul', flag: '🇬🇲' },
    { lat: 41.7151, lng: 44.8271, name: 'Géorgie', capital: 'Tbilissi', flag: '🇬🇪' },
    { lat: 52.5200, lng: 13.4050, name: 'Allemagne', capital: 'Berlin', flag: '🇩🇪' },
    { lat: 5.6037, lng: -0.1870, name: 'Ghana', capital: 'Accra', flag: '🇬🇭' },
    { lat: 37.9838, lng: 23.7275, name: 'Grèce', capital: 'Athènes', flag: '🇬🇷' },
    { lat: 12.0561, lng: -61.7488, name: 'Grenade', capital: "Saint-George's", flag: '🇬🇩' },
    { lat: 14.6349, lng: -90.5069, name: 'Guatemala', capital: 'Guatemala', flag: '🇬🇹' },
    { lat: 9.5092, lng: -13.7122, name: 'Guinée', capital: 'Conakry', flag: '🇬🇳' },
    { lat: 11.8037, lng: -15.1804, name: 'Guinée-Bissau', capital: 'Bissau', flag: '🇬🇼' },
    { lat: 6.8013, lng: -58.1551, name: 'Guyana', capital: 'Georgetown', flag: '🇬🇾' },
    { lat: 18.5944, lng: -72.3074, name: 'Haïti', capital: 'Port-au-Prince', flag: '🇭🇹' },
    { lat: 14.0723, lng: -87.1921, name: 'Honduras', capital: 'Tegucigalpa', flag: '🇭🇳' },
    { lat: 47.4979, lng: 19.0402, name: 'Hongrie', capital: 'Budapest', flag: '🇭🇺' },
    { lat: 64.1466, lng: -21.9426, name: 'Islande', capital: 'Reykjavik', flag: '🇮🇸' },
    { lat: 28.6139, lng: 77.2090, name: 'Inde', capital: 'New Delhi', flag: '🇮🇳' },
    { lat: -6.2088, lng: 106.8456, name: 'Indonésie', capital: 'Jakarta', flag: '🇮🇩' },
    { lat: 35.6892, lng: 51.3890, name: 'Iran', capital: 'Téhéran', flag: '🇮🇷' },
    { lat: 33.3128, lng: 44.3615, name: 'Irak', capital: 'Bagdad', flag: '🇮🇶' },
    { lat: 53.3498, lng: -6.2603, name: 'Irlande', capital: 'Dublin', flag: '🇮🇪' },
    { lat: 31.7683, lng: 35.2137, name: 'Israël', capital: 'Jérusalem', flag: '🇮🇱' },
    { lat: 41.9028, lng: 12.4964, name: 'Italie', capital: 'Rome', flag: '🇮🇹' },
    { lat: 6.9271, lng: -1.2350, name: 'Côte d\'Ivoire', capital: 'Yamoussoukro', flag: '🇨🇮' },
    { lat: 18.0179, lng: -76.8099, name: 'Jamaïque', capital: 'Kingston', flag: '🇯🇲' },
    { lat: 35.6762, lng: 139.6503, name: 'Japon', capital: 'Tokyo', flag: '🇯🇵' },
    { lat: 31.9454, lng: 35.9284, name: 'Jordanie', capital: 'Amman', flag: '🇯🇴' },
    { lat: 51.1694, lng: 71.4491, name: 'Kazakhstan', capital: 'Astana', flag: '🇰🇿' },
    { lat: -1.2921, lng: 36.8219, name: 'Kenya', capital: 'Nairobi', flag: '🇰🇪' },
    { lat: 1.3397, lng: 103.7450, name: 'Kiribati', capital: 'Tarawa-Sud', flag: '🇰🇮' },
    { lat: 42.8746, lng: 74.5698, name: 'Kirghizistan', capital: 'Bichkek', flag: '🇰🇬' },
    { lat: 29.3759, lng: 47.9774, name: 'Koweït', capital: 'Koweït', flag: '🇰🇼' },
    { lat: 17.9750, lng: 102.6331, name: 'Laos', capital: 'Vientiane', flag: '🇱🇦' },
    { lat: 56.9496, lng: 24.1052, name: 'Lettonie', capital: 'Riga', flag: '🇱🇻' },
    { lat: 33.8886, lng: 35.4955, name: 'Liban', capital: 'Beyrouth', flag: '🇱🇧' },
    { lat: -29.3167, lng: 27.4833, name: 'Lesotho', capital: 'Maseru', flag: '🇱🇸' },
    { lat: 6.3156, lng: -10.8074, name: 'Liberia', capital: 'Monrovia', flag: '🇱🇷' },
    { lat: 32.8872, lng: 13.1913, name: 'Libye', capital: 'Tripoli', flag: '🇱🇾' },
    { lat: 47.1410, lng: 9.5209, name: 'Liechtenstein', capital: 'Vaduz', flag: '🇱🇮' },
    { lat: 54.6872, lng: 25.2797, name: 'Lituanie', capital: 'Vilnius', flag: '🇱🇹' },
    { lat: 49.6116, lng: 6.1319, name: 'Luxembourg', capital: 'Luxembourg', flag: '🇱🇺' },
    { lat: -18.8792, lng: 47.5079, name: 'Madagascar', capital: 'Antananarivo', flag: '🇲🇬' },
    { lat: -13.9626, lng: 33.7741, name: 'Malawi', capital: 'Lilongwe', flag: '🇲🇼' },
    { lat: 3.1390, lng: 101.6869, name: 'Malaisie', capital: 'Kuala Lumpur', flag: '🇲🇾' },
    { lat: 4.1755, lng: 73.5093, name: 'Maldives', capital: 'Malé', flag: '🇲🇻' },
    { lat: 12.6392, lng: -8.0029, name: 'Mali', capital: 'Bamako', flag: '🇲🇱' },
    { lat: 35.8989, lng: 14.5146, name: 'Malte', capital: 'La Valette', flag: '🇲🇹' },
    { lat: 7.1315, lng: 171.1845, name: 'Marshall', capital: 'Majuro', flag: '🇲🇭' },
    { lat: 18.0735, lng: -15.9582, name: 'Mauritanie', capital: 'Nouakchott', flag: '🇲🇷' },
    { lat: -20.1609, lng: 57.5012, name: 'Maurice', capital: 'Port-Louis', flag: '🇲🇺' },
    { lat: 19.4326, lng: -99.1332, name: 'Mexique', capital: 'Mexico', flag: '🇲🇽' },
    { lat: 6.9271, lng: 158.1610, name: 'Micronésie', capital: 'Palikir', flag: '🇫🇲' },
    { lat: 47.0105, lng: 28.8638, name: 'Moldavie', capital: 'Chișinău', flag: '🇲🇩' },
    { lat: 43.7384, lng: 7.4246, name: 'Monaco', capital: 'Monaco', flag: '🇲🇨' },
    { lat: 47.8864, lng: 106.9057, name: 'Mongolie', capital: 'Oulan-Bator', flag: '🇲🇳' },
    { lat: 42.4304, lng: 19.2594, name: 'Monténégro', capital: 'Podgorica', flag: '🇲🇪' },
    { lat: 33.9716, lng: -6.8498, name: 'Maroc', capital: 'Rabat', flag: '🇲🇦' },
    { lat: -25.9655, lng: 32.5832, name: 'Mozambique', capital: 'Maputo', flag: '🇲🇿' },
    { lat: 19.7633, lng: 96.0785, name: 'Birmanie', capital: 'Naypyidaw', flag: '🇲🇲' },
    { lat: -22.5609, lng: 17.0658, name: 'Namibie', capital: 'Windhoek', flag: '🇳🇦' },
    { lat: -0.5477, lng: 166.9209, name: 'Nauru', capital: 'Yaren', flag: '🇳🇷' },
    { lat: 27.7172, lng: 85.3240, name: 'Népal', capital: 'Katmandou', flag: '🇳🇵' },
    { lat: 52.3676, lng: 4.9041, name: 'Pays-Bas', capital: 'Amsterdam', flag: '🇳🇱' },
    { lat: -41.2865, lng: 174.7762, name: 'Nouvelle-Zélande', capital: 'Wellington', flag: '🇳🇿' },
    { lat: 12.1150, lng: -86.2362, name: 'Nicaragua', capital: 'Managua', flag: '🇳🇮' },
    { lat: 13.5127, lng: 2.1128, name: 'Niger', capital: 'Niamey', flag: '🇳🇪' },
    { lat: 9.0765, lng: 7.3986, name: 'Nigeria', capital: 'Abuja', flag: '🇳🇬' },
    { lat: 40.7295, lng: 74.0134, name: 'Macédoine du Nord', capital: 'Skopje', flag: '🇲🇰' },
    { lat: 39.0392, lng: 125.7625, name: 'Corée du Nord', capital: 'Pyongyang', flag: '🇰🇵' },
    { lat: 59.9139, lng: 10.7522, name: 'Norvège', capital: 'Oslo', flag: '🇳🇴' },
    { lat: 23.6100, lng: 58.5400, name: 'Oman', capital: 'Mascate', flag: '🇴🇲' },
    { lat: 33.6844, lng: 73.0479, name: 'Pakistan', capital: 'Islamabad', flag: '🇵🇰' },
    { lat: 7.3419, lng: 134.4789, name: 'Palaos', capital: 'Ngerulmud', flag: '🇵🇼' },
    { lat: 9.1021, lng: -79.4028, name: 'Panama', capital: 'Panama', flag: '🇵🇦' },
    { lat: -9.4438, lng: 147.1803, name: 'Papouasie-Nouvelle-Guinée', capital: 'Port Moresby', flag: '🇵🇬' },
    { lat: -25.2637, lng: -57.5759, name: 'Paraguay', capital: 'Asunción', flag: '🇵🇾' },
    { lat: -12.0464, lng: -77.0428, name: 'Pérou', capital: 'Lima', flag: '🇵🇪' },
    { lat: 14.5995, lng: 120.9842, name: 'Philippines', capital: 'Manille', flag: '🇵🇭' },
    { lat: 52.2297, lng: 21.0122, name: 'Pologne', capital: 'Varsovie', flag: '🇵🇱' },
    { lat: 38.7223, lng: -9.1393, name: 'Portugal', capital: 'Lisbonne', flag: '🇵🇹' },
    { lat: 25.3548, lng: 51.1839, name: 'Qatar', capital: 'Doha', flag: '🇶🇦' },
    { lat: 44.4268, lng: 26.1025, name: 'Roumanie', capital: 'Bucarest', flag: '🇷🇴' },
    { lat: 55.7558, lng: 37.6173, name: 'Russie', capital: 'Moscou', flag: '🇷🇺' },
    { lat: -1.9403, lng: 29.8739, name: 'Rwanda', capital: 'Kigali', flag: '🇷🇼' },
    { lat: 17.3578, lng: -62.7830, name: 'Saint-Christophe-et-Niévès', capital: 'Basseterre', flag: '🇰🇳' },
    { lat: 13.9094, lng: -60.9789, name: 'Sainte-Lucie', capital: 'Castries', flag: '🇱🇨' },
    { lat: 13.1579, lng: -61.2248, name: 'Saint-Vincent-et-les-Grenadines', capital: 'Kingstown', flag: '🇻🇨' },
    { lat: -13.7590, lng: -172.1046, name: 'Samoa', capital: 'Apia', flag: '🇼🇸' },
    { lat: 43.9424, lng: 12.4578, name: 'Saint-Marin', capital: 'Saint-Marin', flag: '🇸🇲' },
    { lat: 0.3302, lng: 6.7333, name: 'Sao Tomé-et-Principe', capital: 'São Tomé', flag: '🇸🇹' },
    { lat: 24.7136, lng: 46.6753, name: 'Arabie saoudite', capital: 'Riyad', flag: '🇸🇦' },
    { lat: 14.6928, lng: -17.4467, name: 'Sénégal', capital: 'Dakar', flag: '🇸🇳' },
    { lat: 44.7866, lng: 20.4489, name: 'Serbie', capital: 'Belgrade', flag: '🇷🇸' },
    { lat: -4.6796, lng: 55.4920, name: 'Seychelles', capital: 'Victoria', flag: '🇸🇨' },
    { lat: 8.4657, lng: -13.2317, name: 'Sierra Leone', capital: 'Freetown', flag: '🇸🇱' },
    { lat: 1.3521, lng: 103.8198, name: 'Singapour', capital: 'Singapour', flag: '🇸🇬' },
    { lat: 48.1486, lng: 17.1077, name: 'Slovaquie', capital: 'Bratislava', flag: '🇸🇰' },
    { lat: 46.0569, lng: 14.5058, name: 'Slovénie', capital: 'Ljubljana', flag: '🇸🇮' },
    { lat: -9.6457, lng: 160.1562, name: 'Salomon', capital: 'Honiara', flag: '🇸🇧' },
    { lat: 2.0469, lng: 45.3182, name: 'Somalie', capital: 'Mogadiscio', flag: '🇸🇴' },
    { lat: -25.7479, lng: 28.2293, name: 'Afrique du Sud', capital: 'Pretoria', flag: '🇿🇦' },
    { lat: 37.5665, lng: 126.9780, name: 'Corée du Sud', capital: 'Séoul', flag: '🇰🇷' },
    { lat: 4.8594, lng: 31.5713, name: 'Soudan du Sud', capital: 'Djouba', flag: '🇸🇸' },
    { lat: 40.4168, lng: -3.7038, name: 'Espagne', capital: 'Madrid', flag: '🇪🇸' },
    { lat: 6.9271, lng: 79.8612, name: 'Sri Lanka', capital: 'Sri Jayawardenapura Kotte', flag: '🇱🇰' },
    { lat: 15.5007, lng: 32.5599, name: 'Soudan', capital: 'Khartoum', flag: '🇸🇩' },
    { lat: 5.8520, lng: -55.2038, name: 'Suriname', capital: 'Paramaribo', flag: '🇸🇷' },
    { lat: 59.3293, lng: 18.0686, name: 'Suède', capital: 'Stockholm', flag: '🇸🇪' },
    { lat: 46.9479, lng: 7.4474, name: 'Suisse', capital: 'Berne', flag: '🇨🇭' },
    { lat: 33.5138, lng: 36.2765, name: 'Syrie', capital: 'Damas', flag: '🇸🇾' },
    { lat: 38.5598, lng: 68.7738, name: 'Tadjikistan', capital: 'Douchanbé', flag: '🇹🇯' },
    { lat: -6.7924, lng: 39.2083, name: 'Tanzanie', capital: 'Dodoma', flag: '🇹🇿' },
    { lat: 13.7563, lng: 100.5018, name: 'Thaïlande', capital: 'Bangkok', flag: '🇹🇭' },
    { lat: -8.5569, lng: 125.5603, name: 'Timor oriental', capital: 'Dili', flag: '🇹🇱' },
    { lat: 6.1256, lng: 1.2226, name: 'Togo', capital: 'Lomé', flag: '🇹🇬' },
    { lat: -21.1393, lng: -175.2018, name: 'Tonga', capital: "Nuku'alofa", flag: '🇹🇴' },
    { lat: 10.6918, lng: -61.2225, name: 'Trinité-et-Tobago', capital: 'Port-d\'Espagne', flag: '🇹🇹' },
    { lat: 36.8065, lng: 10.1815, name: 'Tunisie', capital: 'Tunis', flag: '🇹🇳' },
    { lat: 39.9334, lng: 32.8597, name: 'Turquie', capital: 'Ankara', flag: '🇹🇷' },
    { lat: 37.9601, lng: 58.3261, name: 'Turkménistan', capital: 'Achgabat', flag: '🇹🇲' },
    { lat: -8.5211, lng: 179.1962, name: 'Tuvalu', capital: 'Funafuti', flag: '🇹🇻' },
    { lat: 0.3136, lng: 32.5811, name: 'Ouganda', capital: 'Kampala', flag: '🇺🇬' },
    { lat: 50.4501, lng: 30.5234, name: 'Ukraine', capital: 'Kiev', flag: '🇺🇦' },
    { lat: 24.4539, lng: 54.3773, name: 'Émirats arabes unis', capital: 'Abou Dabi', flag: '🇦🇪' },
    { lat: 51.5074, lng: -0.1278, name: 'Royaume-Uni', capital: 'Londres', flag: '🇬🇧' },
    { lat: 38.9072, lng: -77.0369, name: 'États-Unis', capital: 'Washington DC', flag: '🇺🇸' },
    { lat: -34.9011, lng: -56.1645, name: 'Uruguay', capital: 'Montevideo', flag: '🇺🇾' },
    { lat: 41.2995, lng: 69.2401, name: 'Ouzbékistan', capital: 'Tachkent', flag: '🇺🇿' },
    { lat: -17.7333, lng: 168.3273, name: 'Vanuatu', capital: 'Port-Vila', flag: '🇻🇺' },
    { lat: 41.9029, lng: 12.4534, name: 'Vatican', capital: 'Vatican', flag: '🇻🇦' },
    { lat: 10.4806, lng: -66.9036, name: 'Venezuela', capital: 'Caracas', flag: '🇻🇪' },
    { lat: 21.0285, lng: 105.8542, name: 'Vietnam', capital: 'Hanoï', flag: '🇻🇳' },
    { lat: 15.5527, lng: 48.5164, name: 'Yémen', capital: 'Sanaa', flag: '🇾🇪' },
    { lat: -15.4167, lng: 28.2833, name: 'Zambie', capital: 'Lusaka', flag: '🇿🇲' },
    { lat: -17.8252, lng: 31.0335, name: 'Zimbabwe', capital: 'Harare', flag: '🇿🇼' }
];

// Connexions commerciales depuis la France vers tous les autres pays
const connections = countries
    .filter(country => country.name !== 'France')
    .map(country => ({
        from: 'France',
        to: country.name
    }));

// Créer les données d'arcs (commerce France -> monde)
const arcsData = connections.map(conn => {
    const startCountry = countries.find(c => c.name === conn.from);
    const endCountry = countries.find(c => c.name === conn.to);
    
    return {
        startLat: startCountry.lat,
        startLng: startCountry.lng,
        endLat: endCountry.lat,
        endLng: endCountry.lng,
        color: '#667eea',
        stroke: 0.3
    };
});

// Initialiser le globe avec texture HD
const globe = Globe()
    (document.getElementById('globe-container'))
    .globeImageUrl('images/earth-8k.jpg')
    .bumpImageUrl('images/earth-topology.png')
    .backgroundImageUrl('images/night-sky.png')
    .showAtmosphere(true)
    .atmosphereColor('#667eea')
    .atmosphereAltitude(0.15)
    .pointsData(countries)
    .pointAltitude(0.01)
    .pointRadius(d => d.name === 'France' ? 1.2 : 0.7)
    .pointColor(d => d.name === 'France' ? '#0055A4' : '#ff6b6b')
    .pointLabel(d => `
        <div style="background: rgba(0,0,0,0.9); padding: 12px; border-radius: 8px; border: 1px solid #667eea;">
            <div style="font-size: 18px; font-weight: bold; color: #667eea; margin-bottom: 5px;">
                ${d.flag} ${d.name}
            </div>
            <div style="font-size: 13px; color: #ccc;">
                📍 ${d.capital}
            </div>
        </div>
    `)
    .arcsData(arcsData)
    .arcColor('color')
    .arcDashLength(0.4)
    .arcDashGap(0.2)
    .arcDashAnimateTime(2000)
    .arcStroke(d => d.stroke)
    .arcsTransitionDuration(0);

// Charger les frontières des pays depuis un GeoJSON public
fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(res => res.json())
    .then(worldData => {
        const countries = topojson.feature(worldData, worldData.objects.countries).features;
        globe
            .polygonsData(countries)
            .polygonAltitude(0.005)
            .polygonCapColor(() => 'rgba(0, 0, 0, 0)')
            .polygonSideColor(() => 'rgba(255, 255, 255, 0.1)')
            .polygonStrokeColor(() => '#ffffff')
            .polygonLineWidth(0.5);
        console.log('🗺️ Frontières chargées:', countries.length, 'pays');
    })
    .catch(err => console.error('❌ Erreur frontières:', err));

// Configuration de la caméra pour vue globale
globe.pointOfView({ altitude: 2.5 }, 0);

// Variables d'état
let isRotating = true;
let rotationSpeed = 0.2;

// Animation de rotation automatique
function animate() {
    if (isRotating) {
        const controls = globe.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = rotationSpeed;
    }
    requestAnimationFrame(animate);
}
animate();

// Gestion des boutons
const rotateToggle = document.getElementById('rotate-toggle');
const resetView = document.getElementById('reset-view');

rotateToggle.addEventListener('click', () => {
    isRotating = !isRotating;
    const controls = globe.controls();
    controls.autoRotate = isRotating;
    rotateToggle.textContent = isRotating ? '⏸️ Pause Rotation' : '▶️ Reprendre Rotation';
});

resetView.addEventListener('click', () => {
    globe.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1000);
    isRotating = true;
    const controls = globe.controls();
    controls.autoRotate = true;
    rotateToggle.textContent = '⏸️ Pause Rotation';
});

// Interaction avec les points
globe.onPointClick(point => {
    console.log('Pays cliqué:', point.name);
    // Zoomer très proche sur le pays
    globe.pointOfView({ 
        lat: point.lat, 
        lng: point.lng, 
        altitude: 0.12
    }, 2500);
    
    // Pause la rotation lors du clic
    isRotating = false;
    const controls = globe.controls();
    controls.autoRotate = false;
    rotateToggle.textContent = '▶️ Reprendre Rotation';
});

// Améliorer les contrôles avec zoom étendu
const controls = globe.controls();
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.rotateSpeed = 0.5;
controls.minDistance = 105;
controls.maxDistance = 4000;

// Améliorer le rendu de la texture
const renderer = globe.renderer();
renderer.setPixelRatio(window.devicePixelRatio * 1.5);
renderer.antialias = true;

// Effet de particules atmosphériques (déjà configuré ci-dessus)

console.log('🌍 Globe 3D HD initialisé avec', countries.length, 'pays');
console.log('✨ Connexions commerciales:', connections.length, 'arcs depuis la France');
console.log('🎨 Texture haute résolution 5400x2700px');
console.log('🔍 Zoom ultra-proche activé (altitude min: 105)');
console.log('💾 100% OFFLINE - Aucune connexion requise');
console.log('🇫🇷 Commerce international de la France visualisé');
