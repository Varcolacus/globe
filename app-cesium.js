// Configuration de Cesium pour utiliser l'imagerie satellite Bing Maps
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzYiLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

// Données des villes principales
const cities = [
    { lat: 48.8566, lng: 2.3522, name: 'Paris', country: 'France', population: '2.2M' },
    { lat: 51.5074, lng: -0.1278, name: 'Londres', country: 'Royaume-Uni', population: '9M' },
    { lat: 40.7128, lng: -74.0060, name: 'New York', country: 'États-Unis', population: '8.3M' },
    { lat: 35.6762, lng: 139.6503, name: 'Tokyo', country: 'Japon', population: '14M' },
    { lat: -33.8688, lng: 151.2093, name: 'Sydney', country: 'Australie', population: '5.3M' },
    { lat: 55.7558, lng: 37.6173, name: 'Moscou', country: 'Russie', population: '12M' },
    { lat: 39.9042, lng: 116.4074, name: 'Pékin', country: 'Chine', population: '21M' },
    { lat: 19.4326, lng: -99.1332, name: 'Mexico', country: 'Mexique', population: '9M' },
    { lat: -23.5505, lng: -46.6333, name: 'São Paulo', country: 'Brésil', population: '12M' },
    { lat: 30.0444, lng: 31.2357, name: 'Le Caire', country: 'Égypte', population: '10M' },
    { lat: 28.6139, lng: 77.2090, name: 'New Delhi', country: 'Inde', population: '11M' },
    { lat: 1.3521, lng: 103.8198, name: 'Singapour', country: 'Singapour', population: '5.7M' },
    { lat: 25.2048, lng: 55.2708, name: 'Dubaï', country: 'Émirats', population: '3.4M' },
    { lat: -1.2921, lng: 36.8219, name: 'Nairobi', country: 'Kenya', population: '4.4M' },
    { lat: -34.6037, lng: -58.3816, name: 'Buenos Aires', country: 'Argentine', population: '3M' }
];

// Initialiser le viewer Cesium
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
    imageryProvider: new Cesium.IonImageryProvider({ assetId: 2 }),
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    vrButton: false,
    scene3DOnly: true,
    requestRenderMode: false,
    maximumRenderTimeChange: Infinity
});

// Activer l'éclairage basé sur le soleil
viewer.scene.globe.enableLighting = true;

// Améliorer la qualité visuelle
viewer.scene.globe.maximumScreenSpaceError = 1.5;
viewer.scene.fxaa = true;

// Ajouter les marqueurs des villes
cities.forEach(city => {
    // Ajouter un point
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(city.lng, city.lat),
        point: {
            pixelSize: 12,
            color: Cesium.Color.fromCssColorString('#ff6b6b'),
            outlineColor: Cesium.Color.WHITE,
            outlineWidth: 2,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
        },
        label: {
            text: city.name,
            font: '14px sans-serif',
            fillColor: Cesium.Color.WHITE,
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new Cesium.Cartesian2(0, -15),
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            disableDepthTestDistance: Number.POSITIVE_INFINITY
        },
        description: `
            <div style="padding: 10px; font-family: sans-serif;">
                <h3 style="color: #667eea; margin: 0 0 10px 0;">${city.name}</h3>
                <p style="margin: 5px 0;"><strong>Pays:</strong> ${city.country}</p>
                <p style="margin: 5px 0;"><strong>Population:</strong> ${city.population}</p>
                <p style="margin: 5px 0;"><strong>Coordonnées:</strong> ${city.lat.toFixed(4)}°, ${city.lng.toFixed(4)}°</p>
            </div>
        `,
        city: city
    });
});

// Gestion des clics sur les entités
viewer.selectedEntityChanged.addEventListener((entity) => {
    if (entity && entity.city) {
        const city = entity.city;
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(city.lng, city.lat, 5000),
            duration: 2,
            orientation: {
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-45),
                roll: 0.0
            }
        });
    }
});

// Bouton de réinitialisation
document.getElementById('reset-view').addEventListener('click', () => {
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(0, 20, 20000000),
        duration: 2,
        orientation: {
            heading: 0,
            pitch: Cesium.Math.toRadians(-90),
            roll: 0
        }
    });
});

// Bouton pour afficher/masquer les labels
let labelsVisible = true;
document.getElementById('toggle-labels').addEventListener('click', () => {
    labelsVisible = !labelsVisible;
    viewer.entities.values.forEach(entity => {
        if (entity.label) {
            entity.label.show = labelsVisible;
        }
    });
});

// Vue initiale
viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(0, 20, 20000000),
    orientation: {
        heading: 0,
        pitch: Cesium.Math.toRadians(-90),
        roll: 0
    }
});

console.log('🌍 Globe Cesium 3D initialisé avec imagerie satellite HD');
console.log('🗺️ Tuiles dynamiques - détails infinis');
console.log('📍', cities.length, 'villes principales');
