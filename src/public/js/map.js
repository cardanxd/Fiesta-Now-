var map = L.map('map-template').setView([51.505, -0.09], 13);
var marker = L.marker([1000, 1000]);

var layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

function openMap() {
    map.remove();
    layer.remove();
    
    //obtener las cordenadas de la vista
    let lat = document.getElementById('lat').value.trim()
    let lng = document.getElementById('lng').value.trim()

    let position = {
        latlng :{
            lat : (lat === ""  ? 51.505 : parseFloat(lat)),
            lng : (lng === "" ? -0.09 : parseFloat(lng) )
        }
    }
    
    //reiniciar el mapa
    map = L.map('map-template').setView([51.505, -0.09], 13);
    layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
    addMarker(position);

    map.on('click', (e) => {
        addMarker(e);
        setCoords(e.latlng.lat,e.latlng.lng);
    })
}

function addMarker(ubication) {
    const coords = [ubication.latlng.lat, ubication.latlng.lng];
    marker.remove();
    marker = L.marker(coords);
    map.addLayer(marker);
    map.panTo(coords);
}


document.getElementById('ubicate').addEventListener('click', () => {
    map.locate({ enableHighAccuracy: true });
    map.on('locationfound', e => {
        addMarker(e);
        setCoords(e.latlng.lat,e.latlng.lng);
    });
})




