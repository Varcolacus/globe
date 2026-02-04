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

// Connexions commerciales depuis la France vers tous les autres pays
const connections = countries
    .filter(country => country.name !== 'France')
    .map(country => ({
        from: 'France',
        to: country.name
    }));

// Charger les données de la balance des paiements depuis l'API
let balanceData = [];
let currentDataType = 'balance'; // balance, exports, imports, volume
let currentYear = 2025;
let currentFilterType = 'all'; // all, region, income, group, country
let currentFilterValue = null;

async function loadBalanceData(year = currentYear) {
    try {
        currentYear = year;
        balanceData = await API_CONFIG.fetchBalancePaiements(year);
        console.log(`✅ Données ${year} chargées:`, balanceData.length, 'pays');
        updateGlobeWithBalanceData(currentDataType);
    } catch (error) {
        console.error('❌ Erreur chargement données:', error);
    }
}

function updateGlobeWithBalanceData(dataType = 'balance') {
    currentDataType = dataType;
    
    // Filtrer les pays avec du commerce réel (volume > 0)
    let countriesWithTrade = balanceData.filter(c => c.volume > 0 && c.name !== 'France');
    
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
        const startCountry = countries.find(c => c.name === 'France');
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
            currentValue: value
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
    .arcDashAnimateTime(10000)
    .arcStroke(d => d.stroke)
    .arcLabel(d => `
        <div style="background: rgba(0,0,0,0.9); padding: 12px; border-radius: 8px; border: 1px solid ${d.color};">
            <div style="font-size: 16px; font-weight: bold; color: ${d.color}; margin-bottom: 8px;">
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

// Charger les données de balance des paiements
loadBalanceData();

// Fonction pour mettre à jour la légende
function updateLegend(dataType) {
    const title = document.getElementById('legend-title');
    const content = document.getElementById('legend-content');
    
    switch(dataType) {
        case 'exports':
            title.textContent = 'Exportations (France → Pays):';
            content.innerHTML = `
                <span style="color: rgba(66, 135, 245, 0.8);">●</span> Flux sortant de France<br>
                <small style="color: #999;">L'épaisseur de la ligne représente le volume</small>
            `;
            break;
        case 'imports':
            title.textContent = 'Importations (Pays → France):';
            content.innerHTML = `
                <span style="color: rgba(255, 140, 50, 0.8);">●</span> Flux entrant vers France<br>
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
    
    // Synchroniser le sélecteur d'année du modal avec l'année courante
    modalYearSelector.value = currentYear.toString();
    
    // Filtrer les pays avec commerce et trier par volume
    const tradingCountries = balanceData
        .filter(c => c.volume > 0 && c.name !== 'France')
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
                <strong>📊 Source:</strong> Banque de France (Webstat API)<br>
                <small>https://webstat.banque-france.fr</small>
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
            ℹ️ Données en millions d'euros (M€). Les pourcentages indiquent la part de chaque pays dans le commerce total de la France.
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
        .filter(c => c.volume > 0 && c.name !== 'France')
        .sort((a, b) => b.volume - a.volume);
    
    // Calculer les totaux
    const totalExports = tradingCountries.reduce((sum, c) => sum + c.exports, 0);
    const totalImports = tradingCountries.reduce((sum, c) => sum + c.imports, 0);
    const totalBalance = totalExports - totalImports;
    const totalVolume = totalExports + totalImports;
    
    // En-tête du CSV avec métadonnées
    const lastUpdate = new Date().toISOString().split('T')[0];
    let csv = `"Balance des Paiements - France"\n`;
    csv += `"Source: Banque de France (Webstat API)"\n`;
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
    link.setAttribute('href', url);
    link.setAttribute('download', `balance_paiements_france_${currentYear}_${lastUpdate}.csv`);
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
