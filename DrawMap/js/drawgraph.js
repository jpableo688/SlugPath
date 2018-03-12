//draws whole graph
function drawGraph() {
    var newKey;
    var graph = nodes;
    for(key in graph){
        //startmarker = L.marker([graph[key].lat, graph[key].lng]).addTo(mymap);
        //startmarker.bindPopup(graph[key].id +" " + graph[key].type + "  " + graph[key].name ).openPopup();
        //console.log("{");
        //startmarkers.push(startmarker);
        if(key != graph[key].id){
            console.log(key);
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
                var toList = graph[newKey].to;
                latlng2.push([graph[newKey].lat, graph[newKey].lng]);
                var strong = false;
                for(var again in toList){
                    if(toList[again] == key){
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
            //console.log(latlng2);
            polyline = L.polyline(latlng2);
            polylines.push(polyline);
            mymap.addLayer(polyline);
        }
        //console.log("}");
    }
}

function testBigNodes(){
    var paths = [];
    var graph = new Graph();
    var counter = 0;
    for(key in nodes){
        
        if(nodes[key].name != null){
            //console.log(key);
            for (key2 in nodes){
                //counter = counter +1;
                /*if(counter > 20){
                    //console.log("I broke");
                    counter = 0;
                    break;
                }*/
                if(nodes[key2].name != null){
                    
                    graph.setState(key, key2);
                    var path1 = slugStar(graph);
                    paths.push(path1);
                    console.log(path1);
                    /*graph.setState(key, key2);
                    var path1 = slugStar(graph);
                    if(path1.length == 0){
                    console.log("NO SOL:  " +  key + "  " + key2 );
                    }
                    drawMap(path1);
                    sleep(500);
                    //console.log(path1);
                    */
                }
            }
        }
    }
    console.log("full, " + paths.length);
    /*for (var path in paths){
        //drawMap(paths[path]);
        //sleep(100);
    }*/
}


function testNodes(){
    var graph = new Graph();
    var paths = [];
    for(key in nodes){
        for (key2 in nodes){
            graph.setState(key, key2);
            var path1 = slugStar(graph);
            //paths.push(path1);
            console.log(path1);
        }
    }
    console.log("full, " + paths.length);
}

function testButtons(){
    var test = document.getElementById('testing');
    if (test.style.display === 'none') {
        test.style.display = 'block';
    } else {
        test.style.display= 'none';
    }
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}