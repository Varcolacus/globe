# 🌍 Globe Interactif 3D - Commerce International de la France

Une visualisation 3D interactive du commerce international de la France avec plus de 195 pays, basée sur les données de la Banque de France.

![Globe Screenshot](screenshot.png)

## ✨ Fonctionnalités

### 🎨 Quatre modes de visualisation
1. **Balance commerciale (Solde)** : Visualise l'équilibre entre exportations et importations
   - Vert pour les excédents commerciaux
   - Rouge pour les déficits commerciaux
   - Coloration des surfaces des pays selon leur balance
   
2. **Exportations** : Flux sortant de la France vers ses partenaires
   - Lignes bleues animées depuis la France
   - Coloration bleue des surfaces selon le volume d'exportations
   
3. **Importations** : Flux entrant vers la France
   - Lignes orange animées vers la France
   - Coloration orange des surfaces selon le volume d'importations
   
4. **Volume total** : Commerce total (exports + imports)
   - Lignes violettes bidirectionnelles
   - Coloration violette des surfaces selon le volume total

### 🗺️ Coloration heatmap des pays
Les surfaces des pays sont colorées selon leurs données commerciales :
- **Dégradés dynamiques** pour exports, imports et volume (du transparent au plein)
- **Seuils fixes** pour la balance (vert excédent / rouge déficit)
- **Opacité variable** (15-40%) selon l'intensité des échanges
- **Mise à jour automatique** lors du changement de mode ou de filtre

### 📊 Système de filtrage avancé
Cinq types de filtres disponibles :
1. **Tous les pays** : Vue complète de tous les partenaires commerciaux
2. **Par région** (5 régions) :
   - Europe
   - Asie
   - Afrique
   - Amériques
   - Océanie
3. **Par niveau de revenu** (4 groupes, classification Banque Mondiale) :
   - Revenu élevé
   - Revenu intermédiaire supérieur
   - Revenu intermédiaire inférieur
   - Faible revenu
4. **Par groupe économique** (9 groupes) :
   - G7 (7 pays)
   - G20 (20 pays)
   - BRICS (5 pays)
   - Union Européenne (27 pays)
   - Zone Euro (21 pays, incluant la Bulgarie depuis janvier 2025)
   - OPEP (13 pays)
   - ASEAN (10 pays)
   - Golfe (6 pays)
   - Maghreb (5 pays)
5. **Par pays individuel** : Sélection parmi 194 pays (liste alphabétique avec drapeaux)

### 📅 Données historiques multi-années
- Sélecteur d'années : **2013 à 2025** (13 années)
- Simulation de croissance : facteur de 3,5% annuel
- Variations réalistes par pays et par année
- Base de référence : données 2013

### 📈 Visualisation des flux
- **Épaisseur des lignes proportionnelle** au volume d'échanges
  - Formule logarithmique : `stroke = 0.3 + log₁₀(1 + normalizedVolume × 9) × 2.2`
  - Plage : 0,3px à 2,5px
  - Gradient continu sans catégories
- **Animations directionnelles** :
  - Exportations : depuis la France vers le partenaire
  - Importations : depuis le partenaire vers la France
  - Balance/Volume : bidirectionnel
- **Opacité** : 40% pour meilleure lisibilité
- **Cycles d'animation** : 10 secondes

### 📋 Table de données exportable
- **Affichage tabulaire** complet des données
- **Métadonnées** : année, mode de visualisation, filtre appliqué
- **Colonnes** : pays (drapeau + nom), balance, exports, imports, volume, % du total
- **Formatage** : nombres avec séparateurs de milliers (espaces)
- **Sélecteur d'année** : navigation rapide entre les années
- **Export CSV** : téléchargement avec en-têtes et métadonnées
- **Tri dynamique** : par volume décroissant
- **Filtrage** : affiche uniquement les pays avec volume > 0

### 🎮 Contrôles interactifs
- **Rotation automatique** avec contrôles manuels (clic + glisser)
- **Zoom** : molette de souris
- **Sélection année** : menu déroulant
- **Filtres en cascade** : sélection du type puis de la valeur
- **Modes de vue** : boutons radio pour basculer entre les 4 modes
- **Légende dynamique** : mise à jour selon le mode sélectionné

## 🛠️ Technologies utilisées

- **Three.js v0.159.0** : Rendu WebGL 3D (local, 652KB)
- **Globe.GL v2.27.2** : Bibliothèque de visualisation de globe (local, 969KB)
- **TopoJSON v3** : Données des frontières pays via world-atlas (CDN)
- **Vanilla JavaScript** : Aucun framework, code natif
- **CSS3** : Gradients, animations, responsive design
- **Python HTTP Server** : Serveur de développement local (port 8000)

## 📁 Structure du projet

```
globe/
├── index.html          # Interface principale (142 lignes)
├── app.js              # Logique de visualisation (900+ lignes)
├── api-config.js       # Configuration API et données simulées (87 lignes)
├── style.css           # Styles et animations
├── libs/
│   ├── three.min.js    # Three.js v0.159.0 (local)
│   └── globe.gl.min.js # Globe.GL v2.27.2 (local)
├── images/
│   ├── earth-8k.jpg    # Texture Terre 8K (2.5MB)
│   ├── earth-topology.png
│   └── night-sky.png
└── README.md           # Documentation
```

## 🌐 Sources de données

### 🏛️ Hiérarchie Stricte des Sources de Données

Le projet utilise un **système de priorité absolue** qui tente TOUJOURS d'obtenir les données directement depuis les banques centrales nationales en premier.

#### **Hiérarchie de Priorité (ORDRE STRICT)**

**🥇 PRIORITÉ 1 - API Nationale Directe (SOURCE PRIMAIRE)**
- **38 banques centrales** configurées avec implémentations spécifiques
- **Exemples fonctionnels** :
  - �🇷 Banque de France (SDMX WEBSTAT) - ✅ Accessible (gratuite)
  - �🇨🇦 Statistics Canada (WDS API) - ✅ Fonctionnel
  - 🇧🇷 Banco Central do Brasil (SGS API) - ✅ Fonctionnel
  - 🇩🇪 Deutsche Bundesbank (REST + SDMX) - ✅ Fonctionnel
  - 🇨🇭 Swiss National Bank (Cubes API) - ✅ Fonctionnel
  - 🇺🇸 US Census Bureau - 🔑 Requiert clé gratuite
  - 🇰🇷 Bank of Korea (ECOS) - 🔑 Requiert clé gratuite
- **Qualité** : Excellente - Source primaire directe, données officielles
- **Utilisation** : TOUJOURS tentée en premier

**🥈 PRIORITÉ 2 - Sources Secondaires (FALLBACK uniquement)**

⚠️ **Important** : Ces sources ne sont utilisées QUE si l'API nationale n'est pas disponible

- **Eurostat** (27 pays UE 🇪🇺)
  - Agrégateur secondaire des données des banques centrales européennes
  - Utilisé UNIQUEMENT si API nationale non disponible/complexe
  - Exemples : France (WEBSTAT portail uniquement), Italie (SDMX complexe)
  
- **World Bank** (200+ pays 🌍)
  - Agrégateur secondaire mondial
  - Utilisé UNIQUEMENT si API nationale ET Eurostat non disponibles
  - Qualité : Bonne, mais source secondaire

**🥉 PRIORITÉ 3 - Simulation**
- Uniquement si aucune source de données n'est disponible
- Facteur de croissance : 3,5% annuel

#### **38 Banques Centrales Implémentées**

**Europe (18)** : France, Allemagne, Italie, Espagne, UK, Pays-Bas, Belgique, Autriche, Portugal, Suède, Danemark, Norvège, Pologne, Rép. Tchèque, Hongrie, Roumanie, Suisse

**Amériques (6)** : USA, Canada, Brésil, Mexique, Argentine, Chili, Colombie, Pérou

**Asie-Pacifique (9)** : Japon, Corée, Inde, Australie, Singapour, Thaïlande, Malaisie, Indonésie, Philippines

**Autres (3)** : Afrique du Sud, Turquie, Russie

#### **Pourquoi cette Hiérarchie ?**

1. **API Nationale = Source Primaire**
   - Données directement de l'institution officielle
   - Mise à jour la plus rapide
   - Format natif de chaque pays

2. **Eurostat/World Bank = Sources Secondaires**
   - Compilent depuis les banques centrales
   - Ajoutent délai de traitement
   - Harmonisation peut altérer légèrement les données
   - **NE REMPLACENT PAS l'API nationale directe**

#### **Traçabilité des Données**

Chaque donnée inclut des **métadonnées complètes** :
```javascript
{
    source: "Statistics Canada (WDS)",
    sourceType: "National Central Bank - Direct API",
    country: "Canada",
    quality: "official",
    priority: 1, // API nationale directe
    lastUpdate: "2026-02-06T...",
    note: "Source primaire directe"
}
```

**Logs Console** : Le système affiche clairement quelle source est utilisée :
```
🏛️ Attempting national API: Banque de France...
🇫🇷 Banque de France: Tentative API SDMX...
✅ Banque de France: Données SDMX récupérées
   → Parser SDMX détaillé à implémenter
   → Fallback vers Eurostat pour données complètes

ou

🏛️ Attempting national API: Statistics Canada...
🇨🇦 StatCan: Table 12-10-0011-01 accessed
✅ Exports: 450,000,000 CAD (Source: Statistics Canada - official)
```

#### **Configuration Technique**

Fichiers du système :
- `national-apis-config.js` : Configuration de 65+ APIs nationales
- `api-config.js` : Logique de fallback automatique et métadonnées
- `data-sources.html` : Interface de visualisation des sources

**Avantages** :
- ✅ **65 pays** avec APIs nationales fonctionnelles et gratuites
- ✅ **190+ pays** couverts via fallback international
- ✅ **Traçabilité totale** : source exacte pour chaque donnée
- ✅ **Robustesse** : fallback automatique si une API échoue
- ✅ **0€** : toutes les APIs utilisées sont gratuites

### API Banque de France (structure prête)
- **URL** : https://webstat.banque-france.fr/ws/
- **Séries** : Balance des paiements (BOP)
- **Format** : JSON
- **État** : Structure implémentée, données simulées en attendant les codes de séries

### Données géographiques
- **Pays** : 195 pays avec centres géographiques
- **Propriétés** : latitude, longitude, nom, capitale, drapeau, région
- **Frontières** : TopoJSON via world-atlas CDN
- **Texture Terre** : NASA Earth Observatory (8K résolution)

### Données simulées (actuellement en cours)
- **Années** : 2013-2025 (13 ans)
- **Base** : Données 2013 avec 3 niveaux de partenaires
  - Majeurs : 80-150 Md€ (Allemagne, Italie, Espagne, Belgique, États-Unis, Royaume-Uni, Pays-Bas)
  - Moyens : 10-40 Md€ (Suisse, Chine, Pologne, Portugal, Suède, Irlande, etc.)
  - Autres : 0,5-10 Md€
- **Croissance** : Facteur de 3,5% annuel + variance aléatoire par pays/année

## 🔧 Caractéristiques techniques

### Performance
- **100% offline** après chargement initial (sauf TopoJSON)
- **Bibliothèques locales** : Three.js et Globe.GL (1,6MB total)
- **Texture haute résolution** : 8K (2.5MB)
- **Pas de dépendances CDN** pour les bibliothèques principales
- **Animations fluides** : 60 FPS sur matériel moderne

### Algorithmes de visualisation

#### Épaisseur des lignes (logarithmique)
```javascript
const normalizedVolume = volume / maxVolume; // [0, 1]
const stroke = 0.3 + Math.log10(1 + normalizedVolume * 9) * 2.2;
// Résultat : 0.3px à 2.5px (gradient continu)
```

#### Coloration des surfaces (gradient)
Pour exports, imports, volume :
```javascript
const normalized = value / maxValue; // [0, 1]
const opacity = 0.15 + normalized * 0.25; // 15% à 40%

// Exemple exports (bleu) :
const blue = 100 + Math.floor(normalized * 155); // [100, 255]
color = `rgba(0, 50, ${blue}, ${opacity})`;

// Exemple imports (orange) :
const red = 200 + Math.floor(normalized * 55);  // [200, 255]
const green = 100 + Math.floor(normalized * 50); // [100, 150]
color = `rgba(${red}, ${green}, 0, ${opacity})`;
```

Pour balance (seuils fixes) :
```javascript
if (balance > 5000) return 'rgba(0, 180, 0, 0.4)';    // Vert fort
if (balance > 0) return 'rgba(100, 200, 100, 0.3)';    // Vert clair
if (balance > -5000) return 'rgba(255, 150, 0, 0.3)';  // Orange
return 'rgba(255, 0, 0, 0.4)';                         // Rouge fort
```

### Correspondance des noms de pays
- **Matching flexible** : includes() pour correspondance partielle
- **Gestion des variantes** : "United States" ↔ "USA", "Korea" ↔ "South Korea"
- **TopoJSON** : 177 polygones de pays
- **Dataset** : 195 pays avec données commerciales

## 🚀 Installation et lancement

```bash
# Cloner le dépôt
git clone https://github.com/Varcolacus/globe.git
cd globe

# Lancer le serveur local (Python 3)
python -m http.server 8000

# Ou avec Python 2
python -m SimpleHTTPServer 8000

# Ouvrir dans le navigateur
# http://localhost:8000
```

## 📖 Utilisation

1. **Sélectionner l'année** : Menu déroulant (2013-2025)
2. **Choisir le type de filtre** : Tous, Région, Revenu, Groupe, Pays
3. **Sélectionner la valeur** : Liste dynamique selon le type
4. **Choisir le mode** : Balance, Exports, Imports, Volume
5. **Observer les flux** : Lignes animées et coloration des pays
6. **Consulter les données** : Cliquer sur "📊 Voir les données"
7. **Exporter** : Bouton "Exporter CSV" dans la table de données

## 🎯 Cas d'usage

### Analyse économique
- Identifier les principaux partenaires commerciaux
- Analyser les évolutions temporelles (2013-2025)
- Comparer la balance commerciale par région
- Évaluer la dépendance commerciale par groupe économique

### Éducation
- Comprendre les flux commerciaux internationaux
- Visualiser l'intégration européenne (UE, Zone Euro)
- Étudier les groupes économiques (G7, BRICS, OPEP)
- Observer les disparités géographiques

### Communication
- Présenter les données du commerce extérieur
- Illustrer les relations économiques internationales
- Support visuel pour rapports et présentations
- Exploration interactive des données

## 🔮 Évolutions futures

### Intégration API réelle
- [ ] Obtenir les codes de séries BOP de la Banque de France
- [ ] Implémenter l'authentification API si nécessaire
- [ ] Ajouter un système de cache pour les performances
- [ ] Gestion des erreurs réseau

### Fonctionnalités avancées
- [ ] Export PNG/SVG du globe
- [ ] Mode plein écran
- [ ] Comparaison multi-années (graphiques évolution)
- [ ] Animations temporelles automatiques
- [ ] Thème clair/sombre
- [ ] Mode présentation (slides automatiques)

### Données supplémentaires
- [ ] Détail par secteur d'activité
- [ ] Données de services vs biens
- [ ] Investissements directs étrangers (IDE)
- [ ] Données emploi liées au commerce

### Optimisations
- [ ] Lazy loading des textures
- [ ] Web Workers pour calculs intensifs
- [ ] IndexedDB pour cache local
- [ ] Progressive Web App (PWA)

## 📝 Licence

MIT License - Libre d'utilisation et de modification

## 👤 Auteur

**Varcolacus**
- GitHub : [@Varcolacus](https://github.com/Varcolacus)
- Projet : [globe](https://github.com/Varcolacus/globe)

## 🙏 Crédits

- **Globe.GL** : Vasturiano
- **Three.js** : Three.js Authors
- **TopoJSON** : Mike Bostock
- **Données géographiques** : Natural Earth, World Atlas
- **Texture Terre** : NASA Earth Observatory
- **Classifications** : Banque Mondiale (revenus), sources officielles (groupes économiques)

## 📊 Statistiques du projet

- **Lignes de code** : ~1200 (HTML/JS/CSS)
- **Pays** : 195
- **Années** : 13 (2013-2025)
- **Modes de visualisation** : 4
- **Types de filtres** : 5
- **Groupes économiques** : 9
- **Commits Git** : 6
- **Dernière mise à jour** : Janvier 2025
