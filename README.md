# 🌍 Globe Interactif 3D

Une visualisation interactive de la Terre en 3D avec des villes principales et des connexions animées entre elles.

## ✨ Fonctionnalités

- **Globe 3D réaliste** avec textures de la Terre (jour/nuit)
- **15 villes majeures** du monde entier affichées comme points interactifs
- **Connexions animées** entre les villes sous forme d'arcs
- **Rotation automatique** avec possibilité de pause
- **Zoom et navigation** fluides (souris/molette)
- **Tooltips informatifs** au survol des villes
- **Design moderne** avec effets visuels et dégradés
- **Responsive** et optimisé pour tous les écrans

## 🚀 Démarrage rapide

### Option 1 : Ouvrir directement dans le navigateur
```bash
# Ouvrir le fichier HTML dans votre navigateur par défaut
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

### Option 2 : Utiliser un serveur local (recommandé)
```bash
# Avec Python 3
python3 -m http.server 8000

# Avec Node.js
npx http-server -p 8000

# Avec PHP
php -S localhost:8000
```

Puis ouvrez http://localhost:8000 dans votre navigateur.

## 🎮 Utilisation

### Contrôles interactifs
- **🖱️ Clic + Glisser** : Faire pivoter le globe
- **🔍 Molette** : Zoomer / Dézoomer
- **📍 Clic sur un point** : Zoomer sur une ville spécifique
- **⏸️ Bouton Pause** : Arrêter/reprendre la rotation automatique
- **🔄 Bouton Réinitialiser** : Revenir à la vue initiale

### Villes affichées
Le globe affiche 15 villes majeures :
- Paris, Londres, New York, Tokyo
- Sydney, Moscou, Pékin, Mexico
- São Paulo, Le Caire, New Delhi
- Singapour, Dubaï, Nairobi, Buenos Aires

## 🛠️ Technologies utilisées

- **[Three.js](https://threejs.org/)** - Bibliothèque 3D WebGL
- **[Globe.GL](https://globe.gl/)** - Visualisation de globe 3D
- **HTML5 / CSS3** - Structure et style
- **JavaScript ES6+** - Logique interactive

## 📁 Structure du projet

```
globe/
├── index.html      # Structure HTML principale
├── style.css       # Styles et animations
├── app.js          # Logique du globe et interactions
└── README.md       # Documentation
```

## 🎨 Personnalisation

### Ajouter des villes
Modifiez le tableau `cities` dans [app.js](app.js) :
```javascript
const cities = [
    { lat: 48.8566, lng: 2.3522, name: 'Paris', country: 'France', population: '2.2M' },
    // Ajoutez vos villes ici
];
```

### Ajouter des connexions
Modifiez le tableau `connections` dans [app.js](app.js) :
```javascript
const connections = [
    { from: 'Paris', to: 'New York' },
    // Ajoutez vos connexions ici
];
```

### Changer les couleurs
Modifiez les couleurs dans [style.css](style.css) ou les propriétés du globe dans [app.js](app.js).

## 🌐 Ressources externes

Les ressources suivantes sont chargées via CDN :
- Three.js (bibliothèque 3D)
- Globe.GL (composant globe)
- Textures de la Terre (images haute résolution)

**Note** : Une connexion internet est requise pour charger ces ressources.

## 📝 License

Projet libre d'utilisation et de modification.

## 🤝 Contribution

N'hésitez pas à améliorer ce projet :
- Ajouter plus de villes
- Créer des visualisations de données
- Améliorer les animations
- Optimiser les performances

---

Créé avec ❤️ en utilisant Three.js et Globe.GL