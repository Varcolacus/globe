# Session Notes - Globe 3D Commerce International

**Date:** 6 février 2026  
**Projet:** Visualisation 3D interactive des flux commerciaux internationaux sur un globe terrestre

---

## 🎯 État Actuel du Projet

### ✅ CE QUI FONCTIONNE

1. **Globe 3D interactif** (Globe.gl + Three.js)
   - 195 pays avec drapeaux et capitales
   - Rotation automatique (peut être mise en pause)
   - Navigation souris (zoom, rotation)
   - Textures HD (earth-8k.jpg, topologie, night-sky)

2. **Sélection dynamique de pays source**
   - Dropdown avec recherche en temps réel
   - Navigation clavier (↑↓ + Enter)
   - Point source devient bleu + plus gros
   - Chargement avec indicateur ⏳

3. **Visualisation des flux commerciaux**
   - Arcs animés entre pays (imports/exports/balance/volume)
   - Couleurs dynamiques selon type de données
   - Épaisseur proportionnelle au volume
   - Labels interactifs au survol

4. **Types de données visualisables**
   - Balance commerciale (vert = excédent, rouge = déficit)
   - Exportations (bleu, flux sortants)
   - Importations (orange, flux entrants)
   - Volume total (violet)

5. **Filtres avancés**
   - Par région géographique (World Bank classification)
   - Par niveau de revenu (High/Upper-middle/Lower-middle/Low)
   - Par groupe économique (UE, BRICS, G7, G20, OPEC, ASEAN, Mercosur, etc.)
   - Par pays individuel

6. **Export de données**
   - Modal détaillé avec tableaux triables
   - Export CSV complet avec métadonnées
   - Statistiques agrégées (totaux, moyennes)

7. **Proxy CORS** (port 3001)
   - Node.js CORS proxy fonctionnel
   - Whitelist: comtradeapi.un.org, ec.europa.eu, api.worldbank.org, vesselfinder.com
   - **IMPORTANT:** Doit être lancé avec `node cors-proxy.js`

---

## ⚠️ PROBLÈME ACTUEL

### API UN Comtrade EN PANNE (404 Error)

**Symptômes:**
- Endpoint `/data/v1/get/C/A/[year]/[reporter]/[partner]/total` retourne 404
- Testé avec années 2021, 2022, 2023, 2025 → Toutes en erreur
- Message: `{"statusCode": 404, "message": "Resource not found"}`

**Cause probable:**
- API format changé (peut-être migration vers v2)
- Nouveau format semble être `/public/v1/preview/C/A/HS` (observé fonctionnel)
- Documentation API possiblement obsolète

**Solution temporaire ACTIVE:**
- Fallback vers données **SIMULÉES** quand API retourne null
- Données réalistes basées sur importance commerciale:
  * Grands partenaires (Allemagne, USA, Chine): 40-110 Md€
  * Partenaires moyens (Pays-Bas, Suisse, Japon): 5-35 Md€
  * Petits partenaires: 0.25-8 Md€
- Métadonnées indiquent clairement: `"Simulated (API unavailable)"`
- Délai API réduit à 10ms pour chargement rapide (~2s)

**TODO URGENT:**
```javascript
// Fichier: api-config.js ligne ~614
// REMPLACER cet endpoint:
const apiUrl = `https://comtradeapi.un.org/data/v1/get/C/A/${year}/${sourceISO}/${partnerISO}/total`;

// PAR le nouveau format (à rechercher dans la doc UN Comtrade):
// Peut-être: https://comtradeapi.un.org/public/v1/...
// Ou: https://comtradeapi.un.org/api/get/...
```

---

## 🏗️ ARCHITECTURE TECHNIQUE

### Fichiers Principaux

```
/workspaces/globe/
├── index.html              # Page principale (162 lignes)
├── app.js                  # Logique principale (3150 lignes)
├── api-config.js           # Configuration APIs + fetch (1009 lignes)
├── national-apis-config.js # 65 APIs nationales configurées (690 lignes)
├── style.css               # Styles (211 lignes)
├── cors-proxy.js           # Serveur proxy CORS (120 lignes)
├── CORS-PROXY-GUIDE.md     # Documentation proxy + APIs (235 lignes)
└── package.json            # npm scripts
```

### Configuration des APIs (api-config.js)

**Hiérarchie des sources de données (priorité):**

1. **APIs Nationales** (si support bilatéral) - *Pas encore implémenté*
   - US Census Bureau ✅ (bilatéral confirmé)
   - Statistics Canada ✅ (bilatéral confirmé)  
   - Statistics Norway (SSB) ✅ (bilatéral confirmé)
   - Swiss Federal Customs ✅ (bilatéral confirmé)
   - **Méthode:** `tryNationalBilateralAPI()` (ligne 460)
   - **Status:** Infrastructure prête, parsing TODO

2. **Eurostat** (commerce intra-UE) - *Pas encore implémenté*
   - COMEXT database (données douanières UE)
   - 27 pays membres
   - **Status:** TODO

3. **UN Comtrade** (couverture mondiale) - *Actuellement en panne*
   - Agrégateur de données nationales (170+ pays)
   - Format standardisé
   - **Status:** ❌ 404 Error → Fallback simulation active

### Variables Globales Importantes

```javascript
// app.js
let currentSourceCountry = 'France';  // Pays source actuel
let currentYear = 2025;                // Année sélectionnée
let currentDataType = 'balance';       // balance|exports|imports|volume
let balanceData = [];                  // Données chargées
let currentFilterType = 'all';         // Type de filtre actif
let currentFilterValue = null;         // Valeur du filtre

// api-config.js
API_SMART_CONFIG = {
    useRealAPIs: true,
    useCorsProxy: true,
    corsProxyUrl: 'http://localhost:3001/?url=',
    rateLimitDelay: 10  // ms entre requêtes
}
```

### Flow de Chargement des Données

```
User sélectionne pays
    ↓
selectCountry(country)
    ↓
globe.arcsData([])              // Vide arcs immédiatement
    ↓
globe.pointsData(countries)     // Refresh points (bleu pour source)
    ↓
loadBalanceData(year)
    ↓
API_CONFIG.fetchBalancePaiements(year, country)
    ↓
API_SMART_CONFIG.fetchAllCountriesData(year, country)
    ↓
Pour chaque pays (195):
    ↓
    fetchBilateralTrade(source, partner, year)
        ↓
        tryNationalBilateralAPI()     // Retourne null (pas implémenté)
        ↓
        Essai Eurostat si EU-EU       // Pas implémenté
        ↓
        Essai UN Comtrade             // ❌ Retourne 404
        ↓
        Retourne null
    ↓
    Si null → Génère données SIMULÉES
    ↓
updateGlobeWithBalanceData(dataType)
    ↓
globe.arcsData(updatedArcs)     // Affiche nouveaux arcs
```

---

## 📋 PROBLÈMES RÉSOLUS CETTE SESSION

### 1. ✅ Suppression complète des données simulées (puis réactivées)
**Commits:** 7368a56, 368aa63
- Supprimé le toggle checkbox
- Supprimé l'indicateur "Données officielles"
- Mode "official data only"
- **MAIS:** Réactivé en fallback car API en panne (commit 3705951)

### 2. ✅ Clarification des sources de données
**Commit:** 98c09a4
- Documentation que UN Comtrade = agrégateur de données nationales
- Pas une source séparée, mais collecte les rapports nationaux
- Flow: Douanes nationales → Institut statistique → UN → App

### 3. ✅ Hiérarchie des APIs nationales implémentée
**Commit:** 97a64ec
- Méthode `tryNationalBilateralAPI()` créée
- 65 APIs nationales configurées dans `national-apis-config.js`
- **Découverte importante:** La plupart des APIs nationales ne fournissent QUE des agrégats totaux, PAS de données bilatérales (France ↔ Allemagne)
- Seules 4-5 APIs confirmées avec support bilatéral

### 4. ✅ Indicateurs de chargement ajoutés
**Commit:** 7c01fde
- Icône ⏳ dans le titre pendant chargement
- Logs de progression tous les 20 pays
- Délai API réduit: 200ms → 50ms → 10ms
- Chargement 4x plus rapide

### 5. ✅ Rafraîchissement visuel forcé du globe
**Commit:** bcdd8b5
- Ajout de `.pointsData(countries)` après changement de pays
- Vide `globe.arcsData([])` immédiatement
- Globe.gl ne recalcule pas automatiquement les accesseurs
- Feedback visuel instantané

### 6. ✅ Proxy CORS créé et configuré
**Commit:** 3e90af6
- Serveur Node.js sur port 3001
- Whitelist des domaines autorisés
- Résout restrictions CORS navigateur

---

## 🔨 TODOs PRIORITAIRES

### URGENT - Réparer l'API UN Comtrade

```bash
# 1. Rechercher nouveau format API UN Comtrade
# Documentation: https://comtradeapi.un.org/ (vérifier)
# Anciennes docs: https://comtrade.un.org/data/doc/api/

# 2. Tester nouveaux endpoints
curl "https://comtradeapi.un.org/public/v1/preview/C/A/HS" | jq '.'
curl "https://comtradeapi.un.org/api/get/..." # À déterminer

# 3. Mettre à jour api-config.js ligne 614
# Remplacer l'endpoint obsolète

# 4. Désactiver fallback simulation une fois API réparée
```

### HAUTE PRIORITÉ - Implémenter parsers nationaux

**US Census Bureau:**
```javascript
// api-config.js ligne ~480
if (sourceISO === 'US') {
    const API_KEY = 'YOUR_KEY_HERE'; // S'inscrire: https://api.census.gov/data/key_signup.html
    const url = `https://api.census.gov/data/timeseries/intltrade/imports/hs?` +
                `get=CTY_CODE,GEN_VAL_MO&YEAR=${year}&CTY_CODE=${partnerISO}&key=${API_KEY}`;
    // Parse réponse format Census
}
```

**Statistics Canada:**
```javascript
// api-config.js ligne ~486
if (sourceISO === 'CA') {
    const url = `https://www150.statcan.gc.ca/t1/wds/rest/getDataFromCubePidCoordAndLatestNPeriods`;
    // Table: 12-10-0011-01 (Merchandise trade)
    // Parse réponse format StatCan
}
```

**Statistics Norway (SSB):**
```javascript
if (sourceISO === 'NO') {
    const url = `https://data.ssb.no/api/v0/...`; // À confirmer
}
```

**Swiss Federal Customs:**
```javascript
if (sourceISO === 'CH') {
    const url = `https://www.gate.ezv.admin.ch/swissimpex/...`; // À confirmer
}
```

### MOYENNE PRIORITÉ - Eurostat COMEXT

```javascript
// api-config.js ligne ~603
// Implémenter pour commerce intra-UE (27 pays)
// Base de données: COMEXT (detailed trade data)
// Format: XML ou JSON-stat
```

### BASSE PRIORITÉ - Optimisations

1. **Cache des données**
   - LocalStorage ou IndexedDB
   - Éviter requêtes répétées pour même pays/année

2. **Requêtes parallèles**
   - Fetch plusieurs pays en même temps
   - Respecter rate limits

3. **WebWorker pour parsing**
   - Déplacer traitement hors thread principal
   - UI plus fluide pendant chargement

---

## 🚀 COMMENT UTILISER

### Démarrer l'application

```bash
cd /workspaces/globe

# Terminal 1: Proxy CORS (OBLIGATOIRE)
node cors-proxy.js
# Écoute sur http://localhost:3001

# Terminal 2: Serveur HTTP
python3 -m http.server 8000
# Ouvrir: http://localhost:8000
```

### Développement

```bash
# Vérifier syntaxe
node -c app.js
node -c api-config.js

# Voir logs
# Ouvrir DevTools (F12) → Console
# Logs de progression affichés pendant chargement

# Commits
git add -A
git commit -m "..."
git push origin main
```

### Tester changement de pays

1. Ouvrir http://localhost:8000
2. Attendre chargement initial (~2s avec simulation)
3. Cliquer sur le dropdown "Pays source"
4. Taper "Allemagne" ou "États-Unis"
5. Observer:
   - ⏳ Indicateur de chargement
   - Arcs disparaissent
   - Point source devient bleu
   - Nouveaux arcs apparaissent (~2s)
   - Console montre progression

---

## 📊 STATISTIQUES

- **Pays configurés:** 195
- **APIs nationales configurées:** 65
  - Premium (bilatéral confirmé): 4
  - Standard (à vérifier): 30+
  - Limited: 15+
- **Codes ISO mappés:** 195+
- **Groupes économiques:** 8 (UE, BRICS, G7, G20, OPEC, ASEAN, Mercosur, USMCA)
- **Lignes de code:**
  - app.js: ~3150
  - api-config.js: ~1009
  - national-apis-config.js: ~690
  - Total: ~5000+ lignes

---

## 🔗 RESSOURCES

### Documentation APIs

- **UN Comtrade:** https://comtradeapi.un.org/ (à vérifier, peut-être obsolète)
- **Eurostat:** https://ec.europa.eu/eurostat/web/main/data/database (COMEXT)
- **US Census Bureau:** https://www.census.gov/foreign-trade/data/
- **Statistics Canada:** https://www.statcan.gc.ca/en/developers
- **World Bank:** https://data.worldbank.org/

### Bibliothèques

- **Globe.gl:** https://github.com/vasturiano/globe.gl
- **Three.js:** https://threejs.org/
- **TopoJSON:** https://github.com/topojson/topojson

### Configuration nationale APIs

Voir `national-apis-config.js` pour la liste complète des 65 APIs avec:
- Institution name
- Base URL
- Authentication requirements
- Data quality rating
- Coverage details
- Documentation links

---

## 💡 NOTES IMPORTANTES

### Défi des Données Bilatérales

**CRITIQUE:** La plupart des APIs nationales (Banque de France, Bundesbank, Banca d'Italia, Bank of Japan, etc.) ne fournissent **QUE des agrégats totaux**:
- ✅ Imports totaux du pays
- ✅ Exports totaux du pays
- ✅ Breakdowns sectoriels
- ❌ **PAS de détails bilatéraux** (France ↔ Allemagne spécifiquement)

C'est pourquoi UN Comtrade est crucial: seule source avec **couverture bilatérale mondiale standardisée**.

### Metadata Tracking

Chaque donnée inclut:
```javascript
_metadata: {
    source: 'UN Comtrade' | 'Simulated' | ...,
    sourceType: 'Official' | 'Fallback' | ...,
    quality: 'official' | 'simulated' | 'unavailable',
    priority: 1-99,
    note: 'Description',
    lastUpdate: ISO timestamp
}
```

Visible dans modal détails et export CSV.

---

## 🎬 PROCHAINE SESSION

**Pour démarrer une nouvelle conversation GitHub Copilot:**

1. Référencez ce fichier:
   ```
   "Je travaille sur le projet globe (voir SESSION-NOTES.md pour contexte complet)"
   ```

2. Problèmes prioritaires à mentionner:
   - "L'API UN Comtrade retourne 404, besoin de trouver le nouveau format"
   - "Implémenter parsers pour US Census Bureau et Statistics Canada"
   - "Ajouter Eurostat COMEXT pour commerce intra-UE"

3. État actuel:
   - Application fonctionnelle avec données simulées
   - Proxy CORS opérationnel (port 3001)
   - Infrastructure hiérarchique prête
   - Besoin de connecter vraies APIs

---

**Dernière mise à jour:** 6 février 2026  
**Version:** 1.0  
**Status:** 🟡 Fonctionnel avec simulation (API réelle en panne)
