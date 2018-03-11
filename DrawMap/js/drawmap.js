//mapbox, this has to be global or else the map would not get redrawn
var mymap = new L.map('mapid').setView([36.995698, -122.059135], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/deward/cjctqjzpn1bns2so0l1liwkpq/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    minZoom: 15,
    accessToken: 'pk.eyJ1IjoiZGV3YXJkIiwiYSI6ImNqY3NoanlzaDBlcnAycXFxYTFhdGl2dm4ifQ.I-o2qW918K0PzZ6W1nqWxQ'
}).addTo(mymap);

mymap.removeControl(mymap.zoomControl);
//Can't figure out how to make these not global
var startmarkers = [];
var endmarkers = [];
var polylines = [];

function drawMap(searchArray){
    var latlng = [];
    paths = searchArray;
    //calculateDist(paths);
    for(path = 0; path < searchArray.length; path++){
        var lat = nodes[searchArray[path]].lat;
        var lng = nodes[searchArray[path]].lng;
        var name = nodes[searchArray[path]].name;
        
        //if it's the start and end nodes, have a pop up.
        if(path === 0 ){
            startmarker = L.marker([lat,lng]).addTo(mymap);
            startmarker.bindPopup(name).openPopup();
            startmarkers.push(startmarker);
        }
        if(path === searchArray.length-1){
            endmarker = L.marker([lat, lng]).addTo(mymap);
            endmarker.bindPopup(name).openPopup();
            endmarkers.push(endmarker);
        }
        
        latlng.push([lat,lng]);
    }
    
    //console.log("drawing path: " + paths);
    polyline = L.polyline(latlng);
    polylines.push(polyline);
    if(paths.length > 0){
        mymap.fitBounds(polyline.getBounds(), {padding: [50,50]});
    }
    mymap.addLayer(polyline);
    //console.log("I'm done");
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
    for(var s in startmarkers){
        if (startmarkers[s] != undefined){
            mymap.removeLayer(startmarkers[s]);
        }
    }
    
    for(var e in endmarkers)    {
        if (endmarkers[e] != undefined){
            mymap.removeLayer(endmarkers[e]);
        }
    }
    for(var p in polylines){
        if(polylines[p] != undefined){
            mymap.removeLayer(polylines[p]);
        }
    }
}


