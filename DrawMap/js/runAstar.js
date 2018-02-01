
function aStar(optFrom, optTo){
   var pathcheck = [];
   pathcheck.push(optFrom);
   
   for(i=0; i < 10; i++){
      pathcheck.push(Object.keys(nodes)[Math.floor(Math.random()*Object.keys(nodes).length)]);
   }
   pathcheck.push(optTo);
   clearMap(pathcheck);
}