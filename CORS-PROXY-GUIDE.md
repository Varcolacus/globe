# 🌐 Données officielles - Sources nationales et internationales

## ⚠️ MODE PRODUCTION : Données officielles uniquement

Cette application utilise **exclusivement des données officielles** provenant des instituts nationaux de statistiques.
**Aucune donnée simulée** n'est générée. Si les données ne sont pas disponibles pour un pays/année, la valeur sera 0.

### 📊 Hiérarchie des sources (par priorité)

1. **APIs Nationales** (via Eurostat pour pays EU) 🇪🇺
   - Données directes des instituts nationaux (INSEE, Destatis, ISTAT, etc.)
   - Mise à jour la plus récente
   - Détails les plus précis

2. **UN Comtrade** (couverture mondiale) 🌍
   - Base de données maintenue par l'ONU
   - **Source primaire : instituts nationaux de statistiques**
   - Collecte et harmonise les données de 170+ pays
   - Exemples de sources : INSEE (France), Destatis (Allemagne), Census Bureau (USA)
   - Données standardisées et comparables internationalement

3. **No data available** ⚪
   - Affiche 0 si aucune source n'a de données

> 💡 **Important** : UN Comtrade n'invente pas de données. C'est une agrégation officielle 
> des rapports commerciaux soumis par chaque pays à l'ONU. Les données proviennent 
> directement des douanes et instituts statistiques nationaux.

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
