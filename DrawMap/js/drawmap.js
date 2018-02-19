//mapbox, this has to be global or else the map would not get redrawn
var mymap = new L.map('mapid').setView([36.995698, -122.059135], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/deward/cjctqjzpn1bns2so0l1liwkpq/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    minZoom: 15,
    accessToken: 'pk.eyJ1IjoiZGV3YXJkIiwiYSI6ImNqY3NoanlzaDBlcnAycXFxYTFhdGl2dm4ifQ.I-o2qW918K0PzZ6W1nqWxQ'
}).addTo(mymap);

//Can't figure out how to make these not global
var startmarkers, endmarkers, polyline;

function drawMap(searchArray){
    clearMap();
    latlng = [];
    paths = searchArray;

    for(path = 0; path < searchArray.length; path++){
        var lat = nodes[searchArray[path]].lat;
        var lng = nodes[searchArray[path]].lng;
        var name = nodes[searchArray[path]].name;
        
        //as you can see I can call node[#].attributes
        if(path === 0 ){
            startmarkers = L.marker([lat,lng]).addTo(mymap);
            startmarkers.bindPopup(name).openPopup();
        }
        if(path === searchArray.length-1){
            endmarkers = L.marker([lat, lng]).addTo(mymap);
            endmarkers.bindPopup(name).openPopup();
        }
        latlng.push([lat,lng]);
    }
    
    polyline = L.polyline(latlng);
    mymap.fitBounds(polyline.getBounds(), {padding: [50,50]});
    mymap.addLayer(polyline);
    
    //for gathering data
}


function drawInfoGather(){
    //for gathering data
    var popup = L.popup();
    function onMapClick(e) {
        popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(mymap);
	}
    for(i=0; i < nodes.length; i++){
        path.pop(curr);
    }
    mymap.on('click', onMapClick);
}

function clearMap(){
    if (startmarkers != undefined){
        mymap.removeLayer(startmarkers);
    }
    if (endmarkers != undefined){
        mymap.removeLayer(endmarkers);
    }
    if(polyline != undefined){
        mymap.removeLayer(polyline);
    }
}


