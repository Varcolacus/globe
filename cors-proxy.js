/**
 * Proxy CORS simple pour développement
 * Permet d'accéder aux APIs externes (UN Comtrade, Eurostat, etc.)
 * À remplacer par un vrai backend en production
 */

const http = require('http');
const https = require('https');
const url = require('url');

const PORT = 3001;

// Liste blanche des APIs autorisées
const ALLOWED_APIS = [
    'comtradeapi.un.org',
    'ec.europa.eu',
    'api.worldbank.org',
    'www.vesselfinder.com'
];

const server = http.createServer((req, res) => {
    // Headers CORS permissifs pour développement
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Répondre aux requêtes OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Extraire l'URL cible depuis le paramètre 'url'
    const queryParams = url.parse(req.url, true).query;
    const targetUrl = queryParams.url;

    if (!targetUrl) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            error: 'Paramètre "url" manquant',
            usage: `http://localhost:${PORT}/?url=https://comtradeapi.un.org/...`
        }));
        return;
    }

    // Vérifier que l'URL cible est dans la liste blanche
    let parsedTarget;
    try {
        parsedTarget = url.parse(targetUrl);
    } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'URL invalide' }));
        return;
    }

    const isAllowed = ALLOWED_APIS.some(domain => parsedTarget.hostname === domain);
    if (!isAllowed) {
        res.writeHead(403, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            error: 'Domaine non autorisé',
            allowed: ALLOWED_APIS 
        }));
        return;
    }

    console.log(`📡 Proxying: ${targetUrl}`);

    // Transmettre la requête
    const protocol = parsedTarget.protocol === 'https:' ? https : http;
    const proxyReq = protocol.request(targetUrl, {
        method: req.method,
        headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; TradeVisualization/1.0)',
            'Accept': 'application/json'
        }
    }, (proxyRes) => {
        // Transmettre les headers de la réponse
        res.writeHead(proxyRes.statusCode, {
            'Content-Type': proxyRes.headers['content-type'] || 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        // Transmettre le corps de la réponse
        proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
        console.error(`❌ Erreur proxy: ${err.message}`);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            error: 'Erreur lors de la requête',
            message: err.message 
        }));
    });

    proxyReq.end();
});

server.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║  🌐 Proxy CORS démarré sur http://localhost:${PORT}       ║
╚════════════════════════════════════════════════════════════╝

Usage:
  http://localhost:${PORT}/?url=https://comtradeapi.un.org/data/v1/...

APIs autorisées:
  ${ALLOWED_APIS.map(api => `✓ ${api}`).join('\n  ')}

Pour arrêter: Ctrl+C
`);
});

// Gestion propre de l'arrêt
process.on('SIGTERM', () => {
    console.log('\n👋 Arrêt du proxy CORS...');
    server.close(() => {
        console.log('Proxy fermé.');
        process.exit(0);
    });
});
