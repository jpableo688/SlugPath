//draws whole graph
function drawgraph() {
    var keymarkers;
    var newKey;
    var graph = nodes;
    for(key in graph){
        keymarkers = L.marker([graph[key].lat, graph[key].lng]).addTo(mymap);
        keymarkers.bindPopup(graph[key].id +" " + graph[key].type + "  " + graph[key].name ).openPopup();
        console.log(key);
        for(var toArr in graph[key].to){
            var latlng2 = [];
            latlng2.push([graph[key].lat, graph[key].lng]);
            newKey = graph[key].to[toArr];
            if(graph[newKey] == undefined){
                console.log("is not connected to");
                console.log(newKey)
            } else {
            latlng2.push([graph[newKey].lat, graph[newKey].lng]);
            }
            
            //used to find connected but missing keys
            //console.log(newKey);
            var polyline;
            //console.log(latlng2);
            polyline = L.polyline(latlng2);
            mymap.addLayer(polyline);
        }
    }
}