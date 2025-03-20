L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVjYWJhYmljIiwiYSI6ImNtOGdwbThheTBxdXoya29pNDN3OXlieDQifQ.ew-B8PnixTLJ-Qzd-83Ddw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);
L.geoJson(tamu).addTo(map);
function getColor(d) {
    return '#800000';
}
function style(feature) {
    return {
        fillColor: getColor(feature),
        weight: 2,
        opacity: 1,
        color: 'maroon',
        dashArray: '0',
        fillOpacity: 0.7
    };
}

L.geoJson(tamu, {style: style}).addTo(map);
function highlightFeature(e) {{
    var layer = e.target;
    info.update(layer.feature.properties);
}
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}
function resetHighlight(e) {{
    
    info.update();
}
    geojson.resetStyle(e.target);
}
var geojson;
// ... our listeners
geojson = L.geoJson();
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(tamu, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>Texas A&M University</h4>' +  (props ?
        '<b>' + props.BldgAbbr + '</b><br />' + props.BldgName
        : 'Hover over a building');
};

info.addTo(map);