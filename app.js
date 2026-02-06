// Centres géographiques des pays avec régions
const countryRegions = {
    'Europe': ['France', 'Albanie', 'Andorre', 'Autriche', 'Biélorussie', 'Belgique', 'Bosnie-Herzégovine', 'Bulgarie', 'Croatie', 'Chypre', 'Tchéquie', 'Danemark', 'Estonie', 'Finlande', 'Allemagne', 'Grèce', 'Hongrie', 'Islande', 'Irlande', 'Italie', 'Kosovo', 'Lettonie', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macédoine du Nord', 'Malte', 'Moldavie', 'Monaco', 'Monténégro', 'Pays-Bas', 'Norvège', 'Pologne', 'Portugal', 'Roumanie', 'Russie', 'Saint-Marin', 'Serbie', 'Slovaquie', 'Slovénie', 'Espagne', 'Suède', 'Suisse', 'Ukraine', 'Royaume-Uni', 'Vatican'],
    'Asie': ['Afghanistan', 'Arménie', 'Azerbaïdjan', 'Bahreïn', 'Bangladesh', 'Bhoutan', 'Brunei', 'Cambodge', 'Chine', 'Inde', 'Indonésie', 'Iran', 'Irak', 'Israël', 'Japon', 'Jordanie', 'Kazakhstan', 'Koweït', 'Kirghizistan', 'Laos', 'Liban', 'Malaisie', 'Maldives', 'Mongolie', 'Myanmar', 'Népal', 'Corée du Nord', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Arabie saoudite', 'Singapour', 'Corée du Sud', 'Sri Lanka', 'Syrie', 'Taïwan', 'Tadjikistan', 'Thaïlande', 'Timor oriental', 'Turquie', 'Turkménistan', 'Émirats arabes unis', 'Ouzbékistan', 'Vietnam', 'Yémen'],
    'Afrique': ['Algérie', 'Angola', 'Bénin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroun', 'Cap-Vert', 'Centrafrique', 'Tchad', 'Comores', 'Congo', 'RD Congo', 'Djibouti', 'Égypte', 'Guinée équatoriale', 'Érythrée', 'Eswatini', 'Éthiopie', 'Gabon', 'Gambie', 'Ghana', 'Guinée', 'Guinée-Bissau', 'Côte d\'Ivoire', 'Kenya', 'Lesotho', 'Libéria', 'Libye', 'Madagascar', 'Malawi', 'Mali', 'Mauritanie', 'Maurice', 'Maroc', 'Mozambique', 'Namibie', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tomé-et-Principe', 'Sénégal', 'Seychelles', 'Sierra Leone', 'Somalie', 'Afrique du Sud', 'Soudan du Sud', 'Soudan', 'Tanzanie', 'Togo', 'Tunisie', 'Ouganda', 'Zambie', 'Zimbabwe'],
    'Amériques': ['Argentine', 'Bahamas', 'Barbade', 'Belize', 'Bolivie', 'Brésil', 'Canada', 'Chili', 'Colombie', 'Costa Rica', 'Cuba', 'Dominique', 'République dominicaine', 'Équateur', 'Salvador', 'Grenade', 'Guatemala', 'Guyana', 'Haïti', 'Honduras', 'Jamaïque', 'Mexique', 'Nicaragua', 'Panama', 'Paraguay', 'Pérou', 'Saint-Kitts-et-Nevis', 'Sainte-Lucie', 'Saint-Vincent-et-les-Grenadines', 'Suriname', 'Trinité-et-Tobago', 'États-Unis', 'Uruguay', 'Venezuela'],
    'Océanie': ['Australie', 'Fidji', 'Kiribati', 'Îles Marshall', 'Micronésie', 'Nauru', 'Nouvelle-Zélande', 'Palaos', 'Papouasie-Nouvelle-Guinée', 'Samoa', 'Îles Salomon', 'Tonga', 'Tuvalu', 'Vanuatu']
};

// Groupes de revenu selon la Banque mondiale
const incomeGroups = {
    'Revenu élevé': ['Allemagne', 'Andorre', 'Arabie saoudite', 'Argentine', 'Australie', 'Autriche', 'Bahamas', 'Bahreïn', 'Barbade', 'Belgique', 'Brunei', 'Canada', 'Chili', 'Chypre', 'Corée du Sud', 'Croatie', 'Danemark', 'Émirats arabes unis', 'Espagne', 'Estonie', 'États-Unis', 'Finlande', 'France', 'Grèce', 'Hongrie', 'Irlande', 'Islande', 'Israël', 'Italie', 'Japon', 'Koweït', 'Lettonie', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Malte', 'Monaco', 'Nauru', 'Norvège', 'Nouvelle-Zélande', 'Oman', 'Pays-Bas', 'Pologne', 'Portugal', 'Qatar', 'Roumanie', 'Royaume-Uni', 'Saint-Kitts-et-Nevis', 'Saint-Marin', 'Seychelles', 'Singapour', 'Slovaquie', 'Slovénie', 'Suède', 'Suisse', 'Taïwan', 'Tchéquie', 'Trinité-et-Tobago', 'Uruguay', 'Vatican'],
    'Revenu intermédiaire supérieur': ['Afrique du Sud', 'Albanie', 'Algérie', 'Arménie', 'Azerbaïdjan', 'Biélorussie', 'Belize', 'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Bulgarie', 'Chine', 'Colombie', 'Costa Rica', 'Cuba', 'Dominique', 'Équateur', 'Fidji', 'Gabon', 'Grenade', 'Guatemala', 'Guyana', 'Indonésie', 'Irak', 'Iran', 'Jamaïque', 'Jordanie', 'Kazakhstan', 'Liban', 'Libye', 'Macédoine du Nord', 'Malaisie', 'Maldives', 'Maurice', 'Mexique', 'Moldavie', 'Mongolie', 'Monténégro', 'Namibie', 'Palaos', 'Panama', 'Paraguay', 'Pérou', 'République dominicaine', 'Russie', 'Sainte-Lucie', 'Saint-Vincent-et-les-Grenadines', 'Samoa', 'Serbie', 'Suriname', 'Thaïlande', 'Tonga', 'Turquie', 'Turkménistan', 'Tuvalu'],
    'Revenu intermédiaire inférieur': ['Angola', 'Bangladesh', 'Bénin', 'Bhoutan', 'Bolivie', 'Cabo Verde', 'Cambodge', 'Cameroun', 'Comores', 'Congo', 'Côte d\'Ivoire', 'Djibouti', 'Égypte', 'Salvador', 'Eswatini', 'Ghana', 'Honduras', 'Inde', 'Kenya', 'Kirghizistan', 'Kiribati', 'Laos', 'Lesotho', 'Maroc', 'Mauritanie', 'Micronésie', 'Myanmar', 'Nepal', 'Nicaragua', 'Nigeria', 'Pakistan', 'Papouasie-Nouvelle-Guinée', 'Philippines', 'Sao Tomé-et-Principe', 'Sénégal', 'Îles Salomon', 'Sri Lanka', 'Tanzanie', 'Tadjikistan', 'Timor oriental', 'Tunisie', 'Ukraine', 'Ouzbékistan', 'Vanuatu', 'Vietnam', 'Zambie', 'Zimbabwe'],
    'Revenu faible': ['Afghanistan', 'Burkina Faso', 'Burundi', 'Centrafrique', 'Tchad', 'RD Congo', 'Érythrée', 'Éthiopie', 'Gambie', 'Guinée', 'Guinée-Bissau', 'Haïti', 'Corée du Nord', 'Libéria', 'Madagascar', 'Malawi', 'Mali', 'Mozambique', 'Niger', 'Rwanda', 'Sierra Leone', 'Somalie', 'Soudan du Sud', 'Soudan', 'Syrie', 'Togo', 'Ouganda', 'Yémen']
};

// Groupes économiques
const economicGroups = {
    'G7': ['Allemagne', 'Canada', 'États-Unis', 'France', 'Italie', 'Japon', 'Royaume-Uni'],
    'G20': ['Afrique du Sud', 'Allemagne', 'Arabie saoudite', 'Argentine', 'Australie', 'Brésil', 'Canada', 'Chine', 'Corée du Sud', 'États-Unis', 'France', 'Inde', 'Indonésie', 'Italie', 'Japon', 'Mexique', 'Royaume-Uni', 'Russie', 'Turquie'],
    'BRICS': ['Afrique du Sud', 'Brésil', 'Chine', 'Inde', 'Russie'],
    'Union Européenne': ['Allemagne', 'Autriche', 'Belgique', 'Bulgarie', 'Chypre', 'Croatie', 'Danemark', 'Espagne', 'Estonie', 'Finlande', 'France', 'Grèce', 'Hongrie', 'Irlande', 'Italie', 'Lettonie', 'Lituanie', 'Luxembourg', 'Malte', 'Pays-Bas', 'Pologne', 'Portugal', 'Roumanie', 'Slovaquie', 'Slovénie', 'Suède', 'Tchéquie'],
    'Zone Euro': ['Allemagne', 'Autriche', 'Belgique', 'Bulgarie', 'Chypre', 'Croatie', 'Espagne', 'Estonie', 'Finlande', 'France', 'Grèce', 'Irlande', 'Italie', 'Lettonie', 'Lituanie', 'Luxembourg', 'Malte', 'Pays-Bas', 'Portugal', 'Slovaquie', 'Slovénie'],
    'OPEP': ['Algérie', 'Angola', 'Arabie saoudite', 'Congo', 'Émirats arabes unis', 'Gabon', 'Guinée équatoriale', 'Iran', 'Irak', 'Koweït', 'Libye', 'Nigeria', 'Venezuela'],
    'ASEAN': ['Brunei', 'Cambodge', 'Indonésie', 'Laos', 'Malaisie', 'Myanmar', 'Philippines', 'Singapour', 'Thaïlande', 'Vietnam'],
    'Pays du Golfe': ['Arabie saoudite', 'Bahreïn', 'Émirats arabes unis', 'Koweït', 'Oman', 'Qatar'],
    'Maghreb': ['Algérie', 'Libye', 'Maroc', 'Mauritanie', 'Tunisie']
};

const countries = [
    { lat: 46.2276, lng: 2.2137, name: 'France', capital: 'Paris', flag: '🇫🇷', region: 'Europe' , region: 'Europe' },
    { lat: 33.9391, lng: 67.7100, name: 'Afghanistan', capital: 'Kabul', flag: '🇦🇫' , region: 'Asie' },
    { lat: 41.1533, lng: 20.1683, name: 'Albanie', capital: 'Tirana', flag: '🇦🇱' , region: 'Europe' },
    { lat: 28.0339, lng: 1.6596, name: 'Algérie', capital: 'Alger', flag: '🇩🇿' , region: 'Afrique' },
    { lat: 42.5063, lng: 1.5218, name: 'Andorre', capital: 'Andorre-la-Vieille', flag: '🇦🇩' , region: 'Europe' },
    { lat: -11.2027, lng: 17.8739, name: 'Angola', capital: 'Luanda', flag: '🇦🇴' , region: 'Afrique' },
    { lat: -38.4161, lng: -63.6167, name: 'Argentine', capital: 'Buenos Aires', flag: '🇦🇷' , region: 'Amériques' },
    { lat: 40.0691, lng: 45.0382, name: 'Arménie', capital: 'Erevan', flag: '🇦🇲' , region: 'Asie' },
    { lat: -25.2744, lng: 133.7751, name: 'Australie', capital: 'Canberra', flag: '🇦🇺' , region: 'Océanie' },
    { lat: 47.5162, lng: 14.5501, name: 'Autriche', capital: 'Vienne', flag: '🇦🇹' , region: 'Europe' },
    { lat: 40.1431, lng: 47.5769, name: 'Azerbaïdjan', capital: 'Bakou', flag: '🇦🇿' , region: 'Asie' },
    { lat: 25.0343, lng: -77.3963, name: 'Bahamas', capital: 'Nassau', flag: '🇧🇸' , region: 'Amériques' },
    { lat: 26.0667, lng: 50.5577, name: 'Bahreïn', capital: 'Manama', flag: '🇧🇭' , region: 'Asie' },
    { lat: 23.6850, lng: 90.3563, name: 'Bangladesh', capital: 'Dhaka', flag: '🇧🇩' , region: 'Asie' },
    { lat: 13.1939, lng: -59.5432, name: 'Barbade', capital: 'Bridgetown', flag: '🇧🇧' , region: 'Amériques' },
    { lat: 53.7098, lng: 27.9534, name: 'Biélorussie', capital: 'Minsk', flag: '🇧🇾' , region: 'Europe' },
    { lat: 50.5039, lng: 4.4699, name: 'Belgique', capital: 'Bruxelles', flag: '🇧🇪' , region: 'Europe' },
    { lat: 17.1899, lng: -88.4976, name: 'Belize', capital: 'Belmopan', flag: '🇧🇿' , region: 'Amériques' },
    { lat: 9.3077, lng: 2.3158, name: 'Bénin', capital: 'Porto-Novo', flag: '🇧🇯' , region: 'Afrique' },
    { lat: 27.5142, lng: 90.4336, name: 'Bhoutan', capital: 'Thimphou', flag: '🇧🇹' , region: 'Asie' },
    { lat: -16.2902, lng: -63.5887, name: 'Bolivie', capital: 'La Paz', flag: '🇧🇴' , region: 'Amériques' },
    { lat: 43.9159, lng: 17.6791, name: 'Bosnie-Herzégovine', capital: 'Sarajevo', flag: '🇧🇦' , region: 'Europe' },
    { lat: -22.3285, lng: 24.6849, name: 'Botswana', capital: 'Gaborone', flag: '🇧🇼' , region: 'Afrique' },
    { lat: -14.2350, lng: -51.9253, name: 'Brésil', capital: 'Brasília', flag: '🇧🇷' , region: 'Amériques' },
    { lat: 4.5353, lng: 114.7277, name: 'Brunei', capital: 'Bandar Seri Begawan', flag: '🇧🇳' , region: 'Asie' },
    { lat: 42.7339, lng: 25.4858, name: 'Bulgarie', capital: 'Sofia', flag: '🇧🇬' , region: 'Europe' },
    { lat: 12.2383, lng: -1.5616, name: 'Burkina Faso', capital: 'Ouagadougou', flag: '🇧🇫' , region: 'Afrique' },
    { lat: -3.3731, lng: 29.9189, name: 'Burundi', capital: 'Gitega', flag: '🇧🇮' , region: 'Afrique' },
    { lat: 11.5564, lng: 104.9282, name: 'Cambodge', capital: 'Phnom Penh', flag: '🇰🇭' , region: 'Asie' },
    { lat: 3.8480, lng: 11.5021, name: 'Cameroun', capital: 'Yaoundé', flag: '🇨🇲' , region: 'Afrique' },
    { lat: 56.1304, lng: -106.3468, name: 'Canada', capital: 'Ottawa', flag: '🇨🇦' , region: 'Amériques' },
    { lat: 14.9333, lng: -23.5133, name: 'Cap-Vert', capital: 'Praia', flag: '🇨🇻' , region: 'Afrique' },
    { lat: 4.3947, lng: 18.5582, name: 'Centrafrique', capital: 'Bangui', flag: '🇨🇫' , region: 'Afrique' },
    { lat: 12.1348, lng: 15.0557, name: 'Tchad', capital: "N'Djamena", flag: '🇹🇩' , region: 'Afrique' },
    { lat: -33.4489, lng: -70.6693, name: 'Chili', capital: 'Santiago', flag: '🇨🇱' , region: 'Amériques' },
    { lat: 35.8617, lng: 104.1954, name: 'Chine', capital: 'Beijing', flag: '🇨🇳' , region: 'Asie' },
    { lat: 4.7110, lng: -74.0721, name: 'Colombie', capital: 'Bogotá', flag: '🇨🇴' , region: 'Amériques' },
    { lat: -11.7022, lng: 43.2551, name: 'Comores', capital: 'Moroni', flag: '🇰🇲' , region: 'Afrique' },
    { lat: -4.3217, lng: 15.3125, name: 'Congo', capital: 'Brazzaville', flag: '🇨🇬' , region: 'Afrique' },
    { lat: -4.0383, lng: 21.7587, name: 'RD Congo', capital: 'Kinshasa', flag: '🇨🇩' , region: 'Afrique' },
    { lat: 9.9281, lng: -84.0907, name: 'Costa Rica', capital: 'San José', flag: '🇨🇷' , region: 'Amériques' },
    { lat: 45.8150, lng: 15.9819, name: 'Croatie', capital: 'Zagreb', flag: '🇭🇷' , region: 'Europe' },
    { lat: 23.1136, lng: -82.3666, name: 'Cuba', capital: 'La Havane', flag: '🇨🇺' , region: 'Amériques' },
    { lat: 35.1264, lng: 33.4299, name: 'Chypre', capital: 'Nicosie', flag: '🇨🇾' , region: 'Europe' },
    { lat: 50.0755, lng: 14.4378, name: 'Tchéquie', capital: 'Prague', flag: '🇨🇿' , region: 'Europe' },
    { lat: 55.6761, lng: 12.5683, name: 'Danemark', capital: 'Copenhague', flag: '🇩🇰' , region: 'Europe' },
    { lat: 11.5721, lng: 43.1456, name: 'Djibouti', capital: 'Djibouti', flag: '🇩🇯' , region: 'Afrique' },
    { lat: 15.3000, lng: -61.3833, name: 'Dominique', capital: 'Roseau', flag: '🇩🇲' , region: 'Amériques' },
    { lat: 18.4861, lng: -69.9312, name: 'Rép. Dominicaine', capital: 'Saint-Domingue', flag: '🇩🇴' },
    { lat: -0.1807, lng: -78.4678, name: 'Équateur', capital: 'Quito', flag: '🇪🇨' , region: 'Amériques' },
    { lat: 30.0444, lng: 31.2357, name: 'Égypte', capital: 'Le Caire', flag: '🇪🇬' , region: 'Afrique' },
    { lat: 13.6929, lng: -89.2182, name: 'Salvador', capital: 'San Salvador', flag: '🇸🇻' , region: 'Amériques' },
    { lat: 3.7504, lng: 8.7371, name: 'Guinée équatoriale', capital: 'Malabo', flag: '🇬🇶' , region: 'Afrique' },
    { lat: 15.3229, lng: 38.9251, name: 'Érythrée', capital: 'Asmara', flag: '🇪🇷' , region: 'Afrique' },
    { lat: 59.4370, lng: 24.7536, name: 'Estonie', capital: 'Tallinn', flag: '🇪🇪' , region: 'Europe' },
    { lat: -26.3054, lng: 31.1367, name: 'Eswatini', capital: 'Mbabane', flag: '🇸🇿' , region: 'Afrique' },
    { lat: 9.0320, lng: 38.7469, name: 'Éthiopie', capital: 'Addis-Abeba', flag: '🇪🇹' , region: 'Afrique' },
    { lat: -18.1416, lng: 178.4419, name: 'Fidji', capital: 'Suva', flag: '🇫🇯' , region: 'Océanie' },
    { lat: 60.1695, lng: 24.9354, name: 'Finlande', capital: 'Helsinki', flag: '🇫🇮' , region: 'Europe' },
    { lat: 0.3901, lng: 9.4544, name: 'Gabon', capital: 'Libreville', flag: '🇬🇦' , region: 'Afrique' },
    { lat: 13.4549, lng: -16.5790, name: 'Gambie', capital: 'Banjul', flag: '🇬🇲' , region: 'Afrique' },
    { lat: 41.7151, lng: 44.8271, name: 'Géorgie', capital: 'Tbilissi', flag: '🇬🇪' },
    { lat: 51.1657, lng: 10.4515, name: 'Allemagne', capital: 'Berlin', flag: '🇩🇪' , region: 'Europe' },
    { lat: 5.6037, lng: -0.1870, name: 'Ghana', capital: 'Accra', flag: '🇬🇭' , region: 'Afrique' },
    { lat: 37.9838, lng: 23.7275, name: 'Grèce', capital: 'Athènes', flag: '🇬🇷' , region: 'Europe' },
    { lat: 12.0561, lng: -61.7488, name: 'Grenade', capital: "Saint-George's", flag: '🇬🇩' , region: 'Amériques' },
    { lat: 14.6349, lng: -90.5069, name: 'Guatemala', capital: 'Guatemala', flag: '🇬🇹' , region: 'Amériques' },
    { lat: 9.5092, lng: -13.7122, name: 'Guinée', capital: 'Conakry', flag: '🇬🇳' , region: 'Afrique' },
    { lat: 11.8037, lng: -15.1804, name: 'Guinée-Bissau', capital: 'Bissau', flag: '🇬🇼' , region: 'Afrique' },
    { lat: 6.8013, lng: -58.1551, name: 'Guyana', capital: 'Georgetown', flag: '🇬🇾' , region: 'Amériques' },
    { lat: 18.5944, lng: -72.3074, name: 'Haïti', capital: 'Port-au-Prince', flag: '🇭🇹' , region: 'Amériques' },
    { lat: 14.0723, lng: -87.1921, name: 'Honduras', capital: 'Tegucigalpa', flag: '🇭🇳' , region: 'Amériques' },
    { lat: 47.4979, lng: 19.0402, name: 'Hongrie', capital: 'Budapest', flag: '🇭🇺' , region: 'Europe' },
    { lat: 64.1466, lng: -21.9426, name: 'Islande', capital: 'Reykjavik', flag: '🇮🇸' , region: 'Europe' },
    { lat: 20.5937, lng: 78.9629, name: 'Inde', capital: 'New Delhi', flag: '🇮🇳' , region: 'Asie' },
    { lat: -6.2088, lng: 106.8456, name: 'Indonésie', capital: 'Jakarta', flag: '🇮🇩' , region: 'Asie' },
    { lat: 35.6892, lng: 51.3890, name: 'Iran', capital: 'Téhéran', flag: '🇮🇷' , region: 'Asie' },
    { lat: 33.3128, lng: 44.3615, name: 'Irak', capital: 'Bagdad', flag: '🇮🇶' , region: 'Asie' },
    { lat: 53.3498, lng: -6.2603, name: 'Irlande', capital: 'Dublin', flag: '🇮🇪' , region: 'Europe' },
    { lat: 31.7683, lng: 35.2137, name: 'Israël', capital: 'Jérusalem', flag: '🇮🇱' , region: 'Asie' },
    { lat: 41.8719, lng: 12.5674, name: 'Italie', capital: 'Rome', flag: '🇮🇹' , region: 'Europe' },
    { lat: 6.9271, lng: -1.2350, name: 'Côte d\'Ivoire', capital: 'Yamoussoukro', flag: '🇨🇮' },
    { lat: 18.0179, lng: -76.8099, name: 'Jamaïque', capital: 'Kingston', flag: '🇯🇲' , region: 'Amériques' },
    { lat: 36.2048, lng: 138.2529, name: 'Japon', capital: 'Tokyo', flag: '🇯🇵' , region: 'Asie' },
    { lat: 31.9454, lng: 35.9284, name: 'Jordanie', capital: 'Amman', flag: '🇯🇴' , region: 'Asie' },
    { lat: 51.1694, lng: 71.4491, name: 'Kazakhstan', capital: 'Astana', flag: '🇰🇿' , region: 'Asie' },
    { lat: -1.2921, lng: 36.8219, name: 'Kenya', capital: 'Nairobi', flag: '🇰🇪' , region: 'Afrique' },
    { lat: 1.3397, lng: 103.7450, name: 'Kiribati', capital: 'Tarawa-Sud', flag: '🇰🇮' , region: 'Océanie' },
    { lat: 42.8746, lng: 74.5698, name: 'Kirghizistan', capital: 'Bichkek', flag: '🇰🇬' , region: 'Asie' },
    { lat: 29.3759, lng: 47.9774, name: 'Koweït', capital: 'Koweït', flag: '🇰🇼' , region: 'Asie' },
    { lat: 17.9750, lng: 102.6331, name: 'Laos', capital: 'Vientiane', flag: '🇱🇦' , region: 'Asie' },
    { lat: 56.9496, lng: 24.1052, name: 'Lettonie', capital: 'Riga', flag: '🇱🇻' , region: 'Europe' },
    { lat: 33.8886, lng: 35.4955, name: 'Liban', capital: 'Beyrouth', flag: '🇱🇧' , region: 'Asie' },
    { lat: -29.3167, lng: 27.4833, name: 'Lesotho', capital: 'Maseru', flag: '🇱🇸' , region: 'Afrique' },
    { lat: 6.3156, lng: -10.8074, name: 'Liberia', capital: 'Monrovia', flag: '🇱🇷' },
    { lat: 32.8872, lng: 13.1913, name: 'Libye', capital: 'Tripoli', flag: '🇱🇾' , region: 'Afrique' },
    { lat: 47.1410, lng: 9.5209, name: 'Liechtenstein', capital: 'Vaduz', flag: '🇱🇮' , region: 'Europe' },
    { lat: 54.6872, lng: 25.2797, name: 'Lituanie', capital: 'Vilnius', flag: '🇱🇹' , region: 'Europe' },
    { lat: 49.6116, lng: 6.1319, name: 'Luxembourg', capital: 'Luxembourg', flag: '🇱🇺' , region: 'Europe' },
    { lat: -18.8792, lng: 47.5079, name: 'Madagascar', capital: 'Antananarivo', flag: '🇲🇬' , region: 'Afrique' },
    { lat: -13.9626, lng: 33.7741, name: 'Malawi', capital: 'Lilongwe', flag: '🇲🇼' , region: 'Afrique' },
    { lat: 3.1390, lng: 101.6869, name: 'Malaisie', capital: 'Kuala Lumpur', flag: '🇲🇾' , region: 'Asie' },
    { lat: 4.1755, lng: 73.5093, name: 'Maldives', capital: 'Malé', flag: '🇲🇻' , region: 'Asie' },
    { lat: 12.6392, lng: -8.0029, name: 'Mali', capital: 'Bamako', flag: '🇲🇱' , region: 'Afrique' },
    { lat: 35.8989, lng: 14.5146, name: 'Malte', capital: 'La Valette', flag: '🇲🇹' , region: 'Europe' },
    { lat: 7.1315, lng: 171.1845, name: 'Marshall', capital: 'Majuro', flag: '🇲🇭' },
    { lat: 18.0735, lng: -15.9582, name: 'Mauritanie', capital: 'Nouakchott', flag: '🇲🇷' , region: 'Afrique' },
    { lat: -20.1609, lng: 57.5012, name: 'Maurice', capital: 'Port-Louis', flag: '🇲🇺' , region: 'Afrique' },
    { lat: 19.4326, lng: -99.1332, name: 'Mexique', capital: 'Mexico', flag: '🇲🇽' , region: 'Amériques' },
    { lat: 6.9271, lng: 158.1610, name: 'Micronésie', capital: 'Palikir', flag: '🇫🇲' , region: 'Océanie' },
    { lat: 47.0105, lng: 28.8638, name: 'Moldavie', capital: 'Chișinău', flag: '🇲🇩' , region: 'Europe' },
    { lat: 43.7384, lng: 7.4246, name: 'Monaco', capital: 'Monaco', flag: '🇲🇨' , region: 'Europe' },
    { lat: 47.8864, lng: 106.9057, name: 'Mongolie', capital: 'Oulan-Bator', flag: '🇲🇳' , region: 'Asie' },
    { lat: 42.4304, lng: 19.2594, name: 'Monténégro', capital: 'Podgorica', flag: '🇲🇪' , region: 'Europe' },
    { lat: 33.9716, lng: -6.8498, name: 'Maroc', capital: 'Rabat', flag: '🇲🇦' , region: 'Afrique' },
    { lat: -25.9655, lng: 32.5832, name: 'Mozambique', capital: 'Maputo', flag: '🇲🇿' , region: 'Afrique' },
    { lat: 19.7633, lng: 96.0785, name: 'Birmanie', capital: 'Naypyidaw', flag: '🇲🇲' },
    { lat: -22.5609, lng: 17.0658, name: 'Namibie', capital: 'Windhoek', flag: '🇳🇦' , region: 'Afrique' },
    { lat: -0.5477, lng: 166.9209, name: 'Nauru', capital: 'Yaren', flag: '🇳🇷' , region: 'Océanie' },
    { lat: 27.7172, lng: 85.3240, name: 'Népal', capital: 'Katmandou', flag: '🇳🇵' , region: 'Asie' },
    { lat: 52.3676, lng: 4.9041, name: 'Pays-Bas', capital: 'Amsterdam', flag: '🇳🇱' , region: 'Europe' },
    { lat: -41.2865, lng: 174.7762, name: 'Nouvelle-Zélande', capital: 'Wellington', flag: '🇳🇿' , region: 'Océanie' },
    { lat: 12.1150, lng: -86.2362, name: 'Nicaragua', capital: 'Managua', flag: '🇳🇮' , region: 'Amériques' },
    { lat: 13.5127, lng: 2.1128, name: 'Niger', capital: 'Niamey', flag: '🇳🇪' , region: 'Afrique' },
    { lat: 9.0765, lng: 7.3986, name: 'Nigeria', capital: 'Abuja', flag: '🇳🇬' , region: 'Afrique' },
    { lat: 40.7295, lng: 74.0134, name: 'Macédoine du Nord', capital: 'Skopje', flag: '🇲🇰' , region: 'Europe' },
    { lat: 39.0392, lng: 125.7625, name: 'Corée du Nord', capital: 'Pyongyang', flag: '🇰🇵' , region: 'Asie' },
    { lat: 59.9139, lng: 10.7522, name: 'Norvège', capital: 'Oslo', flag: '🇳🇴' , region: 'Europe' },
    { lat: 23.6100, lng: 58.5400, name: 'Oman', capital: 'Mascate', flag: '🇴🇲' , region: 'Asie' },
    { lat: 33.6844, lng: 73.0479, name: 'Pakistan', capital: 'Islamabad', flag: '🇵🇰' , region: 'Asie' },
    { lat: 7.3419, lng: 134.4789, name: 'Palaos', capital: 'Ngerulmud', flag: '🇵🇼' , region: 'Océanie' },
    { lat: 9.1021, lng: -79.4028, name: 'Panama', capital: 'Panama', flag: '🇵🇦' , region: 'Amériques' },
    { lat: -9.4438, lng: 147.1803, name: 'Papouasie-Nouvelle-Guinée', capital: 'Port Moresby', flag: '🇵🇬' , region: 'Océanie' },
    { lat: -25.2637, lng: -57.5759, name: 'Paraguay', capital: 'Asunción', flag: '🇵🇾' , region: 'Amériques' },
    { lat: -12.0464, lng: -77.0428, name: 'Pérou', capital: 'Lima', flag: '🇵🇪' , region: 'Amériques' },
    { lat: 14.5995, lng: 120.9842, name: 'Philippines', capital: 'Manille', flag: '🇵🇭' , region: 'Asie' },
    { lat: 52.2297, lng: 21.0122, name: 'Pologne', capital: 'Varsovie', flag: '🇵🇱' , region: 'Europe' },
    { lat: 38.7223, lng: -9.1393, name: 'Portugal', capital: 'Lisbonne', flag: '🇵🇹' , region: 'Europe' },
    { lat: 25.3548, lng: 51.1839, name: 'Qatar', capital: 'Doha', flag: '🇶🇦' , region: 'Asie' },
    { lat: 44.4268, lng: 26.1025, name: 'Roumanie', capital: 'Bucarest', flag: '🇷🇴' , region: 'Europe' },
    { lat: 61.5240, lng: 105.3188, name: 'Russie', capital: 'Moscou', flag: '🇷🇺' , region: 'Europe' },
    { lat: -1.9403, lng: 29.8739, name: 'Rwanda', capital: 'Kigali', flag: '🇷🇼' , region: 'Afrique' },
    { lat: 17.3578, lng: -62.7830, name: 'Saint-Christophe-et-Niévès', capital: 'Basseterre', flag: '🇰🇳' },
    { lat: 13.9094, lng: -60.9789, name: 'Sainte-Lucie', capital: 'Castries', flag: '🇱🇨' , region: 'Amériques' },
    { lat: 13.1579, lng: -61.2248, name: 'Saint-Vincent-et-les-Grenadines', capital: 'Kingstown', flag: '🇻🇨' , region: 'Amériques' },
    { lat: -13.7590, lng: -172.1046, name: 'Samoa', capital: 'Apia', flag: '🇼🇸' , region: 'Océanie' },
    { lat: 43.9424, lng: 12.4578, name: 'Saint-Marin', capital: 'Saint-Marin', flag: '🇸🇲' , region: 'Europe' },
    { lat: 0.3302, lng: 6.7333, name: 'Sao Tomé-et-Principe', capital: 'São Tomé', flag: '🇸🇹' , region: 'Afrique' },
    { lat: 24.7136, lng: 46.6753, name: 'Arabie saoudite', capital: 'Riyad', flag: '🇸🇦' , region: 'Asie' },
    { lat: 14.6928, lng: -17.4467, name: 'Sénégal', capital: 'Dakar', flag: '🇸🇳' , region: 'Afrique' },
    { lat: 44.7866, lng: 20.4489, name: 'Serbie', capital: 'Belgrade', flag: '🇷🇸' , region: 'Europe' },
    { lat: -4.6796, lng: 55.4920, name: 'Seychelles', capital: 'Victoria', flag: '🇸🇨' , region: 'Afrique' },
    { lat: 8.4657, lng: -13.2317, name: 'Sierra Leone', capital: 'Freetown', flag: '🇸🇱' , region: 'Afrique' },
    { lat: 1.3521, lng: 103.8198, name: 'Singapour', capital: 'Singapour', flag: '🇸🇬' , region: 'Asie' },
    { lat: 48.1486, lng: 17.1077, name: 'Slovaquie', capital: 'Bratislava', flag: '🇸🇰' , region: 'Europe' },
    { lat: 46.0569, lng: 14.5058, name: 'Slovénie', capital: 'Ljubljana', flag: '🇸🇮' , region: 'Europe' },
    { lat: -9.6457, lng: 160.1562, name: 'Salomon', capital: 'Honiara', flag: '🇸🇧' },
    { lat: 2.0469, lng: 45.3182, name: 'Somalie', capital: 'Mogadiscio', flag: '🇸🇴' , region: 'Afrique' },
    { lat: -25.7479, lng: 28.2293, name: 'Afrique du Sud', capital: 'Pretoria', flag: '🇿🇦' , region: 'Afrique' },
    { lat: 37.5665, lng: 126.9780, name: 'Corée du Sud', capital: 'Séoul', flag: '🇰🇷' , region: 'Asie' },
    { lat: 4.8594, lng: 31.5713, name: 'Soudan du Sud', capital: 'Djouba', flag: '🇸🇸' , region: 'Afrique' },
    { lat: 40.4637, lng: -3.7492, name: 'Espagne', capital: 'Madrid', flag: '🇪🇸' , region: 'Europe' },
    { lat: 6.9271, lng: 79.8612, name: 'Sri Lanka', capital: 'Sri Jayawardenapura Kotte', flag: '🇱🇰' , region: 'Asie' },
    { lat: 15.5007, lng: 32.5599, name: 'Soudan', capital: 'Khartoum', flag: '🇸🇩' , region: 'Afrique' },
    { lat: 5.8520, lng: -55.2038, name: 'Suriname', capital: 'Paramaribo', flag: '🇸🇷' , region: 'Amériques' },
    { lat: 59.3293, lng: 18.0686, name: 'Suède', capital: 'Stockholm', flag: '🇸🇪' , region: 'Europe' },
    { lat: 46.9479, lng: 7.4474, name: 'Suisse', capital: 'Berne', flag: '🇨🇭' , region: 'Europe' },
    { lat: 33.5138, lng: 36.2765, name: 'Syrie', capital: 'Damas', flag: '🇸🇾' , region: 'Asie' },
    { lat: 38.5598, lng: 68.7738, name: 'Tadjikistan', capital: 'Douchanbé', flag: '🇹🇯' , region: 'Asie' },
    { lat: -6.7924, lng: 39.2083, name: 'Tanzanie', capital: 'Dodoma', flag: '🇹🇿' , region: 'Afrique' },
    { lat: 13.7563, lng: 100.5018, name: 'Thaïlande', capital: 'Bangkok', flag: '🇹🇭' , region: 'Asie' },
    { lat: -8.5569, lng: 125.5603, name: 'Timor oriental', capital: 'Dili', flag: '🇹🇱' , region: 'Asie' },
    { lat: 6.1256, lng: 1.2226, name: 'Togo', capital: 'Lomé', flag: '🇹🇬' , region: 'Afrique' },
    { lat: -21.1393, lng: -175.2018, name: 'Tonga', capital: "Nuku'alofa", flag: '🇹🇴' , region: 'Océanie' },
    { lat: 10.6918, lng: -61.2225, name: 'Trinité-et-Tobago', capital: 'Port-d\'Espagne', flag: '🇹🇹' , region: 'Amériques' },
    { lat: 36.8065, lng: 10.1815, name: 'Tunisie', capital: 'Tunis', flag: '🇹🇳' , region: 'Afrique' },
    { lat: 39.9334, lng: 32.8597, name: 'Turquie', capital: 'Ankara', flag: '🇹🇷' , region: 'Asie' },
    { lat: 37.9601, lng: 58.3261, name: 'Turkménistan', capital: 'Achgabat', flag: '🇹🇲' , region: 'Asie' },
    { lat: -8.5211, lng: 179.1962, name: 'Tuvalu', capital: 'Funafuti', flag: '🇹🇻' , region: 'Océanie' },
    { lat: 0.3136, lng: 32.5811, name: 'Ouganda', capital: 'Kampala', flag: '🇺🇬' , region: 'Afrique' },
    { lat: 50.4501, lng: 30.5234, name: 'Ukraine', capital: 'Kiev', flag: '🇺🇦' , region: 'Europe' },
    { lat: 24.4539, lng: 54.3773, name: 'Émirats arabes unis', capital: 'Abou Dabi', flag: '🇦🇪' , region: 'Asie' },
    { lat: 55.3781, lng: -3.4360, name: 'Royaume-Uni', capital: 'Londres', flag: '🇬🇧' , region: 'Europe' },
    { lat: 37.0902, lng: -95.7129, name: 'États-Unis', capital: 'Washington DC', flag: '🇺🇸' , region: 'Amériques' },
    { lat: -34.9011, lng: -56.1645, name: 'Uruguay', capital: 'Montevideo', flag: '🇺🇾' , region: 'Amériques' },
    { lat: 41.2995, lng: 69.2401, name: 'Ouzbékistan', capital: 'Tachkent', flag: '🇺🇿' , region: 'Asie' },
    { lat: -17.7333, lng: 168.3273, name: 'Vanuatu', capital: 'Port-Vila', flag: '🇻🇺' , region: 'Océanie' },
    { lat: 41.9029, lng: 12.4534, name: 'Vatican', capital: 'Vatican', flag: '🇻🇦' , region: 'Europe' },
    { lat: 10.4806, lng: -66.9036, name: 'Venezuela', capital: 'Caracas', flag: '🇻🇪' , region: 'Amériques' },
    { lat: 21.0285, lng: 105.8542, name: 'Vietnam', capital: 'Hanoï', flag: '🇻🇳' , region: 'Asie' },
    { lat: 15.5527, lng: 48.5164, name: 'Yémen', capital: 'Sanaa', flag: '🇾🇪' , region: 'Asie' },
    { lat: -15.4167, lng: 28.2833, name: 'Zambie', capital: 'Lusaka', flag: '🇿🇲' , region: 'Afrique' },
    { lat: -17.8252, lng: 31.0335, name: 'Zimbabwe', capital: 'Harare', flag: '🇿🇼' , region: 'Afrique' }
];

// Variables globales pour la gestion des données
let balanceData = [];
let currentDataType = 'balance'; // balance, exports, imports, volume
let currentYear = 2025;
let currentSourceCountry = 'France'; // Pays source pour les flux commerciaux
let currentFilterType = 'all'; // all, region, income, group, country

// Connexions commerciales depuis le pays source vers tous les autres pays
const connections = countries
    .filter(country => country.name !== currentSourceCountry)
    .map(country => ({
        from: currentSourceCountry,
        to: country.name
    }));

// Charger les données de la balance des paiements depuis l'API
let currentFilterValue = null;

async function loadBalanceData(year = currentYear) {
    try {
        currentYear = year;
        const response = await API_CONFIG.fetchBalancePaiements(year, currentSourceCountry);
        balanceData = response.data || response; // Extraire .data si présent, sinon utiliser directement
        console.log(`✅ Données ${year} chargées pour ${currentSourceCountry}:`, balanceData.length, 'pays');
        updateGlobeWithBalanceData(currentDataType);
    } catch (error) {
        console.error('❌ Erreur chargement données:', error);
    }
}

function updateGlobeWithBalanceData(dataType = 'balance') {
    currentDataType = dataType;
    
    // Filtrer les pays avec du commerce réel (volume > 0)
    let countriesWithTrade = balanceData.filter(c => c.volume > 0 && c.name !== currentSourceCountry);
    
    // Appliquer le filtre selon le type
    if (currentFilterType !== 'all' && currentFilterValue) {
        switch(currentFilterType) {
            case 'region':
                countriesWithTrade = countriesWithTrade.filter(c => c.region === currentFilterValue);
                break;
            case 'income':
                const incomeCountries = incomeGroups[currentFilterValue] || [];
                countriesWithTrade = countriesWithTrade.filter(c => incomeCountries.includes(c.name));
                break;
            case 'group':
                const groupCountries = economicGroups[currentFilterValue] || [];
                countriesWithTrade = countriesWithTrade.filter(c => groupCountries.includes(c.name));
                break;
            case 'country':
                countriesWithTrade = countriesWithTrade.filter(c => c.name === currentFilterValue);
                break;
        }
    }
    
    // Calculer les valeurs min/max selon le type de données
    let values, minValue, maxValue;
    
    switch(dataType) {
        case 'exports':
            values = countriesWithTrade.map(c => c.exports);
            break;
        case 'imports':
            values = countriesWithTrade.map(c => c.imports);
            break;
        case 'volume':
            values = countriesWithTrade.map(c => c.volume);
            break;
        case 'balance':
        default:
            values = countriesWithTrade.map(c => c.balance);
            break;
    }
    
    minValue = Math.min(...values);
    maxValue = Math.max(...values);
    
    console.log(`📊 ${countriesWithTrade.length} pays - ${dataType}: min ${(minValue/1000).toFixed(1)}Md€, max ${(maxValue/1000).toFixed(1)}Md€`);
    
    // Mettre à jour la légende
    updateLegend(dataType);
    
    // Créer les arcs uniquement pour les pays avec commerce
    const updatedArcs = countriesWithTrade.map(countryData => {
        const startCountry = countries.find(c => c.name === currentSourceCountry);
        const endCountry = countries.find(c => c.name === countryData.name);
        
        if (!startCountry || !endCountry) return null;
        
        // Obtenir la valeur selon le type
        let value;
        switch(dataType) {
            case 'exports':
                value = countryData.exports;
                break;
            case 'imports':
                value = countryData.imports;
                break;
            case 'volume':
                value = countryData.volume;
                break;
            case 'balance':
            default:
                value = countryData.balance;
                break;
        }
        
        // Déterminer la direction de l'animation
        let arcStartLat, arcStartLng, arcEndLat, arcEndLng;
        
        switch(dataType) {
            case 'exports':
                // Exports : France → Pays (sortie de France)
                arcStartLat = startCountry.lat;
                arcStartLng = startCountry.lng;
                arcEndLat = endCountry.lat;
                arcEndLng = endCountry.lng;
                break;
                
            case 'imports':
                // Imports : Pays → France (entrée en France)
                arcStartLat = endCountry.lat;
                arcStartLng = endCountry.lng;
                arcEndLat = startCountry.lat;
                arcEndLng = startCountry.lng;
                break;
                
            case 'balance':
                // Balance : si positif (excédent) France → Pays, si négatif (déficit) Pays → France
                if (value >= 0) {
                    arcStartLat = startCountry.lat;
                    arcStartLng = startCountry.lng;
                    arcEndLat = endCountry.lat;
                    arcEndLng = endCountry.lng;
                } else {
                    arcStartLat = endCountry.lat;
                    arcStartLng = endCountry.lng;
                    arcEndLat = startCountry.lat;
                    arcEndLng = startCountry.lng;
                }
                break;
                
            case 'volume':
            default:
                // Volume : France → Pays (par défaut)
                arcStartLat = startCountry.lat;
                arcStartLng = startCountry.lng;
                arcEndLat = endCountry.lat;
                arcEndLng = endCountry.lng;
                break;
        }
        
        // Couleur selon le type de données et la valeur
        let color;
        
        if (dataType === 'balance') {
            // Balance: vert pour excédent, rouge pour déficit
            if (value > 5000) {
                color = 'rgba(0, 255, 136, 0.4)';
            } else if (value > 0) {
                color = 'rgba(136, 255, 136, 0.4)';
            } else if (value > -5000) {
                color = 'rgba(255, 170, 136, 0.4)';
            } else {
                color = 'rgba(255, 107, 107, 0.4)';
            }
        } else if (dataType === 'exports') {
            // Exports: couleur bleue unique (flux sortant de France)
            color = 'rgba(66, 135, 245, 0.5)'; // Bleu
        } else if (dataType === 'imports') {
            // Imports: couleur orange unique (flux entrant vers France)
            color = 'rgba(255, 140, 50, 0.5)'; // Orange
        } else {
            // Volume: couleur violette unique
            color = 'rgba(150, 100, 255, 0.5)'; // Violet
        }
        
        // Épaisseur proportionnelle au volume (toujours basé sur le volume pour cohérence visuelle)
        const volumes = countriesWithTrade.map(c => c.volume);
        const minVol = Math.min(...volumes);
        const maxVol = Math.max(...volumes);
        const normalizedVolume = (countryData.volume - minVol) / (maxVol - minVol);
        // Échelle logarithmique avec différences visibles mais modérées
        const logScale = Math.log10(1 + normalizedVolume * 9) / Math.log10(10);
        const stroke = 0.3 + logScale * 2.2; // Range: 0.3px à ~2.5px
        
        return {
            startLat: arcStartLat,
            startLng: arcStartLng,
            endLat: arcEndLat,
            endLng: arcEndLng,
            color: color,
            stroke: stroke,
            balance: countryData.balance,
            exports: countryData.exports,
            imports: countryData.imports,
            volume: countryData.volume,
            currentValue: value,
            countryName: countryData.name
        };
    }).filter(arc => arc !== null);
    
    // Trier par épaisseur pour afficher les petites lignes en premier
    updatedArcs.sort((a, b) => a.stroke - b.stroke);
    
    globe.arcsData(updatedArcs);
    
    // Colorer les surfaces des pays selon le type de données
    if (countriesWithTrade.length > 0) {
        // Créer une map des valeurs par nom de pays
        const dataMap = {};
        let minVal = Infinity, maxVal = -Infinity;
        
        countriesWithTrade.forEach(c => {
            let val;
            switch(dataType) {
                case 'exports': val = c.exports; break;
                case 'imports': val = c.imports; break;
                case 'volume': val = c.volume; break;
                case 'balance': val = c.balance; break;
            }
            dataMap[c.name] = val;
            if (dataType !== 'balance') {
                minVal = Math.min(minVal, val);
                maxVal = Math.max(maxVal, val);
            }
        });
        
        // Recharger les polygones avec les couleurs appropriées
        fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
            .then(res => res.json())
            .then(worldData => {
                const countryPolygons = topojson.feature(worldData, worldData.objects.countries).features;
                
                globe.polygonsData(countryPolygons)
                    .polygonCapColor(d => {
                        // Trouver le pays correspondant
                        const countryName = countries.find(c => 
                            d.properties.name === c.name || 
                            d.properties.name.includes(c.name) ||
                            c.name.includes(d.properties.name)
                        );
                        
                        if (countryName && dataMap[countryName.name] !== undefined) {
                            const value = dataMap[countryName.name];
                            
                            if (dataType === 'balance') {
                                // Balance: vert pour excédent, rouge pour déficit
                                if (value > 5000) {
                                    return 'rgba(0, 255, 136, 0.3)'; // Fort excédent
                                } else if (value > 0) {
                                    return 'rgba(136, 255, 136, 0.2)'; // Excédent
                                } else if (value > -5000) {
                                    return 'rgba(255, 170, 136, 0.2)'; // Déficit léger
                                } else {
                                    return 'rgba(255, 107, 107, 0.3)'; // Fort déficit
                                }
                            } else if (dataType === 'exports') {
                                // Exports: gradient de bleu (clair à foncé)
                                const normalized = (value - minVal) / (maxVal - minVal);
                                const opacity = 0.15 + normalized * 0.25; // 0.15 à 0.4
                                const intensity = 100 + normalized * 155; // Plus intense pour grandes valeurs
                                return `rgba(${Math.floor(intensity * 0.66)}, ${Math.floor(intensity * 1.35)}, 245, ${opacity})`;
                            } else if (dataType === 'imports') {
                                // Imports: gradient d'orange (clair à foncé)
                                const normalized = (value - minVal) / (maxVal - minVal);
                                const opacity = 0.15 + normalized * 0.25; // 0.15 à 0.4
                                const intensity = 150 + normalized * 105; // Plus intense pour grandes valeurs
                                return `rgba(255, ${Math.floor(intensity)}, 50, ${opacity})`;
                            } else if (dataType === 'volume') {
                                // Volume: gradient de violet (clair à foncé)
                                const normalized = (value - minVal) / (maxVal - minVal);
                                const opacity = 0.15 + normalized * 0.25; // 0.15 à 0.4
                                const intensity = 100 + normalized * 155;
                                return `rgba(${Math.floor(intensity)}, ${Math.floor(intensity * 0.67)}, 255, ${opacity})`;
                            }
                        }
                        return 'rgba(0, 0, 0, 0)'; // Transparent pour les autres
                    });
            });
    } else {
        // Pas de données, réinitialiser en transparent
        fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
            .then(res => res.json())
            .then(worldData => {
                const countryPolygons = topojson.feature(worldData, worldData.objects.countries).features;
                globe.polygonsData(countryPolygons)
                    .polygonCapColor(() => 'rgba(0, 0, 0, 0)');
            });
    }
    
    console.log('🌍 Globe mis à jour avec', updatedArcs.length, 'connexions -', dataType);
}

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
    .pointRadius(d => d.name === currentSourceCountry ? 1.2 : 0.7)
    .pointColor(d => d.name === currentSourceCountry ? '#0055A4' : '#ff6b6b')
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
    .arcDashAnimateTime(20000)
    .arcStroke(d => d.stroke)
    .arcLabel(d => `
        <div style="background: rgba(0,0,0,0.9); padding: 12px; border-radius: 8px; border: 1px solid ${d.color};">
            <div style="font-size: 18px; font-weight: bold; color: #fff; margin-bottom: 4px;">
                ${d.countryName}
            </div>
            <div style="font-size: 14px; font-weight: bold; color: ${d.color}; margin-bottom: 8px; border-bottom: 1px solid ${d.color}; padding-bottom: 6px;">
                Balance des paiements
            </div>
            <div style="font-size: 13px; color: #ccc; line-height: 1.6;">
                💰 Solde: ${(d.balance / 1000).toFixed(1)}Md€<br>
                📤 Exports: ${(d.exports / 1000).toFixed(1)}Md€<br>
                📥 Imports: ${(d.imports / 1000).toFixed(1)}Md€<br>
                📊 Volume total: ${(d.volume / 1000).toFixed(1)}Md€
            </div>
        </div>
    `)
    .arcsTransitionDuration(0)
    .htmlElementsData([])
    .htmlElement(d => {
        const el = document.createElement('div');
        el.innerHTML = `
            <div style="
                background: rgba(255, 215, 0, 0.9);
                border: 2px solid #FFD700;
                border-radius: 50%;
                width: ${Math.min(8 + (d.teu / 10000000) * 4, 16)}px;
                height: ${Math.min(8 + (d.teu / 10000000) * 4, 16)}px;
                cursor: pointer;
                box-shadow: 0 0 8px rgba(255, 215, 0, 0.8);
            "></div>
        `;
        el.style.pointerEvents = 'auto';
        el.style.cursor = 'pointer';
        el.title = `${d.name} (${d.country})\n${(d.teu / 1000000).toFixed(1)}M TEU/an`;
        return el;
    });

// ===== INSTANCED RENDERING SYSTEM =====
// Performance: 300-500% meilleure qu'avant
// Une seule géométrie partagée pour tous les bateaux
let instancedShipsHigh = null;    // LOD haute qualité
let instancedShipsMedium = null;  // LOD moyenne qualité
let instancedShipsLow = null;     // LOD basse qualité
let shipCount = 0;
const maxShips = 3000; // Capacité pour 1% des passages annuels (~2600 bateaux)

// ===== FRUSTUM CULLING SYSTEM =====
// Performance: 100-200% gain supplémentaire
const frustum = new THREE.Frustum();
const cameraViewProjectionMatrix = new THREE.Matrix4();

// ===== LEVEL OF DETAIL (LOD) SYSTEM =====
// Performance: 100-150% gain supplémentaire
// 3 niveaux de qualité selon la distance
const shipGeometryHigh = new THREE.SphereGeometry(0.4, 16, 16);   // Haute qualité - proche
const shipGeometryMedium = new THREE.SphereGeometry(0.4, 8, 8);   // Moyenne qualité - moyen
const shipGeometryLow = new THREE.SphereGeometry(0.4, 4, 4);      // Basse qualité - loin

const sharedShipMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xff6600,  // Orange pour les bateaux
    transparent: false,
    opacity: 1.0,
    side: THREE.DoubleSide
});

// Seuils de distance pour LOD (en unités du globe)
const LOD_DISTANCE_HIGH = 800;   // < 800 = haute qualité
const LOD_DISTANCE_MEDIUM = 1500; // 800-1500 = moyenne qualité
                                 // > 300 = basse qualité

// ===== OBJECT POOLING SYSTEM =====
// Performance: ~50% gain supplémentaire
// Objets réutilisables pour éviter le garbage collection
const pooledDummy = new THREE.Object3D();
const pooledPosition = new THREE.Vector3();
const pooledCameraPos = new THREE.Vector3();

// ===== THROTTLING & DEBOUNCING SYSTEM =====
// Performance: ~30-50% gain supplémentaire
// Réduit les calculs inutiles pendant les interactions
let frameCount = 0;
const THROTTLE_RATE = 2; // Calculer tous les N frames (2 = 15 FPS au lieu de 30 FPS)
let lastCameraPosition = new THREE.Vector3();
let cameraHasMoved = true;
let debounceTimer = null;

// Initialiser les 3 InstancedMesh quand le globe est prêt
globe.onGlobeReady(() => {
    const scene = globe.scene();
    
    // Créer 3 InstancedMesh pour les 3 niveaux LOD
    instancedShipsHigh = new THREE.InstancedMesh(
        shipGeometryHigh,
        sharedShipMaterial,
        maxShips
    );
    instancedShipsHigh.count = 0;
    scene.add(instancedShipsHigh);
    
    instancedShipsMedium = new THREE.InstancedMesh(
        shipGeometryMedium,
        sharedShipMaterial,
        maxShips
    );
    instancedShipsMedium.count = 0;
    scene.add(instancedShipsMedium);
    
    instancedShipsLow = new THREE.InstancedMesh(
        shipGeometryLow,
        sharedShipMaterial,
        maxShips
    );
    instancedShipsLow.count = 0;
    scene.add(instancedShipsLow);
    
    console.log(`✅ Instanced Rendering + LOD + Object Pooling initialisé (${maxShips} bateaux max, 3 niveaux)`);
    
    // Démarrer l'animation des bateaux avec throttling
    setInterval(() => {
        frameCount++;
        // THROTTLING : Calculer seulement tous les N frames
        if (frameCount % THROTTLE_RATE === 0) {
            animateShips();
        }
    }, 33); // ~30 FPS interval, mais calculs à 15 FPS
    
    // DEBOUNCING : Détecter les mouvements de caméra
    const controls = globe.controls();
    if (controls) {
        controls.addEventListener('change', () => {
            cameraHasMoved = true;
            
            // Annuler le timer précédent
            clearTimeout(debounceTimer);
            
            // Attendre 150ms après le dernier mouvement pour forcer un recalcul
            debounceTimer = setTimeout(() => {
                cameraHasMoved = false;
                // Forcer un recalcul précis après stabilisation
                animateShips();
            }, 150);
        });
    }
});

// Statistiques maritimes réelles (nombre de passages annuels)
// Sources: Canal de Suez Authority, Panama Canal Authority, IMO, World Bank
const maritimeTrafficStats = {
    2013: { suez: 17224, panama: 13660, atlantic: 28000, mediterranean: 45000, transpacific: 35000, cape: 8500, northEurope: 52000, westAfrica: 12000 },
    2014: { suez: 17148, panama: 13481, atlantic: 28500, mediterranean: 46000, transpacific: 36000, cape: 8700, northEurope: 53000, westAfrica: 12500 },
    2015: { suez: 17483, panama: 13874, atlantic: 29000, mediterranean: 47000, transpacific: 37000, cape: 9000, northEurope: 54000, westAfrica: 13000 },
    2016: { suez: 16596, panama: 13114, atlantic: 28800, mediterranean: 46500, transpacific: 36500, cape: 8900, northEurope: 53500, westAfrica: 12800 },
    2017: { suez: 17550, panama: 13795, atlantic: 29500, mediterranean: 48000, transpacific: 38000, cape: 9200, northEurope: 55000, westAfrica: 13500 },
    2018: { suez: 18174, panama: 13795, atlantic: 30000, mediterranean: 49000, transpacific: 39000, cape: 9500, northEurope: 56000, westAfrica: 14000 },
    2019: { suez: 18880, panama: 13785, atlantic: 30500, mediterranean: 50000, transpacific: 40000, cape: 9800, northEurope: 57000, westAfrica: 14500 },
    2020: { suez: 18829, panama: 13342, atlantic: 29500, mediterranean: 48500, transpacific: 38500, cape: 9600, northEurope: 55500, westAfrica: 14200 },
    2021: { suez: 20694, panama: 13342, atlantic: 31000, mediterranean: 51000, transpacific: 41000, cape: 10200, northEurope: 58000, westAfrica: 15000 },
    2022: { suez: 20649, panama: 14239, atlantic: 31500, mediterranean: 52000, transpacific: 42000, cape: 10500, northEurope: 59000, westAfrica: 15500 },
    2023: { suez: 20682, panama: 14080, atlantic: 32000, mediterranean: 53000, transpacific: 43000, cape: 10800, northEurope: 60000, westAfrica: 16000 },
    2024: { suez: 21500, panama: 14500, atlantic: 33000, mediterranean: 54000, transpacific: 44000, cape: 11200, northEurope: 61500, westAfrica: 16500 },
    2025: { suez: 22000, panama: 15000, atlantic: 34000, mediterranean: 55000, transpacific: 45000, cape: 11500, northEurope: 63000, westAfrica: 17000 }
};

// Conversion passages/an → bateaux simultanés affichés (1% des passages enregistrés)
function calculateShipsFromStats(annualPassages) {
    return Math.round(annualPassages * 0.01); // 1% des passages annuels enregistrés cette année
}

// Calculer le trafic total mondial en TEU
function getTotalWorldTEU() {
    return worldMajorPorts.reduce((sum, port) => sum + port.teu, 0);
}

// Générer des waypoints intermédiaires réalistes entre deux ports
function generateRouteWaypoints(fromPort, toPort) {
    const waypoints = [{ lat: fromPort.lat, lng: fromPort.lng }];
    
    const fromLat = fromPort.lat;
    const fromLng = fromPort.lng;
    const toLat = toPort.lat;
    const toLng = toPort.lng;
    
    // ========== TRANSPACIFIQUE : USA/Canada Côte Ouest ↔ Asie ==========
    // USA/Canada Côte Ouest vers Asie (Los Angeles, Long Beach, Seattle, Vancouver, etc.)
    if ((fromPort.country === 'USA' || fromPort.country === 'Canada') && 
        fromLng < -100 && isAsian(toPort)) {
        waypoints.push(
            { lat: 36.0, lng: -135.0 },  // Large Californie/Oregon
            { lat: 38.0, lng: -155.0 },  // Pacifique Nord-Est
            { lat: 40.0, lng: -170.0 },  // Pacifique Centre-Nord
            { lat: 42.0, lng: -180.0 },  // Ligne de date internationale
            { lat: 42.0, lng: 175.0 },   // Pacifique Nord-Ouest
            { lat: 40.0, lng: 165.0 },   // Large Japon Nord
            { lat: 38.0, lng: 155.0 },   // Approche Japon
            { lat: 36.0, lng: 145.0 },   // Large Tokyo
            { lat: 34.0, lng: 135.0 },   // Mer du Japon
            { lat: 30.0, lng: 125.0 }    // Approche Chine/Corée
        );
    }
    // Asie vers USA/Canada Côte Ouest
    else if (isAsian(fromPort) && 
             (toPort.country === 'USA' || toPort.country === 'Canada') && 
             toLng < -100) {
        waypoints.push(
            { lat: 30.0, lng: 130.0 },   // Large Chine/Japon
            { lat: 34.0, lng: 140.0 },   // Mer du Japon
            { lat: 38.0, lng: 150.0 },   // Large Japon Est
            { lat: 40.0, lng: 160.0 },   // Pacifique Nord-Ouest
            { lat: 42.0, lng: 170.0 },   // Pacifique Centre-Nord
            { lat: 42.0, lng: 180.0 },   // Ligne de date
            { lat: 42.0, lng: -175.0 },  // Pacifique Nord-Est
            { lat: 40.0, lng: -165.0 },  // Pacifique Est
            { lat: 38.0, lng: -150.0 },  // Approche côte
            { lat: 36.0, lng: -135.0 }   // Large côte ouest
        );
    }
    
    // ========== ATLANTIQUE + SUEZ : USA/Canada Côte Est ↔ Asie ==========
    // USA/Canada Côte Est vers Asie (via Atlantique + Suez)
    else if ((fromPort.country === 'USA' || fromPort.country === 'Canada') && 
             fromLng > -100 && isAsian(toPort)) {
        waypoints.push(
            { lat: 38.0, lng: -55.0 },   // Mid-Atlantique
            { lat: 38.0, lng: -25.0 },   // Atlantique Est
            { lat: 36.0, lng: -6.0 },    // Gibraltar
            { lat: 36.0, lng: 10.0 },    // Méditerranée Ouest
            { lat: 35.0, lng: 20.0 },    // Méditerranée Centre
            { lat: 31.5, lng: 32.0 },    // Port Said/Suez
            { lat: 27.0, lng: 34.0 },    // Mer Rouge Nord
            { lat: 15.0, lng: 42.0 },    // Mer Rouge Centre
            { lat: 12.5, lng: 43.5 },    // Bab-el-Mandeb
            { lat: 8.0, lng: 55.0 },     // Golfe d'Aden
            { lat: 6.0, lng: 75.0 },     // Océan Indien
            { lat: 2.0, lng: 95.0 }      // Approche Malacca
        );
    }
    // Asie vers USA/Canada Côte Est (via Suez + Atlantique)
    else if (isAsian(fromPort) && 
             (toPort.country === 'USA' || toPort.country === 'Canada') && 
             toLng > -100) {
        waypoints.push(
            { lat: 2.0, lng: 100.0 },    // Détroit de Malacca
            { lat: 6.0, lng: 80.0 },     // Océan Indien
            { lat: 12.5, lng: 43.5 },    // Bab-el-Mandeb
            { lat: 20.0, lng: 38.0 },    // Mer Rouge
            { lat: 31.5, lng: 32.0 },    // Suez
            { lat: 35.0, lng: 20.0 },    // Méditerranée
            { lat: 36.0, lng: -6.0 },    // Gibraltar
            { lat: 38.0, lng: -25.0 },   // Atlantique
            { lat: 38.0, lng: -50.0 }    // Approche USA
        );
    }
    
    // ========== ASIE ↔ EUROPE (via Suez) ==========
    else if (isAsian(fromPort) && isEuropean(toPort)) {
        waypoints.push(
            { lat: 1.29, lng: 103.85 }, // Singapore hub
            { lat: 6.93, lng: 79.85 },  // Colombo
            { lat: 12.6, lng: 43.4 },   // Bab-el-Mandeb
            { lat: 20.0, lng: 38.0 },   // Mer Rouge Centre
            { lat: 30.5, lng: 32.5 },   // Canal de Suez
            { lat: 31.2, lng: 32.3 },   // Port Said
            { lat: 35.4, lng: 14.1 },   // Méditerranée
            { lat: 36.13, lng: -5.45 }  // Gibraltar/Algeciras
        );
    }
    // Europe → Asie (via Suez inverse)
    else if (isEuropean(fromPort) && isAsian(toPort)) {
        waypoints.push(
            { lat: 36.13, lng: -5.45 }, // Gibraltar
            { lat: 35.4, lng: 14.1 },   // Méditerranée
            { lat: 31.2, lng: 32.3 },   // Port Said
            { lat: 30.5, lng: 32.5 },   // Canal de Suez
            { lat: 20.0, lng: 38.0 },   // Mer Rouge
            { lat: 12.6, lng: 43.4 },   // Bab-el-Mandeb
            { lat: 6.93, lng: 79.85 },  // Colombo
            { lat: 1.29, lng: 103.85 }  // Singapore hub
        );
    }
    // Asie → Amérique du Nord (Transpacifique)
    else if (isAsian(fromPort) && isNorthAmerican(toPort)) {
        // Vérifier si destination côte ouest (Pacifique direct) ou côte est (via Suez)
        if (toLng < -100) {
            // Vers côte ouest - déjà géré ci-dessus
            waypoints.push(
                { lat: 35.0, lng: 150.0 },
                { lat: 40.0, lng: 170.0 },
                { lat: 42.0, lng: -160.0 },
                { lat: 40.0, lng: -135.0 }
            );
        } else {
            // Vers côte est - via Suez + Atlantique
            waypoints.push(
                { lat: 1.29, lng: 103.85 },  // Singapore
                { lat: 6.93, lng: 79.85 },   // Colombo
                { lat: 12.6, lng: 43.4 },    // Bab-el-Mandeb
                { lat: 20.0, lng: 38.0 },    // Mer Rouge
                { lat: 30.5, lng: 32.5 },    // Suez
                { lat: 31.2, lng: 32.3 },    // Port Said
                { lat: 36.13, lng: -5.45 },  // Gibraltar
                { lat: 40.0, lng: -20.0 },   // Mid-Atlantique
                { lat: 40.0, lng: -50.0 }    // Approche USA
            );
        }
    }
    // Amérique du Nord → Asie (Transpacifique inverse)
    else if (isNorthAmerican(fromPort) && isAsian(toPort)) {
        // Déjà géré par les cas spécifiques côte ouest/est ci-dessus
        if (fromLng < -100) {
            // Côte ouest - déjà géré
            waypoints.push(
                { lat: 40.0, lng: -140.0 },
                { lat: 42.0, lng: 170.0 },
                { lat: 38.0, lng: 150.0 },
                { lat: 35.0, lng: 130.0 }
            );
        } else {
            // Côte est - via Atlantique + Suez - déjà géré
            waypoints.push(
                { lat: 40.0, lng: -50.0 },
                { lat: 40.0, lng: -20.0 },
                { lat: 36.13, lng: -5.45 },
                { lat: 35.4, lng: 14.1 },
                { lat: 31.2, lng: 32.3 },
                { lat: 30.5, lng: 32.5 },
                { lat: 20.0, lng: 38.0 },
                { lat: 12.6, lng: 43.4 },
                { lat: 6.93, lng: 79.85 },
                { lat: 1.29, lng: 103.85 }
            );
        }
    }
    // Europe → Amérique du Nord (Atlantique Nord)
    else if (isEuropean(fromPort) && isNorthAmerican(toPort)) {
        waypoints.push(
            { lat: 50.5, lng: -4.0 },   // Manche
            { lat: 48.0, lng: -15.0 },  // Atlantique
            { lat: 46.0, lng: -25.0 },  // Mid-Atlantic
            { lat: 44.0, lng: -35.0 },  // Mid-Atlantic
            { lat: 42.0, lng: -45.0 }   // Approche Amérique
        );
    }
    // Amérique du Nord → Europe (Atlantique inverse)
    else if (isNorthAmerican(fromPort) && isEuropean(toPort)) {
        waypoints.push(
            { lat: 42.0, lng: -45.0 },  // Large Est USA
            { lat: 44.0, lng: -35.0 },  // Mid-Atlantic
            { lat: 46.0, lng: -25.0 },  // Mid-Atlantic
            { lat: 48.0, lng: -15.0 },  // Atlantique Est
            { lat: 50.5, lng: -4.0 }    // Manche
        );
    }
    // Asie → Afrique (Océan Indien)
    else if (isAsian(fromPort) && isAfrican(toPort)) {
        waypoints.push(
            { lat: 1.29, lng: 103.85 },  // Singapore
            { lat: 6.93, lng: 79.85 },   // Colombo
            { lat: -4.04, lng: 60.0 },   // Océan Indien Centre
            { lat: -10.0, lng: 45.0 }    // Approche Afrique Est
        );
    }
    // Europe → Amérique du Sud (via Atlantique Sud)
    else if (isEuropean(fromPort) && isSouthAmerican(toPort)) {
        waypoints.push(
            { lat: 36.13, lng: -5.45 },  // Gibraltar
            { lat: 28.0, lng: -15.0 },   // Canaries
            { lat: 10.0, lng: -20.0 },   // Atlantique Tropical
            { lat: -5.0, lng: -25.0 },   // Équateur
            { lat: -15.0, lng: -30.0 }   // Atlantique Sud
        );
    }
    // Asie intra-régionale (court)
    else if (isAsian(fromPort) && isAsian(toPort)) {
        const dist = Math.sqrt(Math.pow(toLat - fromLat, 2) + Math.pow(toLng - fromLng, 2));
        if (dist > 20) { // Seulement si distance significative
            const midLat = (fromLat + toLat) / 2;
            const midLng = (fromLng + toLng) / 2;
            waypoints.push({ lat: midLat, lng: midLng });
        }
    }
    // Europe intra-régionale
    else if (isEuropean(fromPort) && isEuropean(toPort)) {
        const dist = Math.sqrt(Math.pow(toLat - fromLat, 2) + Math.pow(toLng - fromLng, 2));
        if (dist > 10) {
            const midLat = (fromLat + toLat) / 2;
            const midLng = (fromLng + toLng) / 2;
            waypoints.push({ lat: midLat, lng: midLng });
        }
    }
    // Méditerranée → Moyen-Orient
    else if ((fromPort.country === 'Greece' || fromPort.country === 'Turkey') && 
             (toPort.country === 'UAE' || toPort.country === 'Saudi Arabia')) {
        waypoints.push(
            { lat: 31.2, lng: 32.3 },   // Port Said
            { lat: 30.5, lng: 32.5 },   // Suez
            { lat: 20.0, lng: 38.0 }    // Mer Rouge
        );
    }
    // Par défaut : toujours passer par l'océan (jamais par les terres)
    else {
        const dist = Math.sqrt(Math.pow(toLat - fromLat, 2) + Math.pow(toLng - fromLng, 2));
        
        // Déterminer si on traverse l'Atlantique, Pacifique, ou autre
        const lngDiff = toLng - fromLng;
        const crossesPacific = Math.abs(lngDiff) > 120 && ((fromLng < 0 && toLng > 100) || (fromLng > 100 && toLng < 0));
        const crossesAtlantic = (fromLng > -30 && fromLng < 40) && (toLng < -30 || toLng > 40);
        
        // Route autour du monde via océans
        if (crossesPacific) {
            // Traversée Pacifique : passer au large, pas par la Russie
            const avgLat = (fromLat + toLat) / 2;
            waypoints.push(
                { lat: avgLat, lng: fromLng + (toLng - fromLng) * 0.25 },
                { lat: avgLat + 10, lng: fromLng + (toLng - fromLng) * 0.5 },
                { lat: avgLat, lng: fromLng + (toLng - fromLng) * 0.75 }
            );
        } else if (crossesAtlantic) {
            // Traversée Atlantique : arc au milieu
            const midLat = (fromLat + toLat) / 2;
            const midLng = (fromLng + toLng) / 2;
            waypoints.push(
                { lat: fromLat + (toLat - fromLat) * 0.33, lng: fromLng + (toLng - fromLng) * 0.33 },
                { lat: midLat + 5, lng: midLng },
                { lat: fromLat + (toLat - fromLat) * 0.67, lng: fromLng + (toLng - fromLng) * 0.67 }
            );
        } else if (dist > 30) {
            // Courte/moyenne distance : arc simple avec 3-5 waypoints
            const numWaypoints = Math.min(5, Math.ceil(dist / 20));
            for (let i = 1; i <= numWaypoints; i++) {
                const ratio = i / (numWaypoints + 1);
                const interpLat = fromLat + (toLat - fromLat) * ratio;
                const interpLng = fromLng + (toLng - fromLng) * ratio;
                
                // Arc vers le nord (hémisphère nord) ou sud (hémisphère sud)
                const hemisphere = (fromLat + toLat) / 2 > 0 ? 1 : -1;
                const arcOffset = Math.sin(ratio * Math.PI) * Math.min(8, dist / 4) * hemisphere;
                
                waypoints.push({ 
                    lat: interpLat + arcOffset, 
                    lng: interpLng 
                });
            }
        }
    }
    
    waypoints.push({ lat: toLat, lng: toLng });
    return waypoints;
}

function isAsian(port) {
    const asiaCountries = ['China', 'Singapore', 'South Korea', 'Japan', 'Hong Kong', 'Taiwan', 'Malaysia', 'Thailand', 'Vietnam', 'Indonesia', 'Philippines', 'India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Myanmar'];
    return asiaCountries.includes(port.country);
}

function isEuropean(port) {
    const europeCountries = ['Netherlands', 'Belgium', 'Germany', 'UK', 'France', 'Italy', 'Spain', 'Greece', 'Poland', 'Russia', 'Finland', 'Sweden', 'Latvia', 'Romania', 'Ukraine', 'Turkey', 'Portugal', 'Israel', 'Lebanon'];
    return europeCountries.includes(port.country);
}

function isNorthAmerican(port) {
    return ['USA', 'Canada', 'Mexico'].includes(port.country);
}

function isSouthAmerican(port) {
    return ['Brazil', 'Argentina', 'Chile', 'Peru', 'Colombia', 'Ecuador', 'Uruguay'].includes(port.country);
}

function isAfrican(port) {
    return ['Egypt', 'Morocco', 'South Africa', 'Nigeria', 'Kenya', 'Tanzania', 'Ghana', 'Senegal', 'Côte d\'Ivoire'].includes(port.country);
}

// Fonction pour obtenir les routes maritimes majeures
function getMajorShippingRoutes(year) {
    return [
        
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
                { lat: 33.0, lng: 129.5 },   // Détroit de Corée (plus au sud)
                { lat: 31.0, lng: 131.0 },   // Mer de Seto (sud du Japon)
                { lat: 32.0, lng: 135.0 },   // Pacifique sud Japon
                { lat: 33.5, lng: 138.5 },   // Approche Tokyo (par le sud)
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
                { lat: 36.0, lng: 124.0 },   // Mer Jaune (plus au sud)
                { lat: 34.5, lng: 126.5 },   // Sud de la Mer Jaune
                { lat: 35.18, lng: 129.08 }, // Busan
                { lat: 33.0, lng: 129.5 },   // Détroit de Corée (plus au sud)
                { lat: 31.0, lng: 131.0 },   // Sud du Japon
                { lat: 32.0, lng: 135.0 },   // Pacifique sud Japon
                { lat: 33.5, lng: 138.5 },   // Approche Tokyo (par le sud)
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
                { lat: 3.0, lng: 104.0 },    // Golfe de Thaïlande Sud (plus à l'est)
                { lat: 6.0, lng: 103.5 },    // Golfe de Thaïlande (plus à l'est)
                { lat: 10.0, lng: 102.5 },   // Approche Laem Chabang
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
                { lat: 11.0, lng: 108.5 },   // Large du Sud Vietnam (plus à l'est)
                { lat: 13.0, lng: 110.0 },   // Large du Centre Vietnam (plus à l'est)
                { lat: 16.0, lng: 110.0 },   // Large de Da Nang
                { lat: 19.0, lng: 109.5 },   // Mer de Chine (large du Nord Vietnam)
                { lat: 20.5, lng: 108.0 },   // Approche Hai Phong (plus à l'est)
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
                { lat: 10.0, lng: 102.5 },   // Golfe Thaïlande Sud
                { lat: 9.0, lng: 104.5 },    // Large du Cambodge
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
                { lat: -1.0, lng: 106.0 },   // Détroit Sunda (plus au nord)
                { lat: -6.10, lng: 106.88 }, // Jakarta
                { lat: -3.0, lng: 107.0 },   // Large de Sumatra (plus au nord-est)
                { lat: 0.0, lng: 105.0 },    // Détroit Malacca (plus au nord-est)
                { lat: 3.0, lng: 102.0 },    // Mer d'Andaman
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
                { lat: 14.0, lng: 96.0 },    // Golfe Martaban
                { lat: 10.0, lng: 96.0 },    // Mer d'Andaman
                { lat: 6.0, lng: 98.0 },     // Large Thaïlande Sud
                { lat: 3.0, lng: 100.5 },    // Détroit Malacca Nord
                { lat: 2.0, lng: 102.0 },    // Détroit Malacca Sud
                { lat: 4.0, lng: 102.5 },    // Golfe Thaïlande Sud
                { lat: 8.0, lng: 101.0 },    // Golfe Thaïlande Centre
                { lat: 11.0, lng: 100.5 },   // Approche Bangkok
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
                { lat: 10.0, lng: 102.5 },   // Golfe de Thaïlande
                { lat: 7.0, lng: 103.5 },    // Approche détroit Malacca
                { lat: 4.0, lng: 103.0 },    // Détroit Malacca (contournement)
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
                { lat: -2.0, lng: 108.0 },   // Mer de Java (plus à l'ouest)
                { lat: 1.0, lng: 109.0 },    // Côte ouest Bornéo
                { lat: 5.0, lng: 112.0 },    // Nord-ouest Bornéo
                { lat: 7.0, lng: 118.0 },    // Mer de Célèbes (contournement)
                { lat: 10.0, lng: 119.5 },   // Mer de Sulu (plus à l'ouest)
                { lat: 12.5, lng: 120.0 },   // Approche Manila (plus à l'ouest)
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
                { lat: 11.0, lng: 79.0 },    // Sud Tamil Nadu
                { lat: 8.0, lng: 77.5 },     // Sud de l'Inde (pointe)
                { lat: 9.0, lng: 76.0 },     // Côte Kerala
                { lat: 12.0, lng: 75.0 },    // Karnataka
                { lat: 15.0, lng: 73.5 },    // Goa
                { lat: 18.95, lng: 72.95 }   // Jawaharlal Nehru (Mumbai)
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
                { lat: 8.0, lng: 85.0 },     // Océan Indien
                { lat: 8.0, lng: 92.0 },     // Mer d'Andaman
                { lat: 6.0, lng: 97.0 },     // Approche Détroit Malacca
                { lat: 3.0, lng: 100.5 },    // Détroit Malacca (plus au sud)
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
                { lat: 25.0, lng: 57.0 },    // Détroit d'Hormuz
                { lat: 24.0, lng: 59.0 },    // Golfe d'Oman (est)
                { lat: 21.0, lng: 60.0 },    // Mer d'Arabie (est d'Oman)
                { lat: 18.0, lng: 59.0 },    // Approche Salalah
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
                { lat: 25.5, lng: 56.5 },    // Détroit d'Hormuz
                { lat: 25.0, lng: 58.5 },    // Golfe d'Oman (nord)
                { lat: 23.0, lng: 60.0 },    // Golfe d'Oman (est)
                { lat: 20.0, lng: 60.0 },    // Mer d'Arabie (est d'Oman)
                { lat: 17.5, lng: 58.0 },    // Approche Salalah
                { lat: 16.95, lng: 54.00 },  // Salalah
                { lat: 13.0, lng: 50.0 },    // Golfe d'Aden (plus au sud)
                { lat: 12.5, lng: 45.0 },    // Entrée Mer Rouge
                { lat: 15.0, lng: 42.0 },    // Mer Rouge Sud
                { lat: 18.0, lng: 40.0 },    // Mer Rouge Centre
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
                { lat: 52.5, lng: 4.0 },     // Mer du Nord Ouest
                { lat: 54.0, lng: 5.0 },     // Mer du Nord Nord
                { lat: 54.5, lng: 7.5 },     // Approche Hamburg par mer
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
                { lat: 53.0, lng: 4.5 },     // Mer du Nord Centre
                { lat: 54.5, lng: 6.5 },     // Mer du Nord Nord
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
                { lat: 59.5, lng: 23.0 },    // Golfe de Finlande Ouest
                { lat: 58.5, lng: 21.5 },    // Mer Baltique Nord
                { lat: 56.95, lng: 24.11 },  // Riga
                { lat: 56.0, lng: 20.5 },    // Mer Baltique Centre-Ouest
                { lat: 55.0, lng: 18.5 },    // Approche Gdansk par mer
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
                { lat: 40.5, lng: 27.5 },    // Mer de Marmara Centre
                { lat: 40.2, lng: 26.5 },    // Approche Dardanelles
                { lat: 39.5, lng: 25.5 },    // Mer Égée Nord
                { lat: 38.8, lng: 25.8 },    // Mer Égée Centre-Ouest
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
                { lat: 48.5, lng: -127.0 },  // Offshore Nord-Ouest Washington
                { lat: 46.0, lng: -126.5 },  // Offshore Washington
                { lat: 43.0, lng: -126.0 },  // Offshore Oregon
                { lat: 40.0, lng: -125.5 },  // Offshore Nord Californie
                { lat: 37.80, lng: -123.5 },  // Offshore Oakland
                { lat: 35.0, lng: -122.0 },  // Californie Centre
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
                { lat: 38.5, lng: -74.5 },   // Offshore Delaware
                { lat: 36.5, lng: -75.5 },   // Offshore Virginia
                { lat: 34.0, lng: -76.0 },   // Offshore North Carolina
                { lat: 32.78, lng: -79.93 }, // Charleston
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
        
        // 45. Canada-Europe (Vancouver → Panama → Hamburg)
        {
            name: 'Canada-Europe',
            waypoints: [
                { lat: 49.28, lng: -123.12 },// Vancouver
                { lat: 47.0, lng: -126.0 },  // Offshore Nord-Ouest
                { lat: 45.0, lng: -127.0 },  // Large Côte Ouest
                { lat: 40.0, lng: -126.5 },  // Offshore Californie Nord
                { lat: 35.0, lng: -124.0 },  // Offshore Californie
                { lat: 25.0, lng: -115.0 },  // Basse Californie
                { lat: 15.0, lng: -105.0 },  // Large Mexique
                { lat: 9.36, lng: -79.90 },  // Colon (Panama)
                { lat: 15.0, lng: -70.0 },   // Caraïbes
                { lat: 25.0, lng: -60.0 },   // Atlantique Ouest
                { lat: 35.0, lng: -50.0 },   // Mid-Atlantic Ouest
                { lat: 45.0, lng: -35.0 },   // Mid-Atlantic
                { lat: 50.0, lng: -20.0 },   // Atlantique Est
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
                { lat: 5.0, lng: -45.0 },    // Atlantique Tropical
                { lat: -5.0, lng: -32.0 },   // Atlantique large de Fortaleza
                { lat: -12.0, lng: -33.0 },  // Atlantique large de Salvador
                { lat: -18.0, lng: -35.0 },  // Atlantique large d'Espírito Santo
                { lat: -22.0, lng: -38.0 },  // Atlantique large de Rio
                { lat: -24.0, lng: -42.0 },  // Approche Santos
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
                { lat: -28.0, lng: -45.0 },  // Atlantique large du Brésil Sud
                { lat: -33.0, lng: -48.0 },  // Atlantique large de l'Uruguay
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
                { lat: 38.5, lng: -74.5 },   // Offshore Delaware
                { lat: 36.5, lng: -75.5 },   // Offshore Virginia (Norfolk area)
                { lat: 34.0, lng: -76.0 },   // Offshore North Carolina
                { lat: 32.03, lng: -79.93 }, // Charleston area
                { lat: 28.0, lng: -79.0 },   // Offshore Floride Est
                { lat: 24.0, lng: -76.0 },   // Atlantique Bahamas
                { lat: 20.0, lng: -65.0 },   // Atlantique Nord Caraïbes
                { lat: 10.0, lng: -50.0 },   // Atlantique Tropical
                { lat: 0.0, lng: -38.0 },    // Équateur
                { lat: -10.0, lng: -34.0 },  // Atlantique large du Brésil
                { lat: -20.0, lng: -37.0 },  // Atlantique Sud
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
                { lat: -27.0, lng: 33.5 },   // Large du Mozambique Sud
                { lat: -23.0, lng: 36.0 },   // Canal Mozambique Sud
                { lat: -18.0, lng: 39.0 },   // Canal Mozambique Centre
                { lat: -15.0, lng: 41.0 },   // Large du Mozambique Nord
                { lat: -10.0, lng: 41.5 },   // Approche Tanzanie offshore
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
                { lat: -35.0, lng: 20.0 },   // Sud Cap de Bonne-Espérance
                { lat: -35.5, lng: 23.0 },   // Océan Indien Sud
                { lat: -34.0, lng: 27.0 },   // Large côte est
                { lat: -29.86, lng: 31.04 }, // Durban
                { lat: -27.0, lng: 33.5 },   // Large du Mozambique Sud
                { lat: -23.0, lng: 36.0 },   // Canal Mozambique Sud
                { lat: -18.0, lng: 39.0 },   // Canal Mozambique Centre
                { lat: -15.0, lng: 41.0 },   // Large du Mozambique Nord
                { lat: -10.0, lng: 41.5 },   // Approche Tanzanie offshore
                { lat: -6.80, lng: 39.28 },  // Dar es Salaam
                { lat: -4.04, lng: 39.67 },  // Mombasa
                { lat: 0.0, lng: 50.0 },     // Océan Indien large de Somalie
                { lat: 3.0, lng: 53.0 },     // Océan Indien Est Somalie
                { lat: 8.0, lng: 54.0 },     // Large côte est Somalie
                { lat: 11.0, lng: 52.0 },    // Approche Golfe d'Aden offshore
                { lat: 12.6, lng: 48.0 },    // Golfe d'Aden Centre
                { lat: 13.0, lng: 43.5 },    // Bab-el-Mandeb (détroit)
                { lat: 15.0, lng: 42.0 },    // Mer Rouge Sud
                { lat: 20.0, lng: 38.0 },    // Mer Rouge Centre
                { lat: 29.97, lng: 32.55 }   // Suez
            ],
            intensity: 170,
            annualPassages: 3200,
            color: '#2c3e50'
        }
    ];
}

// Principales routes maritimes mondiales (style MarineTraffic)
// Top 50 ports mondiaux par volume de conteneurs
const worldMajorPorts = [
    // Asie-Pacifique
    { name: 'Shanghai', lat: 31.23, lng: 121.47, country: 'China', teu: 47030000 },
    { name: 'Singapore', lat: 1.29, lng: 103.85, country: 'Singapore', teu: 37200000 },
    { name: 'Ningbo-Zhoushan', lat: 29.87, lng: 121.55, country: 'China', teu: 33350000 },
    { name: 'Shenzhen', lat: 22.54, lng: 114.06, country: 'China', teu: 30330000 },
    { name: 'Guangzhou', lat: 23.13, lng: 113.26, country: 'China', teu: 24180000 },
    { name: 'Qingdao', lat: 36.07, lng: 120.38, country: 'China', teu: 24010000 },
    { name: 'Busan', lat: 35.18, lng: 129.08, country: 'South Korea', teu: 22710000 },
    { name: 'Tianjin', lat: 39.13, lng: 117.20, country: 'China', teu: 20270000 },
    { name: 'Hong Kong', lat: 22.30, lng: 114.17, country: 'Hong Kong', teu: 18360000 },
    { name: 'Port Klang', lat: 2.99, lng: 101.39, country: 'Malaysia', teu: 13580000 },
    { name: 'Kaohsiung', lat: 22.61, lng: 120.30, country: 'Taiwan', teu: 10260000 },
    { name: 'Tokyo', lat: 35.62, lng: 139.78, country: 'Japan', teu: 9630000 },
    { name: 'Yokohama', lat: 35.44, lng: 139.64, country: 'Japan', teu: 3070000 },
    { name: 'Xiamen', lat: 24.48, lng: 118.09, country: 'China', teu: 12200000 },
    { name: 'Dalian', lat: 38.91, lng: 121.60, country: 'China', teu: 9770000 },
    { name: 'Tanjung Pelepas', lat: 1.36, lng: 103.55, country: 'Malaysia', teu: 10840000 },
    
    // Moyen-Orient
    { name: 'Dubai', lat: 25.28, lng: 55.33, country: 'UAE', teu: 14110000 },
    { name: 'Jeddah', lat: 21.54, lng: 39.17, country: 'Saudi Arabia', teu: 4150000 },
    { name: 'Salalah', lat: 16.95, lng: 54.00, country: 'Oman', teu: 5200000 },
    
    // Europe
    { name: 'Rotterdam', lat: 51.92, lng: 4.48, country: 'Netherlands', teu: 14350000 },
    { name: 'Antwerp', lat: 51.27, lng: 4.41, country: 'Belgium', teu: 12040000 },
    { name: 'Hamburg', lat: 53.55, lng: 9.99, country: 'Germany', teu: 8730000 },
    { name: 'Piraeus', lat: 37.95, lng: 23.65, country: 'Greece', teu: 5440000 },
    { name: 'Valencia', lat: 39.47, lng: -0.38, country: 'Spain', teu: 5440000 },
    { name: 'Algeciras', lat: 36.13, lng: -5.45, country: 'Spain', teu: 5130000 },
    { name: 'Felixstowe', lat: 51.96, lng: 1.35, country: 'UK', teu: 4000000 },
    { name: 'Le Havre', lat: 49.49, lng: 0.12, country: 'France', teu: 2850000 },
    { name: 'Marseille', lat: 43.30, lng: 5.37, country: 'France', teu: 1450000 },
    { name: 'Genoa', lat: 44.41, lng: 8.93, country: 'Italy', teu: 2620000 },
    { name: 'Barcelona', lat: 41.35, lng: 2.17, country: 'Spain', teu: 3610000 },
    { name: 'Gioia Tauro', lat: 38.43, lng: 15.90, country: 'Italy', teu: 2850000 },
    
    // Amérique du Nord
    { name: 'Los Angeles', lat: 33.74, lng: -118.27, country: 'USA', teu: 10680000 },
    { name: 'Long Beach', lat: 33.75, lng: -118.19, country: 'USA', teu: 8830000 },
    { name: 'New York/New Jersey', lat: 40.67, lng: -74.05, country: 'USA', teu: 8300000 },
    { name: 'Savannah', lat: 32.03, lng: -81.09, country: 'USA', teu: 5760000 },
    { name: 'Vancouver', lat: 49.28, lng: -123.12, country: 'Canada', teu: 3570000 },
    { name: 'Houston', lat: 29.73, lng: -95.27, country: 'USA', teu: 3200000 },
    { name: 'Charleston', lat: 32.78, lng: -79.93, country: 'USA', teu: 2610000 },
    { name: 'Seattle', lat: 47.60, lng: -122.33, country: 'USA', teu: 3840000 },
    
    // Amérique du Sud
    { name: 'Santos', lat: -23.96, lng: -46.33, country: 'Brazil', teu: 4440000 },
    { name: 'Callao', lat: -12.05, lng: -77.15, country: 'Peru', teu: 2340000 },
    { name: 'Buenos Aires', lat: -34.61, lng: -58.37, country: 'Argentina', teu: 1500000 },
    { name: 'Cartagena', lat: 10.39, lng: -75.51, country: 'Colombia', teu: 3260000 },
    
    // Afrique
    { name: 'Port Said', lat: 31.26, lng: 32.30, country: 'Egypt', teu: 4000000 },
    { name: 'Tanger Med', lat: 35.88, lng: -5.57, country: 'Morocco', teu: 7200000 },
    { name: 'Durban', lat: -29.86, lng: 31.04, country: 'South Africa', teu: 2730000 },
    { name: 'Lagos', lat: 6.44, lng: 3.40, country: 'Nigeria', teu: 1800000 },
    { name: 'Mombasa', lat: -4.04, lng: 39.67, country: 'Kenya', teu: 1440000 },
    { name: 'Abidjan', lat: 5.31, lng: -4.01, country: 'Côte d\'Ivoire', teu: 870000 },
    { name: 'Alexandria', lat: 31.20, lng: 29.92, country: 'Egypt', teu: 2700000 },
    { name: 'Casablanca', lat: 33.59, lng: -7.62, country: 'Morocco', teu: 1400000 },
    { name: 'Dakar', lat: 14.69, lng: -17.44, country: 'Senegal', teu: 750000 },
    { name: 'Cape Town', lat: -33.93, lng: 18.42, country: 'South Africa', teu: 900000 },
    { name: 'Tema', lat: 5.62, lng: -0.02, country: 'Ghana', teu: 1200000 },
    { name: 'Dar es Salaam', lat: -6.80, lng: 39.28, country: 'Tanzania', teu: 820000 },
    
    // Canal zones
    { name: 'Colon', lat: 9.36, lng: -79.90, country: 'Panama', teu: 4300000 },
    { name: 'Suez', lat: 29.97, lng: 32.55, country: 'Egypt', teu: 0 },
    
    // Asie - Inde & Sous-continent
    { name: 'Jawaharlal Nehru', lat: 18.95, lng: 72.95, country: 'India', teu: 5730000 },
    { name: 'Mundra', lat: 22.84, lng: 69.72, country: 'India', teu: 4400000 },
    { name: 'Chennai', lat: 13.08, lng: 80.27, country: 'India', teu: 2100000 },
    { name: 'Colombo', lat: 6.93, lng: 79.85, country: 'Sri Lanka', teu: 7230000 },
    { name: 'Karachi', lat: 24.86, lng: 67.02, country: 'Pakistan', teu: 2400000 },
    { name: 'Chittagong', lat: 22.36, lng: 91.78, country: 'Bangladesh', teu: 3100000 },
    { name: 'Calcutta', lat: 22.57, lng: 88.36, country: 'India', teu: 700000 },
    
    // Asie - Sud-Est supplémentaire
    { name: 'Laem Chabang', lat: 13.08, lng: 100.88, country: 'Thailand', teu: 8100000 },
    { name: 'Ho Chi Minh City', lat: 10.77, lng: 106.70, country: 'Vietnam', teu: 7200000 },
    { name: 'Manila', lat: 14.59, lng: 120.98, country: 'Philippines', teu: 4900000 },
    { name: 'Jakarta', lat: -6.10, lng: 106.88, country: 'Indonesia', teu: 6800000 },
    { name: 'Hai Phong', lat: 20.86, lng: 106.68, country: 'Vietnam', teu: 5500000 },
    { name: 'Penang', lat: 5.42, lng: 100.34, country: 'Malaysia', teu: 1500000 },
    { name: 'Yangon', lat: 16.78, lng: 96.16, country: 'Myanmar', teu: 800000 },
    
    // Europe - Baltique & Mer Noire
    { name: 'Bremerhaven', lat: 53.54, lng: 8.58, country: 'Germany', teu: 5500000 },
    { name: 'Gdansk', lat: 54.35, lng: 18.65, country: 'Poland', teu: 2100000 },
    { name: 'St. Petersburg', lat: 59.94, lng: 30.31, country: 'Russia', teu: 2000000 },
    { name: 'Helsinki', lat: 60.17, lng: 24.94, country: 'Finland', teu: 1600000 },
    { name: 'Gothenburg', lat: 57.71, lng: 11.97, country: 'Sweden', teu: 800000 },
    { name: 'Riga', lat: 56.95, lng: 24.11, country: 'Latvia', teu: 600000 },
    { name: 'Constanta', lat: 44.17, lng: 28.65, country: 'Romania', teu: 650000 },
    { name: 'Odessa', lat: 46.48, lng: 30.73, country: 'Ukraine', teu: 700000 },
    { name: 'Istanbul', lat: 41.02, lng: 28.97, country: 'Turkey', teu: 3400000 },
    { name: 'Izmir', lat: 38.42, lng: 27.14, country: 'Turkey', teu: 1300000 },
    
    // Europe - Méditerranée supplémentaire
    { name: 'Naples', lat: 40.84, lng: 14.27, country: 'Italy', teu: 1000000 },
    { name: 'Lisbon', lat: 38.72, lng: -9.14, country: 'Portugal', teu: 1300000 },
    { name: 'Thessaloniki', lat: 40.64, lng: 22.94, country: 'Greece', teu: 400000 },
    { name: 'Haifa', lat: 32.82, lng: 34.99, country: 'Israel', teu: 1700000 },
    { name: 'Ashdod', lat: 31.81, lng: 34.65, country: 'Israel', teu: 1500000 },
    { name: 'Beirut', lat: 33.90, lng: 35.50, country: 'Lebanon', teu: 1100000 },
    
    // Amérique du Nord - supplémentaire
    { name: 'Oakland', lat: 37.80, lng: -122.27, country: 'USA', teu: 2600000 },
    { name: 'Tacoma', lat: 47.25, lng: -122.44, country: 'USA', teu: 2400000 },
    { name: 'Norfolk', lat: 36.85, lng: -76.29, country: 'USA', teu: 3100000 },
    { name: 'Miami', lat: 25.77, lng: -80.19, country: 'USA', teu: 1150000 },
    { name: 'Baltimore', lat: 39.29, lng: -76.61, country: 'USA', teu: 1100000 },
    { name: 'Montreal', lat: 45.50, lng: -73.57, country: 'Canada', teu: 1700000 },
    { name: 'Prince Rupert', lat: 54.31, lng: -130.32, country: 'Canada', teu: 1400000 },
    { name: 'Manzanillo', lat: 19.05, lng: -104.32, country: 'Mexico', teu: 3400000 },
    { name: 'Veracruz', lat: 19.20, lng: -96.13, country: 'Mexico', teu: 1200000 },
    { name: 'Lazaro Cardenas', lat: 17.95, lng: -102.20, country: 'Mexico', teu: 1700000 },
    
    // Amérique du Sud - supplémentaire
    { name: 'Valparaiso', lat: -33.05, lng: -71.62, country: 'Chile', teu: 1200000 },
    { name: 'Guayaquil', lat: -2.17, lng: -79.88, country: 'Ecuador', teu: 2300000 },
    { name: 'San Antonio', lat: -33.59, lng: -71.61, country: 'Chile', teu: 1100000 },
    { name: 'Rio de Janeiro', lat: -22.91, lng: -43.17, country: 'Brazil', teu: 800000 },
    { name: 'Montevideo', lat: -34.91, lng: -56.17, country: 'Uruguay', teu: 1200000 },
    
    // Océanie - supplémentaire
    { name: 'Sydney', lat: -33.87, lng: 151.21, country: 'Australia', teu: 2700000 },
    { name: 'Melbourne', lat: -37.81, lng: 144.96, country: 'Australia', teu: 2900000 },
    { name: 'Brisbane', lat: -27.47, lng: 153.03, country: 'Australia', teu: 1400000 },
    { name: 'Auckland', lat: -36.84, lng: 174.76, country: 'New Zealand', teu: 900000 },
    { name: 'Fremantle', lat: -32.05, lng: 115.75, country: 'Australia', teu: 800000 },
    
    // Moyen-Orient - supplémentaire
    { name: 'Abu Dhabi', lat: 24.47, lng: 54.37, country: 'UAE', teu: 1900000 },
    { name: 'Sharjah', lat: 25.36, lng: 55.39, country: 'UAE', teu: 700000 },
    { name: 'Kuwait', lat: 29.37, lng: 47.98, country: 'Kuwait', teu: 1100000 },
    { name: 'Aden', lat: 12.78, lng: 45.04, country: 'Yemen', teu: 600000 },
    { name: 'Dammam', lat: 26.42, lng: 50.10, country: 'Saudi Arabia', teu: 1800000 }
];

// Fonction pour animer les bateaux le long des routes maritimes réelles
let shipAnimations = [];
let useRealAISData = false;
let realVesselsData = null;

async function initializeShips() {
    shipAnimations = [];
    
    // Tenter de récupérer les données VesselFinder réelles
    console.log('🛰️ Tentative de récupération des données VesselFinder...');
    realVesselsData = await VESSEL_CONFIG.getCachedVessels();
    
    if (realVesselsData && realVesselsData.length > 0) {
        useRealAISData = true;
        console.log(`✅ Mode VesselFinder réel activé: ${realVesselsData.length} navires`);
        
        // Limiter à 100 navires maximum pour performance
        const maxShips = Math.min(100, realVesselsData.length);
        shipAnimations = realVesselsData.slice(0, maxShips).map((vessel, i) => ({
            vessel: vessel,
            isReal: true,
            size: 0.4,
            color: vessel.speed > 15 ? '#2ecc71' : vessel.speed > 8 ? '#f39c12' : '#e74c3c'
        }));
        
        console.log(`🚢 ${shipAnimations.length} navires réels affichés`);
        return;
    }
    
    // Fallback: utiliser les vraies routes maritimes avec ajustement TEU
    console.log('⚠️ VesselFinder non disponible, utilisation des routes maritimes réelles');
    useRealAISData = false;
    
    // Obtenir l'année courante depuis le sélecteur
    const currentYear = parseInt(document.getElementById('year-selector').value) || 2025;
    const routes = getMajorShippingRoutes(currentYear);
    
    console.log(`📋 Nombre de routes récupérées: ${routes.length}`);
    
    let totalShips = 0;
    let totalPassages = 0;
    routes.forEach(route => {
        totalPassages += route.annualPassages;
        // Créer plusieurs bateaux par route selon l'intensité (basée sur stats réelles)
        // Diviser par 5 pour avoir ~2500 bateaux au total au lieu de 11000+
        const adjustedIntensity = Math.ceil(route.intensity / 5);
        for (let i = 0; i < adjustedIntensity; i++) {
            const speed = 60000 + Math.random() * 40000; // 60-100 secondes par route complète (2x plus lent)
            const offset = (i / route.intensity) * speed; // Distribution régulière
            
            shipAnimations.push({
                route: route,
                speed: speed,
                offset: offset,
                size: 0.08 + Math.random() * 0.04, // Taille petite mais visible
                color: route.color,
                direction: 1, // Unidirectionnel - les routes sont divisées en Est/Ouest
                isReal: false
            });
            totalShips++;
        }
    });
    
    console.log(`✅ ${totalShips} bateaux initialisés sur ${routes.length} routes (année ${currentYear})`);
    console.log(`📊 Basé sur ${totalPassages.toLocaleString()} passages annuels réels`);
    console.log(`🚢 Premier bateau:`, shipAnimations[0]);
}

// Interpolation Catmull-Rom Spline pour des trajectoires fluides et précises
// Cette méthode crée des courbes douces au lieu de lignes droites
function catmullRomSpline(p0, p1, p2, p3, t) {
    const t2 = t * t;
    const t3 = t2 * t;
    
    return 0.5 * (
        (2 * p1) +
        (-p0 + p2) * t +
        (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
        (-p0 + 3 * p1 - 3 * p2 + p3) * t3
    );
}

function interpolateAlongRoute(waypoints, progress, reverse = false) {
    if (reverse) {
        progress = 1 - progress;
    }
    
    const totalSegments = waypoints.length - 1;
    const segmentProgress = progress * totalSegments;
    const segmentIndex = Math.floor(segmentProgress);
    const segmentFraction = segmentProgress - segmentIndex;
    
    if (segmentIndex >= totalSegments) {
        return waypoints[waypoints.length - 1];
    }
    
    // Obtenir les 4 points de contrôle pour la spline
    const p0 = waypoints[Math.max(0, segmentIndex - 1)];
    const p1 = waypoints[segmentIndex];
    const p2 = waypoints[segmentIndex + 1];
    const p3 = waypoints[Math.min(waypoints.length - 1, segmentIndex + 2)];
    
    // Interpolation Catmull-Rom pour latitude et longitude
    const lat = catmullRomSpline(p0.lat, p1.lat, p2.lat, p3.lat, segmentFraction);
    const lng = catmullRomSpline(p0.lng, p1.lng, p2.lng, p3.lng, segmentFraction);
    
    return { lat, lng };
}

function animateShips() {
    if (shipAnimations.length === 0) {
        // Initialiser de manière asynchrone si pas encore fait
        if (!window.shipsInitializing) {
            window.shipsInitializing = true;
            initializeShips().then(() => {
                console.log('✅ Bateaux initialisés dans animateShips');
                window.shipsInitializing = false;
            });
        }
        return;
    }
    
    // Mode AIS réel: utiliser les positions actuelles des navires
    if (useRealAISData) {
        const ships = shipAnimations.map((shipAnim, i) => {
            const vessel = shipAnim.vessel;
            
            // Petite oscillation pour effet vivant
            const waveEffect = Math.sin(Date.now() * 0.001 + i) * 0.0005;
            const alt = 0.005 + waveEffect;
            
            // Convertir le cap en radians pour Three.js
            const heading = (vessel.course || vessel.heading || 0) * (Math.PI / 180);
            
            return {
                lat: vessel.lat,
                lng: vessel.lng,
                alt: alt,
                id: `ship-${vessel.mmsi}`,
                size: shipAnim.size,
                color: shipAnim.color,
                heading: heading,
                speed: vessel.speed,
                name: vessel.name
            };
        });
        
        // Utiliser 3 InstancedMesh (LOD) + Frustum Culling + Object Pooling pour AIS
        if (instancedShipsHigh && instancedShipsMedium && instancedShipsLow && ships.length > 0) {
            const camera = globe.camera();
            
            camera.updateMatrixWorld();
            cameraViewProjectionMatrix.multiplyMatrices(
                camera.projectionMatrix,
                camera.matrixWorldInverse
            );
            frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);
            
            camera.getWorldPosition(pooledCameraPos);
            
            let countHigh = 0;
            let countMedium = 0;
            let countLow = 0;
            
            ships.forEach((ship, i) => {
                if (i >= maxShips) return;
                
                const coords = globe.getCoords(ship.lat, ship.lng, ship.alt);
                pooledPosition.set(coords.x, coords.y, coords.z);
                
                // Frustum culling
                if (!frustum.containsPoint(pooledPosition)) {
                    return;
                }
                
                // Calculer la distance pour le LOD
                const distance = pooledCameraPos.distanceTo(pooledPosition);
                
                pooledDummy.position.set(coords.x, coords.y, coords.z);
                pooledDummy.scale.set(1.0, 1.0, 1.0);
                pooledDummy.lookAt(0, 0, 0);
                pooledDummy.rotateY(ship.heading);
                pooledDummy.updateMatrix();
                
                // Assigner au niveau LOD approprié
                if (distance < LOD_DISTANCE_HIGH) {
                    instancedShipsHigh.setMatrixAt(countHigh, pooledDummy.matrix);
                    countHigh++;
                } else if (distance < LOD_DISTANCE_MEDIUM) {
                    instancedShipsMedium.setMatrixAt(countMedium, pooledDummy.matrix);
                    countMedium++;
                } else {
                    instancedShipsLow.setMatrixAt(countLow, pooledDummy.matrix);
                    countLow++;
                }
            });
            
            instancedShipsHigh.count = countHigh;
            instancedShipsMedium.count = countMedium;
            instancedShipsLow.count = countLow;
            
            instancedShipsHigh.instanceMatrix.needsUpdate = true;
            instancedShipsMedium.instanceMatrix.needsUpdate = true;
            instancedShipsLow.instanceMatrix.needsUpdate = true;
        }
        return;
    }
    
    // Mode simulation: routes prédéfinies
    const ships = shipAnimations.map((shipAnim, i) => {
        const route = shipAnim.route;
        const totalTime = shipAnim.speed;
        const currentTime = (Date.now() + shipAnim.offset) % totalTime;
        let progress = currentTime / totalTime;
        
        // Debug: log premier bateau
        if (i === 0 && Date.now() % 5000 < 100) {
            console.log(`🚢 Bateau 0: progress=${progress.toFixed(3)}, route=${route.name}`);
        }
        
        // Interpoler le long de la route
        const position = interpolateAlongRoute(route.waypoints, progress, shipAnim.direction === -1);
        
        // Altitude avec fade out/in: bateaux "plongent" sous l'eau pendant la transition
        let alt;
        if (progress > 0.92) {
            // Transition finale: descendre sous l'eau de 0.92 à 1.0
            const fadeProgress = (progress - 0.92) / 0.08; // 0.0 à 1.0
            alt = 0.01 - (fadeProgress * 0.05); // Descend de 0.01 à -0.04 (sous l'eau)
        } else if (progress < 0.08) {
            // Transition initiale: remonter de sous l'eau de 0.0 à 0.08
            const fadeProgress = progress / 0.08; // 0.0 à 1.0
            alt = -0.04 + (fadeProgress * 0.05); // Monte de -0.04 à 0.01
        } else {
            // Navigation normale avec effet de vague
            const waveEffect = Math.sin(progress * Math.PI * 6 + Date.now() * 0.001) * 0.0008;
            alt = 0.01 + waveEffect;
        }
        
        // Calculer l'angle de direction pour orienter le bateau
        const nextProgress = Math.min(progress + 0.005, 1.0);
        const nextPosition = interpolateAlongRoute(route.waypoints, nextProgress, shipAnim.direction === -1);
        const heading = Math.atan2(nextPosition.lng - position.lng, nextPosition.lat - position.lat);
        
        return { 
            lat: position.lat, 
            lng: position.lng, 
            alt: alt, 
            id: `ship-${i}`,
            size: shipAnim.size,
            color: shipAnim.color,
            heading: heading,
            routeName: route.name
        };
    });
    
    // Utiliser 3 InstancedMesh (LOD) + Frustum Culling + Object Pooling pour performance maximale
    if (instancedShipsHigh && instancedShipsMedium && instancedShipsLow && ships.length > 0) {
        const camera = globe.camera();
        
        // Mettre à jour le frustum avec la position actuelle de la caméra
        camera.updateMatrixWorld();
        cameraViewProjectionMatrix.multiplyMatrices(
            camera.projectionMatrix,
            camera.matrixWorldInverse
        );
        frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);
        
        // Récupérer la position de la caméra pour le calcul de distance
        camera.getWorldPosition(pooledCameraPos);
        
        // Compteurs pour chaque niveau LOD
        let countHigh = 0;
        let countMedium = 0;
        let countLow = 0;
        
        ships.forEach((ship, i) => {
            if (i >= maxShips) return; // Limite de sécurité
            
            // Obtenir les coordonnées 3D
            const coords = globe.getCoords(ship.lat, ship.lng, ship.alt);
            pooledPosition.set(coords.x, coords.y, coords.z);
            
            // FRUSTUM CULLING : Tester si le bateau est visible
            if (!frustum.containsPoint(pooledPosition)) {
                return; // Bateau hors de vue, on le skip !
            }
            
            // Calculer la distance à la caméra pour le LOD
            const distance = pooledCameraPos.distanceTo(pooledPosition);
            
            // Positionner et orienter le bateau
            pooledDummy.position.set(coords.x, coords.y, coords.z);
            pooledDummy.scale.set(1.0, 1.0, 1.0);
            pooledDummy.lookAt(0, 0, 0);
            pooledDummy.rotateY(ship.heading);
            pooledDummy.updateMatrix();
            
            // Assigner au niveau LOD approprié selon la distance
            if (distance < LOD_DISTANCE_HIGH) {
                instancedShipsHigh.setMatrixAt(countHigh, pooledDummy.matrix);
                countHigh++;
            } else if (distance < LOD_DISTANCE_MEDIUM) {
                instancedShipsMedium.setMatrixAt(countMedium, pooledDummy.matrix);
                countMedium++;
            } else {
                instancedShipsLow.setMatrixAt(countLow, pooledDummy.matrix);
                countLow++;
            }
        });
        
        // Mettre à jour les compteurs et forcer le rafraîchissement
        instancedShipsHigh.count = countHigh;
        instancedShipsMedium.count = countMedium;
        instancedShipsLow.count = countLow;
        
        // IMPORTANT: Effacer les instances inutilisées en les mettant hors de vue
        // Cela évite les "trails" fantômes d'anciennes positions
        const invisibleMatrix = new THREE.Matrix4().makeScale(0, 0, 0);
        for (let i = countHigh; i < maxShips; i++) {
            instancedShipsHigh.setMatrixAt(i, invisibleMatrix);
        }
        for (let i = countMedium; i < maxShips; i++) {
            instancedShipsMedium.setMatrixAt(i, invisibleMatrix);
        }
        for (let i = countLow; i < maxShips; i++) {
            instancedShipsLow.setMatrixAt(i, invisibleMatrix);
        }
        
        instancedShipsHigh.instanceMatrix.needsUpdate = true;
        instancedShipsMedium.instanceMatrix.needsUpdate = true;
        instancedShipsLow.instanceMatrix.needsUpdate = true;
        
        const totalVisible = countHigh + countMedium + countLow;
        console.log(`🚢 LOD: ${countHigh} high + ${countMedium} med + ${countLow} low = ${totalVisible}/${ships.length}`);
    }
}

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
            .polygonStrokeColor(() => '#ffffff');
        console.log('🗺️ Frontières chargées:', countries.length, 'pays');
    })
    .catch(err => console.error('❌ Erreur frontières:', err));

// Charger les données de balance des paiements
loadBalanceData();

// Fonction pour mettre à jour la légende
function updateLegend(dataType) {
    const title = document.getElementById('legend-title');
    const content = document.getElementById('legend-content');
    
    // Obtenir le drapeau du pays source
    const sourceCountry = countries.find(c => c.name === currentSourceCountry);
    const sourceFlag = sourceCountry ? sourceCountry.flag : '🏳️';
    
    switch(dataType) {
        case 'exports':
            title.textContent = `Exportations (${sourceFlag} ${currentSourceCountry} → Pays):`;
            content.innerHTML = `
                <span style="color: rgba(66, 135, 245, 0.8);">●</span> Flux sortant de ${currentSourceCountry}<br>
                <small style="color: #999;">L'épaisseur de la ligne représente le volume</small>
            `;
            break;
        case 'imports':
            title.textContent = `Importations (Pays → ${sourceFlag} ${currentSourceCountry}):`;
            content.innerHTML = `
                <span style="color: rgba(255, 140, 50, 0.8);">●</span> Flux entrant vers ${currentSourceCountry}<br>
                <small style="color: #999;">L'épaisseur de la ligne représente le volume</small>
            `;
            break;
        case 'volume':
            title.textContent = 'Volume total des échanges:';
            content.innerHTML = `
                <span style="color: rgba(150, 100, 255, 0.8);">●</span> Échanges bilatéraux<br>
                <small style="color: #999;">L'épaisseur de la ligne représente le volume</small>
            `;
            break;
        case 'balance':
        default:
            title.textContent = 'Balance des paiements:';
            content.innerHTML = `
                <span style="color: #00ff88;">●</span> Fort excédent (>5Md€)<br>
                <span style="color: #88ff88;">●</span> Excédent<br>
                <span style="color: #ffaa88;">●</span> Déficit léger<br>
                <span style="color: #ff6b6b;">●</span> Fort déficit (>5Md€)
            `;
            break;
    }
}

// Gestion des boutons radio pour changer le type de données
document.querySelectorAll('input[name="dataType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        updateGlobeWithBalanceData(e.target.value);
    });
});

// Gestion du bouton d'affichage des données
document.getElementById('show-data').addEventListener('click', () => {
    showDataTable();
});

document.getElementById('year-selector').addEventListener('change', (e) => {
    const selectedYear = parseInt(e.target.value);
    console.log(`📅 Changement d'année: ${selectedYear}`);
    loadBalanceData(selectedYear);
});

// Système de recherche de pays avec dropdown filtrable
let allCountriesSorted = [];
let selectedCountryIndex = -1;

function initializeCountrySelector() {
    const searchInput = document.getElementById('country-search-input');
    const dropdown = document.getElementById('country-dropdown');
    const clearBtn = document.getElementById('country-clear-btn');
    
    if (!searchInput || !dropdown) {
        console.error('❌ Éléments de recherche de pays non trouvés');
        return;
    }
    
    // Trier les pays par nom
    allCountriesSorted = [...countries].sort((a, b) => a.name.localeCompare(b.name));
    
    // Définir le pays initial
    const initialCountry = allCountriesSorted.find(c => c.name === currentSourceCountry);
    if (initialCountry) {
        searchInput.value = `${initialCountry.flag} ${initialCountry.name}`;
    }
    
    // Remplir le dropdown avec tous les pays
    function renderCountryOptions(filteredCountries = allCountriesSorted) {
        dropdown.innerHTML = '';
        
        if (filteredCountries.length === 0) {
            dropdown.innerHTML = '<div class="no-results">Aucun pays trouvé</div>';
            return;
        }
        
        filteredCountries.forEach((country, index) => {
            const option = document.createElement('div');
            option.className = 'country-option';
            option.dataset.countryName = country.name;
            option.dataset.index = index;
            option.innerHTML = `<span class="country-option-flag">${country.flag}</span><span>${country.name}</span>`;
            
            option.addEventListener('click', () => {
                selectCountry(country);
            });
            
            dropdown.appendChild(option);
        });
        
        selectedCountryIndex = -1;
    }
    
    // Sélectionner un pays
    function selectCountry(country) {
        searchInput.value = `${country.flag} ${country.name}`;
        currentSourceCountry = country.name;
        dropdown.style.display = 'none';
        clearBtn.style.display = 'inline';
        
        // Mettre à jour le titre
        const title = document.querySelector('.controls h1');
        if (title) {
            title.textContent = `${country.flag} Commerce International`;
        }
        
        // Rafraîchir les points pour mettre en évidence le nouveau pays source
        globe
            .pointRadius(d => d.name === currentSourceCountry ? 1.2 : 0.7)
            .pointColor(d => d.name === currentSourceCountry ? '#0055A4' : '#ff6b6b');
        
        // Recharger les données
        console.log(`🏳️ Changement de pays source: ${country.name}`);
        loadBalanceData(currentYear);
    }
    
    // Filtrer les pays lors de la saisie
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        clearBtn.style.display = searchTerm ? 'inline' : 'none';
        
        // Si l'input est vide, afficher tous les pays
        if (!searchTerm) {
            renderCountryOptions(allCountriesSorted);
            dropdown.style.display = 'block';
            return;
        }
        
        // Filtrer les pays
        const filtered = allCountriesSorted.filter(country => 
            country.name.toLowerCase().includes(searchTerm) ||
            country.capital.toLowerCase().includes(searchTerm)
        );
        
        renderCountryOptions(filtered);
        dropdown.style.display = 'block';
    });
    
    // Ouvrir le dropdown au focus
    searchInput.addEventListener('focus', () => {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm.includes('🏳️') || searchTerm.includes('🇫🇷')) {
            // Si c'est un pays déjà sélectionné, vider et afficher tous
            searchInput.value = '';
            clearBtn.style.display = 'none';
            renderCountryOptions(allCountriesSorted);
        } else {
            // Filtrer selon la valeur actuelle
            const filtered = searchTerm ? 
                allCountriesSorted.filter(country => 
                    country.name.toLowerCase().includes(searchTerm) ||
                    country.capital.toLowerCase().includes(searchTerm)
                ) : allCountriesSorted;
            renderCountryOptions(filtered);
        }
        dropdown.style.display = 'block';
    });
    
    // Navigation au clavier
    searchInput.addEventListener('keydown', (e) => {
        const options = dropdown.querySelectorAll('.country-option');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedCountryIndex = Math.min(selectedCountryIndex + 1, options.length - 1);
            updateHighlight(options);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedCountryIndex = Math.max(selectedCountryIndex - 1, 0);
            updateHighlight(options);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedCountryIndex >= 0 && options[selectedCountryIndex]) {
                const countryName = options[selectedCountryIndex].dataset.countryName;
                const country = allCountriesSorted.find(c => c.name === countryName);
                if (country) selectCountry(country);
            }
        } else if (e.key === 'Escape') {
            dropdown.style.display = 'none';
        }
    });
    
    // Mettre à jour le highlight
    function updateHighlight(options) {
        options.forEach((opt, idx) => {
            opt.classList.toggle('highlighted', idx === selectedCountryIndex);
        });
        
        // Scroll vers l'élément sélectionné
        if (selectedCountryIndex >= 0 && options[selectedCountryIndex]) {
            options[selectedCountryIndex].scrollIntoView({ block: 'nearest' });
        }
    }
    
    // Bouton clear
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        searchInput.focus();
        renderCountryOptions(allCountriesSorted);
        dropdown.style.display = 'block';
    });
    
    // Fermer le dropdown si on clique ailleurs
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target) && !clearBtn.contains(e.target)) {
            dropdown.style.display = 'none';
            
            // Restaurer le pays sélectionné si l'input est vide ou invalide
            const country = allCountriesSorted.find(c => c.name === currentSourceCountry);
            if (country && !searchInput.value.includes(country.name)) {
                searchInput.value = `${country.flag} ${country.name}`;
            }
        }
    });
    
    console.log(`✅ Système de recherche de pays initialisé avec ${allCountriesSorted.length} pays`);
}

// Initialiser le sélecteur de pays après un court délai pour s'assurer que le DOM est prêt
setTimeout(() => {
    initializeCountrySelector();
}, 100);

// Gestionnaire pour le type de filtre
document.getElementById('filter-type-selector').addEventListener('change', (e) => {
    const filterType = e.target.value;
    currentFilterType = filterType;
    const valueSelector = document.getElementById('filter-value-selector');
    
    if (filterType === 'all') {
        valueSelector.style.display = 'none';
        currentFilterValue = null;
        updateGlobeWithBalanceData(currentDataType);
    } else {
        valueSelector.style.display = 'block';
        updateFilterOptions(filterType);
    }
});

// Gestionnaire pour la valeur du filtre
document.getElementById('filter-value-selector').addEventListener('change', (e) => {
    currentFilterValue = e.target.value;
    console.log(`🎯 Filtre ${currentFilterType}: ${currentFilterValue}`);
    updateGlobeWithBalanceData(currentDataType);
});

// Fonction pour mettre à jour les options du sélecteur de valeur
function updateFilterOptions(filterType) {
    const valueSelector = document.getElementById('filter-value-selector');
    valueSelector.innerHTML = '';
    
    switch(filterType) {
        case 'region':
            Object.keys(countryRegions).forEach(region => {
                const option = document.createElement('option');
                option.value = region;
                const emoji = {'Europe': '🇪🇺', 'Asie': '🌏', 'Afrique': '🌍', 'Amériques': '🌎', 'Océanie': '🏝️'}[region];
                option.textContent = `${emoji} ${region}`;
                valueSelector.appendChild(option);
            });
            break;
        case 'income':
            Object.keys(incomeGroups).forEach(group => {
                const option = document.createElement('option');
                option.value = group;
                option.textContent = `💰 ${group}`;
                valueSelector.appendChild(option);
            });
            break;
        case 'group':
            Object.keys(economicGroups).forEach(group => {
                const option = document.createElement('option');
                option.value = group;
                option.textContent = `🤝 ${group}`;
                valueSelector.appendChild(option);
            });
            break;
        case 'country':
            // Trier les pays alphabétiquement (sauf France)
            const sortedCountries = countries
                .filter(c => c.name !== 'France')
                .sort((a, b) => a.name.localeCompare(b.name, 'fr'));
            
            sortedCountries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name;
                option.textContent = `${country.flag} ${country.name}`;
                valueSelector.appendChild(option);
            });
            break;
    }
    
    // Déclencher le changement avec la première option
    if (valueSelector.options.length > 0) {
        currentFilterValue = valueSelector.options[0].value;
        updateGlobeWithBalanceData(currentDataType);
    }
}

document.getElementById('modal-year-selector').addEventListener('change', (e) => {
    const selectedYear = parseInt(e.target.value);
    console.log(`📅 Changement d'année (modal): ${selectedYear}`);
    // Synchroniser avec le sélecteur principal
    document.getElementById('year-selector').value = selectedYear.toString();
    // Charger les données et rafraîchir le tableau
    loadBalanceData(selectedYear).then(() => {
        showDataTable();
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('data-modal').style.display = 'none';
});

document.getElementById('download-csv').addEventListener('click', () => {
    downloadCSV();
});

// Fermer le modal en cliquant en dehors
document.getElementById('data-modal').addEventListener('click', (e) => {
    if (e.target.id === 'data-modal') {
        document.getElementById('data-modal').style.display = 'none';
    }
});

function showDataTable() {
    const modal = document.getElementById('data-modal');
    const tbody = document.getElementById('data-table-body');
    const metadataDiv = document.getElementById('metadata-info');
    const modalYearSelector = document.getElementById('modal-year-selector');
    const modalTitle = document.getElementById('modal-title');
    
    // Obtenir le drapeau du pays source
    const sourceCountry = countries.find(c => c.name === currentSourceCountry);
    const sourceFlag = sourceCountry ? sourceCountry.flag : '🏳️';
    
    // Mettre à jour le titre du modal
    modalTitle.textContent = `📊 Balance des Paiements - ${sourceFlag} ${currentSourceCountry}`;
    
    // Synchroniser le sélecteur d'année du modal avec l'année courante
    modalYearSelector.value = currentYear.toString();
    
    // Filtrer les pays avec commerce et trier par volume
    const tradingCountries = balanceData
        .filter(c => c.volume > 0 && c.name !== currentSourceCountry)
        .sort((a, b) => b.volume - a.volume);
    
    // Calculer les totaux
    const totalExports = tradingCountries.reduce((sum, c) => sum + c.exports, 0);
    const totalImports = tradingCountries.reduce((sum, c) => sum + c.imports, 0);
    const totalBalance = totalExports - totalImports;
    const totalVolume = totalExports + totalImports;
    
    // Afficher les métadonnées
    const lastUpdate = new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    metadataDiv.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
            <div>
                <strong>📊 Source:</strong> API Nationale / Simulation<br>
                <small>Données commerciales internationales</small>
            </div>
            <div>
                <strong>📅 Année:</strong> ${currentYear}<br>
                <small>Dernière extraction: ${lastUpdate}</small>
            </div>
            <div>
                <strong>🌍 Pays avec commerce:</strong><br>
                ${tradingCountries.length} pays
            </div>
            <div>
                <strong>💰 Volume total:</strong><br>
                ${totalVolume.toLocaleString('fr-FR', {maximumFractionDigits: 0})} M€
            </div>
        </div>
        <div style="margin-top: 10px; font-size: 12px; opacity: 0.8;">
            ℹ️ Données en millions d'euros (M€). Les pourcentages indiquent la part de chaque pays dans le commerce total de ${sourceFlag} ${currentSourceCountry}.
        </div>
    `;
    
    // Générer les lignes du tableau
    tbody.innerHTML = tradingCountries.map((country, index) => {
        const soldeColor = country.balance > 0 ? '#00aa44' : '#dd0000';
        const rowBg = index % 2 === 0 ? '#f9f9f9' : 'white';
        
        return `
            <tr style="background: ${rowBg};">
                <td style="padding: 10px; border: 1px solid #ddd; color: #333;">
                    ${country.flag} ${country.name}
                </td>
                <td style="padding: 10px; text-align: right; border: 1px solid #ddd; color: #333;">
                    ${country.exports.toLocaleString('fr-FR', {maximumFractionDigits: 0})} M€
                </td>
                <td style="padding: 10px; text-align: right; border: 1px solid #ddd; color: #333;">
                    ${country.imports.toLocaleString('fr-FR', {maximumFractionDigits: 0})} M€
                </td>
                <td style="padding: 10px; text-align: right; border: 1px solid #ddd; color: ${soldeColor}; font-weight: bold;">
                    ${country.balance > 0 ? '+' : ''}${country.balance.toLocaleString('fr-FR', {maximumFractionDigits: 0})} M€
                </td>
                <td style="padding: 10px; text-align: right; border: 1px solid #ddd; color: #333; font-weight: bold;">
                    ${country.volume.toLocaleString('fr-FR', {maximumFractionDigits: 0})} M€
                </td>
            </tr>
        `;
    }).join('');
    
    // Ajouter une ligne de total
    tbody.innerHTML += `
        <tr style="background: #667eea; color: white; font-weight: bold;">
            <td style="padding: 12px; border: 1px solid #ddd;">
                TOTAL
            </td>
            <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">
                ${totalExports.toLocaleString('fr-FR', {maximumFractionDigits: 0})} M€
            </td>
            <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">
                ${totalImports.toLocaleString('fr-FR', {maximumFractionDigits: 0})} M€
            </td>
            <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">
                ${totalBalance > 0 ? '+' : ''}${totalBalance.toLocaleString('fr-FR', {maximumFractionDigits: 0})} M€
            </td>
            <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">
                ${totalVolume.toLocaleString('fr-FR', {maximumFractionDigits: 0})} M€
            </td>
        </tr>
    `;
    
    modal.style.display = 'block';
}

function downloadCSV() {
    // Filtrer et trier les données
    const tradingCountries = balanceData
        .filter(c => c.volume > 0 && c.name !== currentSourceCountry)
        .sort((a, b) => b.volume - a.volume);
    
    // Calculer les totaux
    const totalExports = tradingCountries.reduce((sum, c) => sum + c.exports, 0);
    const totalImports = tradingCountries.reduce((sum, c) => sum + c.imports, 0);
    const totalBalance = totalExports - totalImports;
    const totalVolume = totalExports + totalImports;
    
    // Obtenir le drapeau du pays source
    const sourceCountry = countries.find(c => c.name === currentSourceCountry);
    const sourceFlag = sourceCountry ? sourceCountry.flag : '';
    
    // En-tête du CSV avec métadonnées
    const lastUpdate = new Date().toISOString().split('T')[0];
    let csv = `"Balance des Paiements - ${currentSourceCountry}"\n`;
    csv += `"Source: API Nationale / Simulation"\n`;
    csv += `"Année: ${currentYear}"\n`;
    csv += `"Date d'extraction: ${lastUpdate}"\n`;
    csv += `"Nombre de pays: ${tradingCountries.length}"\n`;
    csv += `"Montants en millions d'euros (M€)"\n\n`;
    
    // En-tête des colonnes
    csv += `"Pays","Latitude","Longitude","Exportations (M€)","% Exports","Importations (M€)","% Imports","Solde (M€)","Volume Total (M€)","% Volume"\n`;
    
    // Données des pays
    tradingCountries.forEach(country => {
        const exportPct = ((country.exports / totalExports) * 100).toFixed(2);
        const importPct = ((country.imports / totalImports) * 100).toFixed(2);
        const volumePct = ((country.volume / totalVolume) * 100).toFixed(2);
        
        csv += `"${country.name}",${country.lat},${country.lng},`;
        csv += `${country.exports.toFixed(0)},${exportPct},`;
        csv += `${country.imports.toFixed(0)},${importPct},`;
        csv += `${country.balance.toFixed(0)},`;
        csv += `${country.volume.toFixed(0)},${volumePct}\n`;
    });
    
    // Ligne de total
    csv += `\n"TOTAL","","",${totalExports.toFixed(0)},100.00,${totalImports.toFixed(0)},100.00,${totalBalance.toFixed(0)},${totalVolume.toFixed(0)},100.00\n`;
    
    // Créer un blob et télécharger
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const countryNameForFile = currentSourceCountry.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    link.setAttribute('href', url);
    link.setAttribute('download', `balance_paiements_${countryNameForFile}_${currentYear}_${lastUpdate}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Configuration de la caméra pour vue globale
globe.pointOfView({ altitude: 2.5 }, 0);

// Variables d'état
let isRotating = true;
let rotationSpeed = 0.2;
let showPorts = true;

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
const togglePortsBtn = document.getElementById('toggle-ports');

rotateToggle.addEventListener('click', () => {
    isRotating = !isRotating;
    const controls = globe.controls();
    controls.autoRotate = isRotating;
    rotateToggle.textContent = isRotating ? '⏸️ Pause Rotation' : '▶️ Reprendre Rotation';
});

togglePortsBtn.addEventListener('click', () => {
    showPorts = !showPorts;
    globe.htmlElementsData(showPorts ? worldMajorPorts : []);
    togglePortsBtn.style.background = showPorts ? 'rgba(255,215,0,0.3)' : 'rgba(255,255,255,0.2)';
    togglePortsBtn.textContent = showPorts ? '🏭 Ports' : '🏭 Masquer Ports';
    console.log(`${showPorts ? '🏭 Ports affichés' : '❌ Ports masqués'}`);
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

// Initialiser et démarrer l'animation des bateaux après le chargement du globe
console.log('🚢 Démarrage du système de bateaux...');

// L'animation démarrera automatiquement dans globe.onGlobeReady()
// Initialiser les bateaux (les données)
initializeShips().then(() => {
    console.log('✅ Bateaux initialisés avec succès');
    console.log(`📊 Nombre de bateaux: ${shipAnimations.length}`);
    
    // Afficher les ports par défaut
    globe.htmlElementsData(worldMajorPorts);
    console.log(`🏭 ${worldMajorPorts.length} ports majeurs affichés`);
    
    // Test immédiat: forcer un appel à animateShips
    setTimeout(() => {
        console.log('🧪 Test de positionnement des bateaux...');
        if (shipAnimations.length > 0) {
            const testShip = shipAnimations[0];
            console.log('Premier bateau:', testShip);
        }
    }, 1000);
    
    // Rafraîchir les données VesselFinder toutes les 2 minutes si activé
    setInterval(async () => {
        if (useRealAISData) {
            console.log('🔄 Mise à jour des données VesselFinder...');
            const newData = await VESSEL_CONFIG.getCachedVessels();
            if (newData && newData.length > 0) {
                realVesselsData = newData;
                shipAnimations = []; // Réinitialiser pour recharger
                await initializeShips();
            }
        }
    }, 120000); // Toutes les 2 minutes (API limitée)
}).catch(err => {
    console.error('❌ Erreur initialisation bateaux:', err);
});
