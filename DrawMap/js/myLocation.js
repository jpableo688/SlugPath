
//WORKING
function getLocation(){
    //may not work when we put it up.
    navigator.geolocation.getCurrentPosition(createNode);
}

function nodeDistance(node1, node2){
    //Assign lat & long to variables for cleaner format
    var x1 = node1.lat;
    var x2 = node2.lat;
    var y1 = node1.lng;
    var y2 = node2.lng;

    //convert distance between axis into radians
    var dLat = (x2-x1) * Math.PI / 180;
    var dLon = (y2-y1) * Math.PI / 180;

    //conver lat into radians
    var lat1 = x1 * Math.PI / 180;
    var lat2 = x2 * Math.PI / 180;

    //Haversine forumla and convert into miles
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    dist = 3958 * c / 10;
    
    return dist;
}

function findNearestNode(node){
    var nearestNode;
    var nearest = .1;
    for(key in tests){
        var dist = nodeDistance(node, tests[key]);
        //console.log(tests[key]);
        if (dist < nearest){
            
            nearestNode = tests[key];
            nearest = dist;
            
        }
    }
    return nearestNode;
}

function findNearestBigNode(node){
    var nearestBigNode;
    var nearest = .05;
    for(key in nodes){
        if (nodes[key].areas != undefined){
            var dist = nodeDistance(node, nodes[key]);
            //console.log(dist);
            //console.log(nodes[key]);
        }
        if (dist < nearest){
            nearest = dist;
            nearestBigNode = nodes[key];
        }
        //console.log(nearestBigNode);
    }
    return nearestBigNode;
}


function createNode(pos){
    var x = document.getElementById("testLocation");
    
    var locationNode = {
        "id":"0000000",
        "name":"My Location",
        "areas":null,
        "lat":null,
        "lng":null,
        "type":"My Location",
        "to":[]
    };
    
    x.innerHTML = "Latitude: " + pos.coords.latitude.toFixed(6) +
		"<br>Longitude: " + pos.coords.longitude.toFixed(6);
    locationNode.lat = pos.coords.latitude.toFixed(6);
    locationNode.lng = pos.coords.longitude.toFixed(6);
    
    
    //will change once we settle on one data;
    var nearestBigNode = findNearestBigNode(locationNode);
    if(nearestBigNode != undefined){
        nodes[locationNode.id] = locationNode;
        locationNode.areas = nearestBigNode.areas;
    } else {
        alert("You are not within a half mile radius of UCSC");
    }
    
    var nearestNode = findNearestNode(locationNode);
    if(nearestNode != undefined){
        locationNode.to.push(nearestNode.id);
        tests[locationNode.id] = locationNode;
        gatherTypes('typeFrom');
    } else {
        alert("You are not within a half mile radius of UCSC");
        
    }
    
}