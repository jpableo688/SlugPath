//Edge object
function Edge(fromID, toID)
{
  this.from = fromID
  this.to = toID;
  this.eDist = 0;
  this.eTime = 0;
  this.eDiff = 1;
};

  Edge.prototype.getFrom = function(){
    return this.from;
  };

  Edge.prototype.getTo = function(){
    return this.to;
  };

  Edge.prototype.getDistance = function(){
    //Assign lat & long to variables for cleaner format
    var x1 = (nodes[this.from]).lat;
    var x2 = (nodes[this.to]).lat;
    var y1 = (nodes[this.from]).lng;
    var y2 = (nodes[this.to]).lng;

    //convert distance between axis into radians
    var dLat = (x2-x1) * Math.PI / 180;
    var dLon = (y2-y1) * Math.PI / 180;

    //conver lat into radians
    var lat1 = x1 * Math.PI / 180;
    var lat2 = x2 * Math.PI / 180;

    //Haversine forumla and convert into miles
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var dist = 3958 * c;

    this.eDist = dist;

    return this.eDist;
  };

  Edge.prototype.getTime = function(){
    var cont_speed = 3; //Average walk speed is 2.0 mph

    var dist = this.getDistance();

    //Calculates time in decimal then calculates individual minutes then secods
    var origin_time = (dist/cont_speed) * this.getDifficulty() * 10; // 10 shifts decimal place
    var minutes = Math.floor(Math.abs(origin_time));
    var seconds = Math.floor((Math.abs(origin_time) * 60) % 60);

    //put into tuple
    //this.time.push(minutes);
    //this.time.push(seconds);

    this.eTime = origin_time;// replaced this.time with origin_time

    return this.eTime;
  };



  Edge.prototype.getDifficulty = function(){
    this.eDiff = 1.0;

    return this.eDiff;
  };

  Edge.prototype.print = function(){
    document.write('||' + this.getFrom() + ' connected to ' + this.getTo() + ' with weights: Dist:' + this.getDistance() + ' Time:' + this.getTime() + ' Diff:' + this.getDifficulty());
  };

//Graph object
function Graph(){
  this.start = null;
  this.current_node = null;
  this.end = null;
};

/*
Graph.prototype.addVertex = function(node){
  this.vertex.push(node);
  this.edge[node] = [];
};

Graph.prototype.addEdge = function(vertex1,vertex2){
  var toInsert = new Edge(vertex1, vertex2);
  this.edge.push(toInsert);
  this.num_edges++;

  vertex1.successor.push([vertex2.getID(), toInsert.getDistance(), toInsert.getTime()]);
};
*/

Graph.prototype.setState = function(node_startID, node_endID){
  this.start = node_startID;
  this.end = node_endID;
  this.current_node = this.start;
};

Graph.prototype.isEnd = function(ID){
  if(ID == nodes[this.end].id)
    return true;

  else 
    return false;
};

Graph.prototype.getStart  = function(){
  return this.start;
};

Graph.prototype.getEnd = function(){
  return this.end;
};

Graph.prototype.getStartCoord = function(){
  var sCoord = []

  sCoord.push(nodes[this.getStart()].lat);
  sCoord.push(nodes[this.getStart()].lng);

  return sCoord;
};

Graph.prototype.getEndCoord = function(){
  var eCoord = []

  eCoord.push(nodes[this.getEnd()].lat);
  eCoord.push(nodes[this.getEnd()].lng);

  return eCoord;
};

Graph.prototype.getCurrCoord = function(ID){
  var currCoord = []

  currCoord.push(nodes[ID].lat);
  currCoord.push(nodes[ID].lng);

  return currCoord;
};

Graph.prototype.getLat =function(ID){
  return nodes[ID].lat;
};

Graph.prototype.getLong =function(ID){
  return nodes[ID].lng;
};

Graph.prototype.getGraphHeur = function(ID){
  //Assign lat & long to variables for cleaner format
  var currPos = this.getCurrCoord(ID);
  var endPos = this.getEndCoord();

  var x1 = currPos[0];
  var y1 = currPos[1];
  var x2 = endPos[0];
  var y2 = endPos[1];

  //convert distance between axis into radians
  var dLat = (x2-x1) * Math.PI / 180;
  var dLon = (y2-y1) * Math.PI / 180;
  //conver lat into radians
  var lat1 = x1 * Math.PI / 180;
  var lat2 = x2 * Math.PI / 180;
  //Haversine forumla and convert into miles
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var gDist_heur = 3958 * c / 10;
  return gDist_heur;
};

Graph.prototype.getTimeHeur = function(ID){
  var cont_speed = 3; //Average walk speed is 2.0 mph

  var dist = this.getGraphHeur(ID);

  //Calculates time in decimal then calculates individual minutes then secods
  var graph_origin_time = (dist/cont_speed) * this.getGraphDifficulty() * 10; // 10 shifts decimal place
  var minutes = Math.floor(Math.abs(graph_origin_time));
  var seconds = Math.floor((Math.abs(graph_origin_time) * 60) % 60);

  //put into tuple
 // this.time.push(minutes);
  //this.time.push(seconds);

  return graph_origin_time; // replaced this.time with origin_time
};

Graph.prototype.getGraphDistance = function(x1_lat, y1_long, x2_lat, y2_long){
  //Assign lat & long to variables for cleaner format
  var x1 = x1_lat;
  var x2 = x2_lat;
  var y1 = y1_long;
  var y2 = y2_long;

  //convert distance between axis into radians
  var dLat = (x2-x1) * Math.PI / 180;
  var dLon = (y2-y1) * Math.PI / 180;

  //conver lat into radians
  var lat1 = x1 * Math.PI / 180;
  var lat2 = x2 * Math.PI / 180;

  //Haversine forumla and convert into miles
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var g_dist = 3958 * c / 10;

  return g_dist;
};

Graph.prototype.getGraphTime = function(x1_lat, y1_long, x2_lat, y2_long){
  var cont_speed = 3; //Average walk speed is 2.0 mph

  var dist = this.getGraphDistance(x1_lat, y1_long, x2_lat, y2_long);

  //Calculates time in decimal then calculates individual minutes then secods
  var graph_origin_time = (dist/cont_speed) * this.getGraphDifficulty() * 10; // 10 shifts decimal place
  var minutes = Math.floor(Math.abs(graph_origin_time));
  var seconds = Math.floor((Math.abs(graph_origin_time) * 60) % 60);

  //put into tuple
 // this.time.push(minutes);
  //this.time.push(seconds);

  return graph_origin_time; // replaced this.time with origin_time
};

Graph.prototype.getGraphDifficulty = function(){
  return 1.0;
};

Graph.prototype.getSuccessor = function(ID){
  var succ = []; // return array
  var curr = nodes[ID];
  var toList = curr.to;

  var edges = [];
  for(i = 0; i < toList.length; i++){
    var toID = toList[i];

    var tempEdge = new Edge(ID, toID);

    edges.push(tempEdge);
  }
  

  for(i = 0; i < toList.length; i++)
  {
    //console.log(nodes[toList[i]].id);
    //console.log(toList[i]);
    var nodeId = nodes[toList[i]].id;
    var weight = edges[i].getDistance();
    //succ.push([nodes[toList[i]].id, edges[i].getDistance()]);
    succ.push([nodeId,weight]);
  }

  return succ;
  

//  for(i = 0; i < edges.length; i++){
  //  document.write((edges[i]).print());
  //}
};

Graph.prototype.print = function(){
  for(i = 0; i < this.num_edges; i++){
    this.edge[i].print();
  }
};


Graph.prototype.tester = function(){

  return nodes["0900001"].type;
}

var newGraph = new Graph();

newGraph.setState("0900000", "0900001");


//document.write(newGraph.getSuccessor("0900001"));


//document.write(newGraph.getGraphDistance(newGraph.getLat("0900000"),newGraph.getLong("0900000"),newGraph.getLat("0900001"),newGraph.getLong("0900001")));

/*

//Test here
var newNode = new Node(100000, 'hi', 'this_area', 36.994905, -122.065353, 'resi');
var newNode2 = new Node(200000, 'hi', 'next_area', 36.995171, -122.065299, 'coll');
var newNode3 = new Node(300000, 'hi', 'next_area', 36.995171, -122.066299, 'coll');
var newNode4 = new Node(400000, 'hi', 'next_area', 36.995171, -122.067299, 'coll');

var the_graph = new Graph();
the_graph.addVertex(newNode);
the_graph.addVertex(newNode2);
the_graph.addVertex(newNode3);
the_graph.addVertex(newNode4);

the_graph.addEdge(newNode, newNode2);
the_graph.addEdge(newNode2, newNode3);
the_graph.addEdge(newNode2, newNode4);
the_graph.addEdge(newNode4, newNode);

//document.write(the_graph.num_edges + newline);
//document.write('\n');

//the_graph.print();

newNode2.printSucc();
*/


