function aStar(optFrom, optTo, weight){
    var graph = new Graph();
    graph.setState(optFrom, optTo);
    var finalPath = slugStar(graph);
    drawMap(finalPath);
}