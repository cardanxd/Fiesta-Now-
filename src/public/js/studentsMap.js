var map = L.map('map-template').setView([51.505, -0.09], 13);
let position = {
    latlng: {
        lat: 20.969547121724773,
        lng: -89.5855236053467
    }
}

//personal markers 
var marker = L.marker(position.latlng).addTo(map)
    .bindPopup("<b>Estas aquí</b><br />").openPopup();

var diametro = L.circle(position.latlng, 3500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1
}).addTo(map);

var layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function addMarker(ubication) {
    const coords = [ubication.latlng.lat, ubication.latlng.lng];
    marker.remove();
    diametro.remove();

    marker = L.marker(coords).addTo(map)
        .bindPopup("<b>Estas aquí</b><br />").openPopup();
    diametro = L.circle(coords, 3500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.1
    }).addTo(map);

    map.addLayer(marker);
    map.panTo(coords);
}

map.panTo(position.latlng);
//map.addLayer(popup);

function createAcademyMarker(coords, name) {
    const markerAcademy = L.marker(coords).bindPopup(name);
    map.addLayer(markerAcademy);
}


document.getElementById('ubicate').addEventListener('click', () => {
    map.locate({ enableHighAccuracy: true });
    map.on('locationfound', e => {
        addMarker(e);
        setCoords(e.latlng.lat, e.latlng.lng);
    })
});