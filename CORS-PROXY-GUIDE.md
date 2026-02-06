# 🌐 Utiliser les données officielles UN Comtrade

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
3. La checkbox "🌐 Utiliser données officielles (UN Comtrade)" doit être cochée
4. Sélectionner un pays et une année
5. Observer la console du navigateur :
   - ✅ "Real data from UN Comtrade" = données officielles récupérées
   - ⚠️ Messages d'erreur = fallback vers simulation

## 📊 Vérifier les données officielles

1. Cliquer sur "📊 Afficher Données"
2. Regarder la colonne "Source" dans le tableau
3. Les pays avec données officielles afficheront "UN Comtrade"
4. Les autres afficheront "Simulation"

## ⚙️ Configuration

Dans `api-config.js` :

```javascript
API_SMART_CONFIG.useCorsProxy = true;  // Activer le proxy
API_SMART_CONFIG.useRealAPIs = true;   // Tenter d'utiliser APIs réelles
```

Ou dans `app.js` via la checkbox UI :
```javascript
API_CONFIG.useRealAPIs = true;  // Contrôlé par la checkbox
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

## 📈 Limitations

- **Rate Limiting**: UN Comtrade limite à 100 requêtes/heure (gratuit)
- **Données manquantes**: Tous les pays ne reportent pas à UN Comtrade
- **Délai**: ~200ms entre requêtes (configurable dans api-config.js)
- **Année 2025**: Données partielles ou inexistantes (année future)

Pour plus de détails, consulter la [documentation UN Comtrade](https://comtradeapi.un.org/).
