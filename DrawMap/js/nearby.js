function collectAreaData(value){
   var areaList = [];
   for(key in nodes){
      if(nodes[key].areas == value){
         areaList.push(nodes[key]);
      }
   }
   return areaList;
}

function nearTo(menu){
    var nearID;
    for(key in nodes){
        if(nodes[key].name == menu){
            nearID = nodes[key].id;
        }
    }
    toList = collectAreaData(nodes[nearID].areas);
    //console.log("nearToList" );
    //console.log(toList);
    return toList;
}