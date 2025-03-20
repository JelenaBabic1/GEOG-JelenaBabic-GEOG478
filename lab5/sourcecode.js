var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiemFzdGF2byIsImEiOiJjbDBuMjBsZjAxNWRyM2Vydjhpd3R5ZHFnIn0.SVgUJnGAYZlbqBlauFg6-g'
}).addTo(map);
map.locate({ setView: true, maxZoom: 16 });
function onLocationFound(e) {
}

map.on('locationfound', onLocationFound);
function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);
var markerOandM = L.marker([30.617684, -96.336622]).addTo(map);
var markerAcademicBuilding = L.marker([30.615722, -96.340769]).addTo(map);
var circle = L.circle([30.609827, -96.340377], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 175
}).addTo(map);
markerOandM.bindPopup("<b>Eller Oceanography and Meteorology Building</b><br>").openPopup();
markerAcademicBuilding.bindPopup("Academic Building").openPopup();
circle.bindPopup("Kyle Field");
var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);