function aStar(){
   var path = [];
   for(i=0; i < nodes.length; i++){
      curr = Math.floor(Math.random() * 8) + 1; 
      path.push(curr);
   }
   clearMap(path);
}