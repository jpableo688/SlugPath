//Location node object (Node)
function Node(id, name, area, lat, long, map_type){
  this.id = id;
  this.name = name;
  this.area = area;
  this.lat = lat;
  this.long = long;
  this.map_type = map_type;
  this.successor = []; //used for search algorithm
};

  Node.prototype.getID = function(){
    return this.id;
  };

  Node.prototype.getName = function(){
    return this.name;
  };

  Node.prototype.getArea = function(){
    return this.area;
  };

  Node.prototype.getLat = function(){
    return this.lat;
  };

  Node.prototype.getLong = function(){
    return this.long;
  };

  Node.prototype.getType = function(){
    return this.map_type;
  };

  Node.prototype.print = function(){
    var string = '(' + this.id + ', ' + this.name + ', ' + this.area + ', ' + this.lat + ', ' + this.long + ' ' + this.map_type + ')';
    document.write(string);
    console.log(string);
  };

  Node.prototype.printSucc = function(){
    document.write("Parent Node: ");
    this.print();
    document.write("\nSuccessor Node(s): \n");
    for(i = 0; i < this.successor.length; i++)
    {
      document.write(this.successor[i] + ' || ');
    }
  }


//Edge object
function Edge(location1, location2)
{
  this.orig = location1;
  this.terminus = location2;
  this.time = [];
  this.difficulty = 1;
  this.distance = 0;
};

  Edge.prototype.getTime = function(){
    var cont_speed = 3; //Average walk speed is 2.0 mph

    var dist = this.getDistance();

    //Calculates time in decimal then calculates individual minutes then secods
    var origin_time = (dist/cont_speed) * this.getDifficulty() * 10; // 10 shifts decimal place
    var minutes = Math.floor(Math.abs(origin_time));
    var seconds = Math.floor((Math.abs(origin_time) * 60) % 60);

    //put into tuple
    this.time.push(minutes);
    this.time.push(seconds);

    return origin_time; // replaced this.time with origin_time
  };

  Edge.prototype.getDifficulty = function(){
    return this.difficulty;
  };

  Edge.prototype.getDistance = function(){
    //Assign lat & long to variables for cleaner format
    var x1 = this.orig.getLat();
    var x2 = this.terminus.getLat();
    var y1 = this.orig.getLong();
    var y2 = this.terminus.getLong();

    //convert distance between axis into radians
    var dLat = (x2-x1) * Math.PI / 180;
    var dLon = (y2-y1) * Math.PI / 180;

    //conver lat into radians
    var lat1 = x1 * Math.PI / 180;
    var lat2 = x2 * Math.PI / 180;

    //Haversine forumla and convert into miles
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var dist = 3958 * c / 10;

    return dist;
  };

  Edge.prototype.print = function(){
    document.write('||' + this.orig.getID() + ' connected to ' + this.terminus.getID() + '|| ');
  };

//Graph object
function Graph(){
  this.start = null;
  this.current_node = null;
  this.end = null;
};

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

Graph.prototype.setState = function(node_startID, node_endID){
  this.start = node_startID;
  this.end = node_endID;
  this.current_node = this.start;
};

Graph.prototype.isEnd = function(ID){
  if(ID == dict[this.end].id)
    return true;

  else 
    return false;
};

Graph.prototype.getLat =function(ID){
  return dict[ID].lat;
};

Graph.prototype.getLong =function(ID){
  return dict[ID].lng;
};

Graph.prototype.getSuccessor = function(ID)
{
  var succ = []; // return array
  var curr = dict[ID];
  var toList = curr.to;

  var x1 = this.getLat(ID); var y1 = this.getLong(ID);

  for(i = 0; i < toList.length; i++)
  {
    var x2 = this.getLat(dict[toList[i]].id); var y2 = this.getLong(dict[toList[i]].id);

    var temp_distance = this.getGraphDistance(x1,y1,x2,y2);
    var temp_time = this.getGraphTime(x1,y1,x2,y2);
    //document.write(dict[toList[i]].id + " || ");

    succ.push([dict[toList[i]].id, temp_distance, temp_time]);
  }

  return succ;
};

Graph.prototype.print = function(){
  for(i = 0; i < this.num_edges; i++){
    this.edge[i].print();
  }
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
}
Graph.prototype.tester = function(){

  return dict["0900001"].type;
}

var newGraph = new Graph();

newGraph.setState("0900000", "0900001");


newGraph.getSuccessor("0900001");

document.write(newGraph.getSuccessor("0900001"));

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


