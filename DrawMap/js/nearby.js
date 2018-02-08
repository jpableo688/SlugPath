function collectAreaData(value){
   nearbyList = [];
   for(key in nodes){
      if(nodes[key].areas == value){
         nearbyList.push(nodes[key]);
      }
   }
   return areaList;
}

function nearTo(menu){
    if (optNearTo.value == "Area"){
        toList = collectAreaData(nodes[FromID].areas);
        return toList
    }
    if (optNearTo.value == "Proximity"){
        return toList = collectAreaData(nodes[FromID].areas)
    }
}