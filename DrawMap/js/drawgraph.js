//draws whole graph
function drawgraph() {
    var keymarkers;
    var newKey;
    var graph = nodes;
    for(key in graph){
        //keymarkers = L.marker([graph[key].lat, graph[key].lng]).addTo(mymap);
        //keymarkers.bindPopup(graph[key].id +" " + graph[key].type + "  " + graph[key].name ).openPopup();
        console.log("{");
        //console.log(graph[key]);
        for(var toArr in graph[key].to){
            var latlng2 = [];
            latlng2.push([graph[key].lat, graph[key].lng]);
            newKey = graph[key].to[toArr];
            
            idk = graph[newKey].to;

            //makes sure doesn't have an error if newKey doesn't exist
            if(graph[newKey] == undefined){
                console.log(key);
                console.log("is not connected to");
                console.log(newKey);
            } else {
                latlng2.push([graph[newKey].lat, graph[newKey].lng]);
                
                var strong = false;
                for(var again in idk){
                    if(idk[again] == key){
                        strong = true;
                    }
                }
                if(strong == false){
                    console.log(key);
                    console.log("weak");
                    console.log(newKey);
                } else {
                    console.log(key);
                    console.log("strong");
                    console.log(newKey);
                }
            }

            //used to find connected but missing keys
            //console.log(newKey);
            var polyline;
            //console.log(latlng2);
            polyline = L.polyline(latlng2);
            mymap.addLayer(polyline);
        }
        console.log("}");
    }
}