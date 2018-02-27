//draws whole graph
function drawgraph() {
    var keymarkers;
    var newKey;
    var graph = nodes;
    for(key in graph){
        keymarkers = L.marker([graph[key].lat, graph[key].lng]).addTo(mymap);
        keymarkers.bindPopup(graph[key].id +" " + graph[key].type + "  " + graph[key].name ).openPopup();
        console.log("{");
        if(key != graph[key].id){
            console.log("key != id");
        }
        var count = 0;
        var tempkey = null;
        for(tempkey2 in graph[key].to){
            count = 0;
            for(tempkey3 in graph[key].to){
                if(graph[key].to[tempkey2] == graph[key].to[tempkey3]){
                    count++;
                }                
            }
            if(count > 1){
                tempkey = graph[key].to[tempkey2];
                console.log(tempkey + " is repeated in " + key + "'s to list"); 
            }            
        }

        
        //console.log(graph[key]);
        for(var toArr in graph[key].to){
            var latlng2 = [];
            latlng2.push([graph[key].lat, graph[key].lng]);
            newKey = graph[key].to[toArr];
            

            //check for duplicates
            
            //makes sure doesn't have an error if newKey doesn't exist
            if(graph[newKey] == undefined){
                console.log(key);
                console.log("The node " + newKey + " doens't exist");
            } else {
                idk = graph[newKey].to;
                    
                latlng2.push([graph[newKey].lat, graph[newKey].lng]);
                var strong = false;
                for(var again in idk){
                    if(idk[again] == key){
                        strong = true;
                    }
                }
                if(strong == false){
                    console.log(key + " weak " + newKey);
                } else {
                    console.log(key + " strong " + newKey);
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