var graph = new Graph();
function aStar(optFrom, optTo){
    
    graph.setState(optFrom, optTo);
    var path1 = slugStar(graph);
    graph.setState(optTo, optFrom);
    var path2 = slugStar(graph);
    
    var path1dist = calculateDist(path1);
    var path2dist = calculateDist(path2);
    if(path1dist > path2dist){
        path2.reverse();
        displayDist(path2dist);
        drawMap(path2);
        
    } else {
        drawMap(path1);
        displayDist(path1dist);
    }
    //sleep(10);
}

function calculateDist(paths){
    totaldist = 0;
    //console.log(paths);
    for(i = 1; i < paths.length; i++){
        //console.log("{ "+ paths[i-1] + " to " + paths[i]);
        thisDist = nodeDistance(nodes[paths[i-1]], nodes[paths[i]]);
        //console.log("current 2 node dist " + thisDist);
        totaldist = totaldist + thisDist;
        //console.log("current total dist " + totaldist + "}");
    }
    return totaldist;

}

function displayDist(dist){
    var distanceItem = document.getElementById("Distance");
    distanceItem.innerHTML = "Total Distance: " + dist;
}