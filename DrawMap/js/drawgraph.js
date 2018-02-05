var keymarkers;
var newKey;
function drawgraph(pass) {
   var graph = pass;
   for(key in graph){
      keymarkers = L.marker([graph[key].lat, graph[key].lng]).addTo(mymap);
      keymarkers.bindPopup(graph[key].id + "  " + graph[key].name ).openPopup();
      console.log(key);
      for(var toArr in graph[key].to){
         var latlng2 = [];
         latlng2.push([graph[key].lat, graph[key].lng]);
         newKey = graph[key].to[toArr];
         latlng2.push([graph[newKey].lat, graph[newKey].lng]);
         //used to find connected but missing keys
         console.log(newKey);
         var polyline;
         console.log(latlng2);
         polyline = L.polyline(latlng2);
         mymap.addLayer(polyline);
      }
   }
}