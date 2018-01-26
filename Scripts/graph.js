function Location(name, id, x, y)
{
  this.name = name;
  this.id = id;
  this.x = x;
  this.y = y;
};

  Location.prototype.getName = function()
  {
    return this.name;
  };

  Location.prototype.getID = function()
  {
    return this.id;
  };

  Location.prototype.getX = function()
  {
    return this.x;
  };

  Location.prototype.getY = function()
  {
    return this.y;
  };

  Location.prototype.print = function()
  {
    var string = this.name + ', ' + this.id + ', ' + this.x + ', ' + this.y;
    document.write(string);
    console.log(string);
  };

function Edge(location1, location2)
{
  this.orig = location1;
  this.terminus = location2;
  this.time = [];
  this.difficulty = 0;
  this.distance = 0;
};

Edge.prototype.getTime = function()
{
  return this.time;
};

Edge.prototype.getDifficulty = function()
{
  return this.difficulty;
};

Edge.prototype.getDistance = function()
{
  var x1 = this.orig.getX();
  var x2 = this.terminus.getX();
  var y1 = this.orig.getY();
  var y2 = this.terminus.getY();

  var dLat = (x2-x1) * (Math.PI / 180);
  var dLon = (x2-x1) * (Math.PI / 180);

  var lat1 = x1 * (Math.PI / 180);
  var lat2 = x2 * (Math.PI / 180);

  var a = Math.pow(Math.sin(dLat / 2),2) + Math.pow(Math.sin(dLon / 2),2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.asin(Math.sqrt(a));
  var dist = 6372.8 * c;

  return dist;
};

function Graph()
{
  this.vertex = [];
  this.edge = [];
  this.num_edges = 0;
};

Graph.prototype.addVertex = function(node)
{
  this.vertex.push(node);
  this.edge[node] = [];
};

Graph.prototype.addEdge = function(vertex1,vertex2)
{
  this.edge[vertex1].push(vertex2);
  this.edge[vertex2].push(vertex1);
  this.num_edges++;
};

var newNode = new Location('hi', 36.9911915, -122.0684061, 3);
var newNode2 = new Location('hi', 36.9912099, -122.0662226, 4);

var newEdge = new Edge(newNode, newNode2);

var distanceof2 = newEdge.getDistance();

document.write(distanceof2);
console.log(distanceof2);


//newNode.print();
//newNode2.print();
