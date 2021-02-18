document.getElementById('open-map').addEventListener('click', () => {
    document.getElementById('map').style.display = "block";
    openMap();
})


document.getElementById('close').addEventListener('click', () => {
    document.getElementById('map').style.display = "none";
})

function setCoords(lat, lng) {
    document.getElementById('lat').value = lat;
    document.getElementById('lng').value = lng;
}