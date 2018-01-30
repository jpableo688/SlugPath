var pathcheck = [];
function aStar(optFrom, optTo){
   pathcheck.push(optFrom);
   for(i=0; i < 30; i++){
      curr = Math.floor(Math.random() * nodes.length); 
      pathcheck.push(nodes[curr].id);
   }
   pathcheck.push(optTo);
   clearMap(pathcheck);
}