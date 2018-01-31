var mymap = new L.map('mapid').setView([36.995698, -122.059135], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/deward/cjctqjzpn1bns2so0l1liwkpq/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV3YXJkIiwiYSI6ImNqY3NoanlzaDBlcnAycXFxYTFhdGl2dm4ifQ.I-o2qW918K0PzZ6W1nqWxQ', {}).addTo(mymap);

var startmarkers;
var endmarkers;
var polyline;
   var latlng = [];
function drawMap(searchArray){
   
   
   //compares path, which should be the array from A*
   //to current nodes. Right now it's n^2, but if we
   //database running/ I figure out a better way of 
   //comparing or organizing data it will be faster
   //right now it's an array of nodes.
   var path = searchArray;

   var pathcount = path.length;
   var nodecount = nodes.length;

   for(i = 0; i < pathcount; i++){
      for(j = 0; j < nodecount; j++){
         if (path[i] === nodes[j].id){
            latlng.push([nodes[j].latitude, nodes[j].longitude]);
            //as you can see I can call node[#].attributes
            if(i === 0){
               startmarkers = L.marker([nodes[j].latitude, nodes[j].longitude]).addTo(mymap);
               startmarkers.bindPopup(nodes[j].name).openPopup();
            }
            if(i === path.length-1){
               endmarkers = L.marker([nodes[j].latitude, nodes[j].longitude]).addTo(mymap);
               endmarkers.bindPopup(nodes[j].name).openPopup();
            }
         }
      }	
   }
   
   polyline = L.polyline(latlng);
   mymap.fitBounds(polyline.getBounds(), {padding: [50,50]});
   mymap.addLayer(polyline);
   
   
   //forgathering data
   var popup = L.popup();
   
   function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(e.latlng.toString())
			.openOn(mymap);
	}
   
   for(i=0; i < nodes.length; i++){
      path.pop(curr);
   }

	mymap.on('click', onMapClick);

}

function clearMap(searchArray){
   if (startmarkers != undefined){
      mymap.removeLayer(startmarkers);
   }
   if (endmarkers != undefined){
      mymap.removeLayer(endmarkers);
   }
   if(polyline != undefined){
      mymap.removeLayer(polyline);
   }
   drawMap(searchArray);
}