var pathcheck = [];
function aStar(){
   for(i=0; i < 30; i++){
      curr = Math.floor(Math.random() * nodes.length); 
      pathcheck.push(nodes[curr].id);
   }
   clearMap(pathcheck);
}