# 🌐 Données officielles - Sources nationales et internationales

## ⚠️ MODE PRODUCTION : Données officielles uniquement

Cette application utilise **exclusivement des données officielles** provenant des instituts nationaux de statistiques.
**Aucune donnée simulée** n'est générée. Si les données ne sont pas disponibles pour un pays/année, la valeur sera 0.

### 📊 Hiérarchie des sources (par priorité)

#### Hiérarchie réelle implémentée :

1. **APIs Nationales avec support bilateral** (PRIORITÉ 1) 🏛️
   - **US Census Bureau** (États-Unis) - Données bilatérales complètes
   - **Statistics Canada** (Canada) - Commerce par pays partenaire
   - **Statistics Norway** (Norvège) - Détails par pays
   - **Swiss Federal Customs** (Suisse) - Données douanières bilatérales
   - *Note* : Implémentation en cours - parsing spécifique pour chaque API

2. **Eurostat** (pour commerce intra-EU) 🇪🇺
   - Source : Instituts nationaux des 27 pays UE
   - Exemples : INSEE (France), Destatis (Allemagne), ISTAT (Italie)
   - Données standardisées au niveau européen
   - *Note* : Endpoint bilateral en cours d'implémentation

3. **UN Comtrade** (couverture mondiale) 🌍 **[ACTUELLEMENT UTILISÉ]**
   - **Source primaire** : Instituts nationaux de statistiques de 170+ pays
   - Collecte et harmonise les rapports soumis par chaque pays à l'ONU
   - Exemples de contributeurs : INSEE, Destatis, Census Bureau, Statistics Canada, etc.
   - **Avantage unique** : Seule source avec couverture bilatérale mondiale complète
   - Données standardisées et comparables internationalement

4. **No data available** ⚪
   - Affiche 0 si aucune source n'a de données

### 🔑 Pourquoi UN Comtrade est actuellement utilisé

**Le défi des données bilatérales :**

La plupart des APIs des **banques centrales et instituts nationaux** (Banque de France, Bundesbank, Banca d'Italia, Banco de España, Bank of Japan, etc.) ne fournissent que :
- ✅ Agrégats totaux (imports/exports totaux du pays)
- ✅ Données par secteur/produit
- ❌ **PAS de détail par pays partenaire** (France ↔ Allemagne spécifiquement)

**Seules quelques APIs nationales** proposent des données bilatérales :
- US Census Bureau ✅
- Statistics Canada ✅  
- Statistics Norway ✅
- Swiss Federal Customs ✅
- (UK ONS, ABS Australia - à vérifier)

**UN Comtrade résout ce problème** car :
- C'est un **agrégateur officiel** de l'ONU
- Chaque pays soumet ses **rapports douaniers complets** avec détails bilatéraux
- Les données sont **harmonisées** selon la classification HS (Harmonized System)
- Couverture mondiale de 170+ pays

### 📋 Flux réel des données

```
Douanes nationales (France customs, German Zoll, etc.)
    ↓
Institut national de statistiques (INSEE, Destatis, etc.)
    ↓
Rapport soumis à l'ONU avec détails bilatéraux
    ↓
UN Comtrade (agrégation et standardisation)
    ↓
Notre application
```

> 💡 **Important** : Les données UN Comtrade ne sont **PAS inventées** par l'ONU.  
> Ce sont les rapports officiels soumis par chaque pays. L'ONU agit comme 
> **plateforme centralisée d'accès** aux données nationales.

### 🚧 Statut d'implémentation des APIs nationales

**Ce qui est prêt :**
- ✅ Configuration de 65 APIs nationales dans [national-apis-config.js](national-apis-config.js)
- ✅ Méthode `tryNationalBilateralAPI()` créée
- ✅ Hiérarchie de fallback implémentée
- ✅ Support des principales APIs : US Census, Statistics Canada, SSB Norway, Swiss Customs

**Ce qui reste à faire :**
- 🔨 Parsing spécifique pour chaque format d'API nationale
- 🔨 Endpoint Eurostat bilateral (COMEXT database)
- 🔨 Authentification pour APIs nécessitant clés (US Census, etc.)

**Pourquoi UN Comtrade fonctionne en priorité :**
- Format standardisé unique pour tous les pays
- Endpoint bilateral simple et unifié
- Pas d'authentification requise (avec limites de taux)
- Implémentation immédiate sans code custom par pays

**Pour passer aux APIs nationales directes :**
Chaque API nécessite son propre parser :
```javascript
// Exemple US Census Bureau
if (sourceISO === 'US') {
    const url = `https://api.census.gov/data/timeseries/intltrade/imports/hs?` +
               `get=CTY_CODE,CTY_NAME,GEN_VAL_MO&YEAR=${year}&CTY_CODE=${partnerCode}&key=${API_KEY}`;
    // Parse format spécifique Census Bureau...
}

// Exemple Statistics Canada  
if (sourceISO === 'CA') {
    const url = `https://www150.statcan.gc.ca/t1/wds/rest/getDataFromCubePidCoordAndLatestNPeriods`;
    // Parse format spécifique StatCan...
}

// Etc. pour 65 APIs nationales...
```

> 📚 **Infrastructure complète disponible** : Toutes les URLs et configurations sont dans  
> [national-apis-config.js](national-apis-config.js) - prêt pour l'implémentation pays par pays.

## Problème CORS

Les navigateurs bloquent les requêtes directes vers l'API UN Comtrade à cause de la politique CORS (Cross-Origin Resource Sharing). Vous verrez des erreurs comme :
```
Access to fetch at 'https://comtradeapi.un.org/...' has been blocked by CORS policy
```

## ✅ Solution : Proxy CORS Local

### Option 1 : Démarrage automatique (recommandé)

```bash
# Installer les dépendances
npm install

# Démarrer HTTP server + Proxy CORS en même temps
npm run dev
```

### Option 2 : Démarrage manuel

**Terminal 1 - HTTP Server:**
```bash
python3 -m http.server 8000
```

**Terminal 2 - Proxy CORS:**
```bash
npm run proxy
```

Ou directement avec Node.js :
```bash
node cors-proxy.js
```

### Test du proxy

Ouvrir dans un navigateur :
```
http://localhost:3001/?url=https://comtradeapi.un.org/data/v1/get/C/A/2024/FR/DE/total
```

Vous devriez voir des données JSON sur le commerce France-Allemagne.

## 🎯 Utilisation dans l'application

1. Démarrer le proxy CORS (voir ci-dessus)
2. Ouvrir l'application : `http://localhost:8000/index.html`
3. L'application utilise **automatiquement** les sources officielles par priorité :
   - Eurostat (pour pays EU) → UN Comtrade → No data
4. Sélectionner un pays et une année
5. Observer la console du navigateur :
   - ✅ "Official data from UN Comtrade (National Sources)" = données nationales via UN Comtrade
   - ✅ "Official data from Eurostat (National Data)" = données nationales via Eurostat
   - ⚪ "No official data available" = aucune donnée disponible (affichera 0)

## 📊 Vérifier les données officielles

1. Cliquer sur "📊 Afficher Données"
2. Regarder la colonne "Source" dans le tableau
3. Les sources possibles :
   - `UN Comtrade (National Sources)` = Données des instituts nationaux via UN Comtrade
   - `Eurostat (National Data)` = Données des instituts nationaux européens via Eurostat
   - `No data available` = Aucune donnée officielle (valeur = 0)

> 💡 Dans tous les cas, les données proviennent des instituts nationaux de statistiques

## ⚙️ Configuration (pour développeurs)

Dans `api-config.js` :

```javascript
API_SMART_CONFIG.useCorsProxy = true;  // Activer le proxy CORS (requis)
API_SMART_CONFIG.useRealAPIs = true;   // Toujours true (pas de simulation)
```

L'application est configurée en **mode production** :
- ✅ Données officielles uniquement (UN Comtrade API)
- ❌ Aucune donnée simulée
- ⚪ Valeur = 0 si données non disponibles
```

## 🚀 Production

Pour un déploiement production, remplacer le proxy local par :

1. **Backend Node.js/Express** avec routes API
2. **Serverless Functions** (Vercel, Netlify, AWS Lambda)
3. **API Gateway** avec cache
4. **Service CORS proxy** hébergé (nécessite clé API Comtrade)

Exemple avec Express :
```javascript
app.get('/api/comtrade/*', async (req, res) => {
    const comtradeUrl = 'https://comtradeapi.un.org' + req.params[0];
    const response = await fetch(comtradeUrl);
    const data = await response.json();
    res.json(data);
});
```

## 🔒 Sécurité

Le proxy local inclut une liste blanche de domaines autorisés :
- `comtradeapi.un.org` (UN Comtrade)
- `ec.europa.eu` (Eurostat)
- `api.worldbank.org` (World Bank)
- `www.vesselfinder.com` (Données navires)

Seuls ces domaines peuvent être appelés via le proxy.

## 🐛 Dépannage

### Erreur "Cannot GET /"
Le proxy attend un paramètre `?url=...` :
```
http://localhost:3001/?url=https://comtradeapi.un.org/...
```

### Erreur "EADDRINUSE"
Le port 3001 est déjà utilisé. Changer le port dans `cors-proxy.js` :
```javascript
const PORT = 3002; // Ou un autre port disponible
```

Puis mettre à jour `api-config.js` :
```javascript
corsProxyUrl: 'http://localhost:3002/?url=',
```

### Les données sont toujours simulées
1. Vérifier que le proxy est démarré (voir terminal)
2. Vérifier la checkbox "Utiliser données officielles"
3. Regarder la console du navigateur pour les erreurs
4. Tester le proxy directement dans le navigateur

### "Domaine non autorisé"
Ajouter le domaine à la liste blanche dans `cors-proxy.js` :
```javascript
const ALLOWED_APIS = [
    'comtradeapi.un.org',
    'votreapi.com'  // Ajouter ici
];
```

## 📈 Limitations et notes importantes

### Sources des données
- **UN Comtrade** : Base de données de l'ONU qui compile les rapports commerciaux soumis par les instituts nationaux de statistiques de chaque pays (ex: INSEE pour la France, Destatis pour l'Allemagne, Census Bureau pour les USA, etc.)
- Les données sont collectées auprès des douanes et offices statistiques nationaux
- UN Comtrade standardise et harmonise ces données pour la comparabilité internationale

### Limitations techniques
- **Rate Limiting**: UN Comtrade limite à 100 requêtes/heure (compte gratuit)
- **Données manquantes**: Certains pays ne soumettent pas leurs rapports à temps ou complètement
- **Délai**: ~200ms entre requêtes (configurable dans api-config.js)
- **Année 2025**: Données partielles ou inexistantes (année future, pas encore reportée)

Pour plus de détails, consulter la [documentation UN Comtrade](https://comtradeapi.un.org/).
