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
let instancedShips = null;
let shipCount = 0;
const maxShips = 500; // Capacité maximale

// Créer la géométrie partagée une seule fois
const sharedShipGeometry = new THREE.SphereGeometry(0.5, 8, 8);
const sharedShipMaterial = new THREE.MeshBasicMaterial({ 
    vertexColors: true // Permettre des couleurs individuelles
});

// Initialiser l'InstancedMesh quand le globe est prêt
globe.onGlobeReady(() => {
    const scene = globe.scene();
    
    // Créer l'InstancedMesh
    instancedShips = new THREE.InstancedMesh(
        sharedShipGeometry,
        sharedShipMaterial,
        maxShips
    );
    
    // Buffer pour les couleurs individuelles
    const colors = new Float32Array(maxShips * 3);
    instancedShips.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
    
    // Commencer avec 0 instances visibles
    instancedShips.count = 0;
    
    scene.add(instancedShips);
    console.log(`✅ Instanced Rendering initialisé (${maxShips} bateaux max)`);
    
    // Démarrer l'animation des bateaux maintenant que tout est prêt
    setInterval(animateShips, 33); // ~30 FPS (optimisé pour performance)
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

// Conversion passages/an → bateaux simultanés affichés (facteur optimisé pour performance)
function calculateShipsFromStats(annualPassages) {
    return Math.round(annualPassages * 0.0015); // Réduit de moitié pour performance
}

// Principales routes maritimes mondiales avec statistiques réelles
function getMajorShippingRoutes(year = 2025) {
    const stats = maritimeTrafficStats[year] || maritimeTrafficStats[2025];
    
    return [
        // Route Europe → Asie via Suez (la plus importante)
        {
            name: 'Europe-Asia (Suez)',
            waypoints: [
                { lat: 43.3, lng: 5.4 },    // Marseille
                { lat: 40.0, lng: 9.0 },    // Sardaigne
                { lat: 36.8, lng: 10.2 },   // Tunisie
                { lat: 34.0, lng: 18.0 },   // Méditerranée Est
                { lat: 31.5, lng: 25.0 },   // Approche Égypte
                { lat: 31.2, lng: 32.3 },   // Port Saïd
                { lat: 30.5, lng: 32.5 },   // Canal de Suez
                { lat: 29.9, lng: 32.6 },   // Suez Sud
                { lat: 27.0, lng: 33.8 },   // Mer Rouge Nord
                { lat: 20.0, lng: 38.0 },   // Mer Rouge Centre
                { lat: 12.6, lng: 43.4 },   // Détroit de Bab-el-Mandeb
                { lat: 10.0, lng: 51.0 },   // Golfe d'Aden
                { lat: 8.0, lng: 65.0 },    // Océan Indien Ouest
                { lat: 5.0, lng: 80.0 },    // Sri Lanka
                { lat: 3.0, lng: 95.0 },    // Approche Malacca
                { lat: 1.3, lng: 103.8 },   // Détroit de Malacca
                { lat: 5.0, lng: 110.0 },   // Mer de Chine Sud
                { lat: 15.0, lng: 113.0 },  // Mer de Chine
                { lat: 22.3, lng: 114.2 },  // Hong Kong
                { lat: 28.0, lng: 120.0 },  // Côte chinoise
                { lat: 31.2, lng: 121.5 }   // Shanghai
            ],
            intensity: calculateShipsFromStats(stats.suez),
            annualPassages: stats.suez,
            color: '#3498db'
        },
        // Route Atlantique Nord (Europe ↔ USA)
        {
            name: 'North Atlantic',
            waypoints: [
                { lat: 51.5, lng: -0.1 },   // Londres
                { lat: 50.5, lng: -4.0 },   // Manche Ouest
                { lat: 49.3, lng: -8.0 },   // Irlande Sud
                { lat: 48.0, lng: -15.0 },  // Atlantique
                { lat: 46.0, lng: -25.0 },  // Mid-Atlantic
                { lat: 44.0, lng: -35.0 },  // Mid-Atlantic
                { lat: 42.0, lng: -45.0 },  // Approche Amérique
                { lat: 40.7, lng: -55.0 },  // Plateau continental
                { lat: 40.7, lng: -74.0 }   // New York
            ],
            intensity: calculateShipsFromStats(stats.atlantic),
            annualPassages: stats.atlantic,
            color: '#2ecc71'
        },
        // Route Europe → Cap (alternative à Suez)
        {
            name: 'Europe-Asia (Cape)',
            waypoints: [
                { lat: 43.3, lng: 5.4 },    // Marseille
                { lat: 38.0, lng: -1.0 },   // Espagne Sud
                { lat: 36.1, lng: -5.4 },   // Détroit Gibraltar
                { lat: 30.0, lng: -10.0 },  // Côte Afrique Nord-Ouest
                { lat: 20.0, lng: -17.0 },  // Côte Mauritanie
                { lat: 10.0, lng: -15.0 },  // Côte Guinée
                { lat: 0.0, lng: -5.0 },    // Golfe de Guinée
                { lat: -10.0, lng: 5.0 },   // Côte Angola
                { lat: -20.0, lng: 12.0 },  // Namibie
                { lat: -30.0, lng: 16.0 },  // Approche Cap
                { lat: -34.4, lng: 18.4 },  // Cap de Bonne-Espérance
                { lat: -33.0, lng: 25.0 },  // Océan Indien Ouest
                { lat: -28.0, lng: 32.0 },  // Mozambique
                { lat: -20.0, lng: 40.0 },  // Canal Mozambique
                { lat: -10.0, lng: 50.0 },  // Madagascar Est
                { lat: 0.0, lng: 70.0 },    // Océan Indien
                { lat: 5.0, lng: 90.0 },    // Approche Malacca
                { lat: 1.3, lng: 103.8 }    // Singapour
            ],
            intensity: calculateShipsFromStats(stats.cape),
            annualPassages: stats.cape,
            color: '#e74c3c'
        },
        // Route Méditerranée (commerce intra-européen)
        {
            name: 'Mediterranean',
            waypoints: [
                { lat: 43.3, lng: 5.4 },    // Marseille
                { lat: 43.0, lng: 6.5 },    // Nice
                { lat: 42.8, lng: 8.0 },    // Corse Nord
                { lat: 42.0, lng: 9.5 },    // Corse Est
                { lat: 41.5, lng: 10.5 },   // Mer Tyrrhénienne
                { lat: 41.9, lng: 12.5 },   // Civitavecchia (Rome)
                { lat: 41.5, lng: 14.0 },   // Mer Tyrrhénienne Sud
                { lat: 40.8, lng: 14.3 },   // Naples
                { lat: 40.0, lng: 16.0 },   // Calabre
                { lat: 39.0, lng: 17.5 },   // Calabre Sud
                { lat: 38.2, lng: 18.5 },   // Détroit Messine
                { lat: 37.5, lng: 19.5 },   // Mer Ionienne
                { lat: 37.0, lng: 21.0 },   // Grèce Ouest
                { lat: 37.5, lng: 22.5 },   // Péloponnèse
                { lat: 37.9, lng: 23.7 },   // Pirée (Athènes)
                { lat: 38.5, lng: 24.5 },   // Eubée
                { lat: 39.0, lng: 25.2 },   // Mer Égée Nord
                { lat: 39.5, lng: 26.0 },   // Lesbos
                { lat: 40.2, lng: 26.8 },   // Dardanelles
                { lat: 40.8, lng: 27.5 },   // Mer de Marmara
                { lat: 41.0, lng: 28.5 },   // Bosphore
                { lat: 41.0, lng: 29.0 },   // Istanbul
                { lat: 40.8, lng: 28.2 },   // Retour Bosphore
                { lat: 40.5, lng: 27.0 },   // Retour Marmara
                { lat: 40.0, lng: 26.2 },   // Retour Dardanelles
                { lat: 39.5, lng: 25.0 },   // Mer Égée Centre
                { lat: 38.5, lng: 23.0 },   // Cyclades
                { lat: 37.5, lng: 21.5 },   // Péloponnèse Ouest
                { lat: 37.0, lng: 20.0 },   // Mer Ionienne Centre
                { lat: 36.5, lng: 18.0 },   // Sicile Est
                { lat: 36.0, lng: 15.5 },   // Sicile Sud
                { lat: 36.5, lng: 13.5 },   // Sicile Ouest
                { lat: 37.0, lng: 12.0 },   // Palerme
                { lat: 37.5, lng: 11.0 },   // Détroit Sicile Nord
                { lat: 37.0, lng: 10.5 },   // Détroit Sicile
                { lat: 36.8, lng: 10.2 },   // Tunis
                { lat: 37.0, lng: 9.5 },    // Golfe Tunis
                { lat: 37.5, lng: 8.5 },    // Sardaigne Sud
                { lat: 38.5, lng: 8.3 },    // Sardaigne Ouest
                { lat: 39.5, lng: 8.5 },    // Sardaigne Nord
                { lat: 40.5, lng: 8.8 },    // Corse Sud
                { lat: 41.5, lng: 9.0 },    // Corse Ouest
                { lat: 42.5, lng: 8.7 },    // Corse Nord-Ouest
                { lat: 43.0, lng: 7.5 },    // Côte d'Azur
                { lat: 43.3, lng: 5.4 }     // Marseille (retour)
            ],
            intensity: calculateShipsFromStats(stats.mediterranean),
            annualPassages: stats.mediterranean,
            color: '#9b59b6'
        },
        // Route Transpacifique (Asie ↔ USA)
        {
            name: 'Transpacific',
            waypoints: [
                { lat: 31.2, lng: 121.5 },  // Shanghai
                { lat: 32.0, lng: 125.0 },  // Mer de Chine Est
                { lat: 33.0, lng: 130.0 },  // Kyushu
                { lat: 34.0, lng: 135.0 },  // Mer du Japon Sud
                { lat: 35.4, lng: 139.7 },  // Tokyo
                { lat: 36.0, lng: 143.0 },  // Est Honshu
                { lat: 37.0, lng: 150.0 },  // Pacifique Ouest
                { lat: 38.0, lng: 157.0 },  // Pacifique Nord-Ouest
                { lat: 39.0, lng: 164.0 },  // Mid-Pacific Ouest
                { lat: 40.0, lng: 170.0 },  // Mid-Pacific
                { lat: 40.5, lng: 176.0 },  // Mid-Pacific Est
                { lat: 40.8, lng: -178.0 }, // Date line
                { lat: 41.0, lng: -172.0 }, // Mid-Pacific Est 2
                { lat: 41.0, lng: -165.0 }, // Pacifique Centre-Est
                { lat: 40.5, lng: -158.0 }, // Pacifique Est
                { lat: 39.5, lng: -151.0 }, // Approche Hawaï Nord
                { lat: 38.5, lng: -144.0 }, // Pacifique Nord-Est
                { lat: 37.5, lng: -137.0 }, // Approche USA
                { lat: 37.0, lng: -130.0 }, // Large USA Ouest
                { lat: 37.5, lng: -124.0 }, // Large Californie
                { lat: 37.8, lng: -122.4 }  // San Francisco
            ],
            intensity: calculateShipsFromStats(stats.transpacific),
            annualPassages: stats.transpacific,
            color: '#f39c12'
        },
        // Route Panama (Asie ↔ Europe via Panama)
        {
            name: 'Panama Route',
            waypoints: [
                { lat: 1.3, lng: 103.8 },   // Singapour
                { lat: 0.5, lng: 108.0 },   // Mer de Chine Sud
                { lat: 0.0, lng: 115.0 },   // Bornéo Sud
                { lat: -1.0, lng: 120.0 },  // Sulawesi
                { lat: -2.5, lng: 125.0 },  // Mer de Banda Ouest
                { lat: -4.0, lng: 130.0 },  // Mer de Banda
                { lat: -6.0, lng: 135.0 },  // Mer d'Arafura
                { lat: -8.0, lng: 142.0 },  // Papouasie Sud
                { lat: -9.0, lng: 148.0 },  // Papouasie Sud-Est
                { lat: -10.0, lng: 155.0 }, // Mer de Corail
                { lat: -10.5, lng: 162.0 }, // Pacifique Sud-Ouest
                { lat: -10.0, lng: 170.0 }, // Pacifique Sud
                { lat: -9.0, lng: 178.0 },  // Pacifique Sud Centre
                { lat: -8.0, lng: -178.0 }, // Date line Sud
                { lat: -7.0, lng: -170.0 }, // Pacifique Sud-Centre
                { lat: -5.5, lng: -160.0 }, // Pacifique Sud-Est
                { lat: -4.0, lng: -150.0 }, // Approche Équateur
                { lat: -2.0, lng: -140.0 }, // Équateur Pacifique
                { lat: 0.0, lng: -135.0 },  // Équateur
                { lat: 1.0, lng: -130.0 },  // Pacifique Équatorial Est
                { lat: 2.0, lng: -125.0 },  // Large Mexique Sud-Ouest
                { lat: 3.0, lng: -120.0 },  // Pacifique Tropical Est
                { lat: 4.0, lng: -115.0 },  // Large Mexique Sud
                { lat: 5.0, lng: -110.0 },  // Pacifique Est
                { lat: 6.0, lng: -105.0 },  // Large Amérique Centrale Ouest
                { lat: 7.0, lng: -100.0 },  // Large Amérique Centrale
                { lat: 7.8, lng: -95.0 },   // Large Mexique/Guatemala
                { lat: 8.5, lng: -90.0 },   // Large Guatemala
                { lat: 9.0, lng: -85.0 },   // Costa Rica Ouest
                { lat: 9.1, lng: -79.4 },   // Canal de Panama
                { lat: 9.5, lng: -78.0 },   // Sortie Canal (Caraïbes)
                { lat: 10.0, lng: -75.0 },  // Caraïbes Ouest
                { lat: 11.0, lng: -72.0 },  // Caraïbes Colombie
                { lat: 12.5, lng: -68.0 },  // Caraïbes Venezuela
                { lat: 14.0, lng: -65.0 },  // Petites Antilles
                { lat: 15.5, lng: -61.0 },  // Caraïbes Centre-Est
                { lat: 17.0, lng: -57.0 },  // Caraïbes Est
                { lat: 18.5, lng: -53.0 },  // Sortie Caraïbes
                { lat: 20.0, lng: -48.0 },  // Atlantique Tropical Ouest
                { lat: 22.0, lng: -43.0 },  // Atlantique Tropical
                { lat: 24.0, lng: -38.0 },  // Mid-Atlantic Ouest
                { lat: 26.0, lng: -33.0 },  // Mid-Atlantic
                { lat: 28.0, lng: -28.0 },  // Mid-Atlantic Centre
                { lat: 30.0, lng: -23.0 },  // Mid-Atlantic Est
                { lat: 32.0, lng: -18.0 },  // Approche Europe
                { lat: 34.0, lng: -13.0 },  // Large Portugal
                { lat: 35.5, lng: -9.0 },   // Portugal
                { lat: 36.5, lng: -6.5 },   // Approche Gibraltar
                { lat: 36.1, lng: -5.4 }    // Gibraltar
            ],
            intensity: calculateShipsFromStats(stats.panama),
            annualPassages: stats.panama,
            color: '#1abc9c'
        },
        // Route Le Havre ↔ UK ↔ Scandinavie
        {
            name: 'North Europe',
            waypoints: [
                { lat: 49.5, lng: 0.1 },    // Le Havre
                { lat: 50.5, lng: 1.0 },    // Manche
                { lat: 51.5, lng: 1.4 },    // Dover/Kent
                { lat: 52.0, lng: 2.5 },    // Mer du Nord Sud
                { lat: 51.9, lng: 4.5 },    // Rotterdam
                { lat: 53.0, lng: 6.5 },    // Mer du Nord
                { lat: 53.6, lng: 9.9 },    // Hamburg
                { lat: 54.5, lng: 11.5 },   // Kiel
                { lat: 55.7, lng: 12.6 }    // Copenhague
            ],
            intensity: calculateShipsFromStats(stats.northEurope),
            annualPassages: stats.northEurope,
            color: '#34495e'
        },
        // Route Afrique de l'Ouest
        {
            name: 'West Africa',
            waypoints: [
                { lat: 43.3, lng: 5.4 },    // Marseille
                { lat: 42.0, lng: 4.0 },    // Golfe du Lion
                { lat: 41.0, lng: 2.5 },    // Barcelone
                { lat: 39.5, lng: 1.0 },    // Baléares Nord
                { lat: 38.0, lng: 0.0 },    // Baléares
                { lat: 37.0, lng: -1.0 },   // Espagne Sud-Est
                { lat: 36.5, lng: -2.5 },   // Almería
                { lat: 36.2, lng: -4.0 },   // Málaga
                { lat: 36.1, lng: -5.4 },   // Gibraltar
                { lat: 35.8, lng: -5.8 },   // Détroit Gibraltar Ouest
                { lat: 35.0, lng: -6.0 },   // Maroc Nord
                { lat: 34.0, lng: -6.8 },   // Rabat
                { lat: 33.6, lng: -7.6 },   // Casablanca
                { lat: 32.0, lng: -9.0 },   // El Jadida
                { lat: 30.5, lng: -9.8 },   // Essaouira
                { lat: 29.5, lng: -10.2 },  // Agadir
                { lat: 28.0, lng: -11.0 },  // Sahara Ouest Nord
                { lat: 26.0, lng: -13.0 },  // Sahara Ouest
                { lat: 24.0, lng: -15.0 },  // Cap Bojador
                { lat: 22.0, lng: -16.5 },  // Dakhla
                { lat: 20.8, lng: -17.0 },  // Mauritanie Nord
                { lat: 19.0, lng: -16.5 },  // Nouadhibou
                { lat: 18.0, lng: -16.3 },  // Mauritanie Centre
                { lat: 16.5, lng: -16.5 },  // Mauritanie Sud
                { lat: 15.5, lng: -16.8 },  // Saint-Louis
                { lat: 14.7, lng: -17.4 },  // Dakar
                { lat: 13.5, lng: -17.0 },  // Sénégal Sud
                { lat: 12.5, lng: -16.8 },  // Guinée-Bissau
                { lat: 11.5, lng: -16.0 },  // Guinée Nord
                { lat: 10.5, lng: -15.0 },  // Conakry
                { lat: 9.5, lng: -14.0 },   // Guinée Sud
                { lat: 8.5, lng: -13.2 },   // Sierra Leone
                { lat: 7.5, lng: -12.5 },   // Liberia
                { lat: 6.5, lng: -11.0 },   // Liberia Sud
                { lat: 5.5, lng: -9.0 },    // Côte d'Ivoire Ouest
                { lat: 5.3, lng: -4.0 },    // Abidjan
                { lat: 5.2, lng: -2.5 },    // Côte d'Ivoire Est
                { lat: 5.5, lng: 0.0 },     // Ghana Ouest
                { lat: 5.6, lng: 0.2 },     // Accra
                { lat: 6.0, lng: 1.0 },     // Togo
                { lat: 6.3, lng: 2.4 },     // Cotonou
                { lat: 6.5, lng: 3.4 }      // Lagos
            ],
            intensity: calculateShipsFromStats(stats.westAfrica),
            annualPassages: stats.westAfrica,
            color: '#e67e22'
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
    
    // Canal zones
    { name: 'Colon', lat: 9.36, lng: -79.90, country: 'Panama', teu: 4300000 },
    { name: 'Suez', lat: 29.97, lng: 32.55, country: 'Egypt', teu: 0 }
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
    
    // Fallback: utiliser les routes simulées avec statistiques maritimes réelles
    console.log('⚠️ VesselFinder non disponible, utilisation des statistiques maritimes réelles');
    useRealAISData = false;
    
    // Obtenir l'année courante depuis le sélecteur
    const currentYear = parseInt(document.getElementById('year-selector').value) || 2025;
    const routes = getMajorShippingRoutes(currentYear);
    
    let totalShips = 0;
    let totalPassages = 0;
    routes.forEach(route => {
        totalPassages += route.annualPassages;
        // Créer plusieurs bateaux par route selon l'intensité (basée sur stats réelles)
        for (let i = 0; i < route.intensity; i++) {
            const speed = 30000 + Math.random() * 20000; // 30-50 secondes par route complète
            const offset = (i / route.intensity) * speed; // Distribution régulière
            
            shipAnimations.push({
                route: route,
                speed: speed,
                offset: offset,
                size: 0.020 + Math.random() * 0.010, // Taille plus grande et variable
                color: route.color,
                direction: Math.random() > 0.5 ? 1 : -1, // Bidirectionnel
                isReal: false
            });
            totalShips++;
        }
    });
    
    console.log(`✅ ${totalShips} bateaux initialisés sur ${routes.length} routes (année ${currentYear})`);
    console.log(`📊 Basé sur ${totalPassages.toLocaleString()} passages annuels réels`);
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
    
    const start = waypoints[segmentIndex];
    const end = waypoints[segmentIndex + 1];
    
    return {
        lat: start.lat + (end.lat - start.lat) * segmentFraction,
        lng: start.lng + (end.lng - start.lng) * segmentFraction
    };
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
        
        // Utiliser InstancedMesh pour AIS aussi
        if (instancedShips && ships.length > 0) {
            const dummy = new THREE.Object3D();
            const color = new THREE.Color();
            
            ships.forEach((ship, i) => {
                if (i >= maxShips) return;
                
                const coords = globe.getCoords(ship.lat, ship.lng, ship.alt);
                
                dummy.position.set(coords.x, coords.y, coords.z);
                dummy.scale.set(ship.size, ship.size, ship.size);
                dummy.lookAt(0, 0, 0);
                dummy.rotateY(ship.heading);
                
                dummy.updateMatrix();
                instancedShips.setMatrixAt(i, dummy.matrix);
                
                color.set(ship.color);
                instancedShips.instanceColor.setXYZ(i, color.r, color.g, color.b);
            });
            
            instancedShips.count = ships.length;
            instancedShips.instanceMatrix.needsUpdate = true;
            instancedShips.instanceColor.needsUpdate = true;
        }
        return;
    }
    
    // Mode simulation: routes prédéfinies
    const ships = shipAnimations.map((shipAnim, i) => {
        const route = shipAnim.route;
        const totalTime = shipAnim.speed;
        const currentTime = (Date.now() + shipAnim.offset) % totalTime;
        const progress = currentTime / totalTime;
        
        // Interpoler le long de la route
        const position = interpolateAlongRoute(route.waypoints, progress, shipAnim.direction === -1);
        
        // Altitude légèrement au-dessus de l'eau avec effet de vague
        const waveEffect = Math.sin(progress * Math.PI * 6 + Date.now() * 0.001) * 0.0008;
        const alt = 0.01 + waveEffect;
        
        // Calculer l'angle de direction pour orienter le bateau
        const nextProgress = Math.min(progress + 0.005, 1);
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
    
    // Utiliser InstancedMesh pour performance maximale
    if (instancedShips && ships.length > 0) {
        const dummy = new THREE.Object3D();
        const color = new THREE.Color();
        
        ships.forEach((ship, i) => {
            if (i >= maxShips) return; // Limite de sécurité
            
            // Obtenir les coordonnées 3D
            const coords = globe.getCoords(ship.lat, ship.lng, ship.alt);
            
            // Positionner et orienter
            dummy.position.set(coords.x, coords.y, coords.z);
            dummy.scale.set(ship.size, ship.size, ship.size);
            dummy.lookAt(0, 0, 0); // Pointer vers le centre du globe
            dummy.rotateY(ship.heading); // Appliquer la direction
            
            dummy.updateMatrix();
            instancedShips.setMatrixAt(i, dummy.matrix);
            
            // Définir la couleur
            color.set(ship.color);
            instancedShips.instanceColor.setXYZ(i, color.r, color.g, color.b);
        });
        
        // Mettre à jour le nombre d'instances visibles
        instancedShips.count = ships.length;
        instancedShips.instanceMatrix.needsUpdate = true;
        instancedShips.instanceColor.needsUpdate = true;
        
        console.log(`🚢 ${ships.length} bateaux (Instanced Rendering)`);
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
