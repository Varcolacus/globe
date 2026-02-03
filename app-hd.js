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

// Initialiser la carte avec vue globale
const map = L.map('map', {
    center: [20, 0],
    zoom: 3,
    minZoom: 2,
    maxZoom: 19,
    zoomControl: true,
    worldCopyJump: true
});

// Définir les différentes couches de tuiles
const layers = {
    satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri',
        maxZoom: 19
    }),
    streets: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }),
    topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap',
        maxZoom: 17
    }),
    dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO',
        maxZoom: 19
    })
};

// Ajouter la couche satellite par défaut
let currentLayer = layers.satellite;
currentLayer.addTo(map);

// Gestionnaire de changement de couche
document.getElementById('layer-select').addEventListener('change', (e) => {
    map.removeLayer(currentLayer);
    currentLayer = layers[e.target.value];
    currentLayer.addTo(map);
});

// Ajouter des marqueurs pour les villes
const cityIcon = L.divIcon({
    className: 'city-marker',
    html: '<div style="background: #ff6b6b; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.4);"></div>',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
});

cities.forEach(city => {
    const marker = L.marker([city.lat, city.lng], { icon: cityIcon }).addTo(map);
    
    marker.bindPopup(`
        <div class="city-popup">
            <h3>${city.name}</h3>
            <p>🌍 ${city.country}</p>
            <p>👥 ${city.population} habitants</p>
            <p>📍 ${city.lat.toFixed(4)}°, ${city.lng.toFixed(4)}°</p>
        </div>
    `);
    
    // Zoom sur la ville au clic
    marker.on('click', () => {
        map.flyTo([city.lat, city.lng], 12, {
            duration: 2
        });
    });
});

// Bouton de réinitialisation de la vue
document.getElementById('reset-view').addEventListener('click', () => {
    map.flyTo([20, 0], 3, {
        duration: 1.5
    });
});

// Bouton de géolocalisation
document.getElementById('find-me').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                
                map.flyTo([lat, lng], 13, {
                    duration: 2
                });
                
                L.marker([lat, lng])
                    .addTo(map)
                    .bindPopup(`
                        <div class="city-popup">
                            <h3>📍 Votre position</h3>
                            <p>Latitude: ${lat.toFixed(6)}°</p>
                            <p>Longitude: ${lng.toFixed(6)}°</p>
                        </div>
                    `)
                    .openPopup();
            },
            (error) => {
                alert('Impossible d\'obtenir votre position : ' + error.message);
            }
        );
    } else {
        alert('La géolocalisation n\'est pas supportée par votre navigateur');
    }
});

// Clic sur la carte pour afficher les coordonnées
map.on('click', (e) => {
    const lat = e.latlng.lat.toFixed(6);
    const lng = e.latlng.lng.toFixed(6);
    
    L.popup()
        .setLatLng(e.latlng)
        .setContent(`
            <div class="city-popup">
                <h3>📍 Coordonnées</h3>
                <p>Latitude: ${lat}°</p>
                <p>Longitude: ${lng}°</p>
            </div>
        `)
        .openOn(map);
});

// Animation des marqueurs au survol
const style = document.createElement('style');
style.textContent = `
    .city-marker:hover div {
        transform: scale(1.5);
        transition: transform 0.3s ease;
    }
    .city-marker div {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

console.log('🌍 Globe HD initialisé avec', cities.length, 'villes');
console.log('🗺️ Imagerie satellite haute résolution active');
console.log('🔍 Zoom maximum: niveau 19 (détails de rue)');
