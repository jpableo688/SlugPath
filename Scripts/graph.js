//Location object (Node)
function Location(id, name, area, lat, long, map_type)
{
  this.id = id;
  this.name = name;
  this.area = area;
  this.lat = lat;
  this.long = long;
  this.map_type = map_type;
};

  Location.prototype.getID = function()
  {
    return this.id;
  };

  Location.prototype.getName = function()
  {
    return this.name;
  };

  Location.prototype.getArea = function()
  {
    return this.area;
  };

  Location.prototype.getLat = function()
  {
    return this.lat;
  };

  Location.prototype.getLong = function()
  {
    return this.long;
  };

  Location.prototype.getType = function()
  {
    return this.map_type;
  };

  Location.prototype.print = function()
  {
    var string = this.id + ', ' + this.name + ', ' + this.area + ', ' + this.lat + ', ' + this.long + ' ' + this.map_type;
    document.write(string);
    console.log(string);
  };

//Edge object
function Edge(location1, location2)
{
  this.orig = location1;
  this.terminus = location2;
  this.time = [];
  this.difficulty = 1;
  this.distance = 0;
};

Edge.prototype.getTime = function()
{
  var cont_speed = 3.1; //Average walk speed is 5.0 mph

  var dist = this.getDistance();

  //Calculates time in decimal then calculates individual minutes then secods
  var origin_time = (dist/cont_speed) * this.getDifficulty() * 10;
  var minutes = Math.floor(Math.abs(origin_time));
  var seconds = Math.floor((Math.abs(origin_time) * 60) % 60);

  //put into tuple
  this.time.push(minutes);
  this.time.push(seconds);

  return this.time;
};

Edge.prototype.getDifficulty = function()
{
  return this.difficulty;
};

Edge.prototype.getDistance = function()
{
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

//Graph object
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

//Test here
var newNode = new Location(100000, 'hi', 'this_area', 36.974117, -122.030792, 'resi');
var newNode2 = new Location(100000, 'hi', 'next_area', 36.991216, -122.066210, 'coll');

var newEdge = new Edge(newNode, newNode2);

var distanceof2 = newEdge.getDistance();
var timeof2 = newEdge.getTime();


document.write(distanceof2 + "|| ");
console.log(distanceof2 + "|| ");
document.write(timeof2) + "|| ";
console.log(timeof2 + "|| ");
