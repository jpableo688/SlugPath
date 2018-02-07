
function collectFirstData(){
   var firstlist = [];
   var alreadyhere = false;
   for(key in nodes){
      alreadyhere = false;
      for(var index in firstlist){
         if(nodes[key].type == firstlist[index].type){
            alreadyhere = true;
         }
      }
      if(alreadyhere == false){
         firstlist.push(nodes[key]);
      }
   }
   return firstlist;
}

function collectSecondData(value){
   secondlist = [];
   for(key in nodes){
      if(nodes[key].type == value){
         secondlist.push(nodes[key]);
      }
   }
   return secondlist;
}

//NotYetCalled, but will search by area.
/*function collectAreaData(value){
   secondlist = [];
   for(key in nodes){
      if(nodes[key].areas == value){
         secondlist.push(nodes[key]);
      }
   }
   return secondlist;
}*/

//populate first From and To menus
function optStart(menu){
    var initial = document.getElementById(menu);
    var firstlist = collectFirstData();
    for(i = 0; i < firstlist.length; i++){
        var newOption = document.createElement("option");
        newOption.value = firstlist[i].type;
        newOption.innerHTML = firstlist[i].type;
        initial.options.add(newOption);
    }
}

//populate second From and To menus
function optQuery(init,dyna){
    var initial = document.getElementById(init);
    var dynamic = document.getElementById(dyna);
   
    //for blanks in as default
    dynamic.innerHTML ="";
    var blank = document.createElement("option");
    blank.value = "";
    blank.innerHTML = "";
    dynamic.options.add(blank);
   
    //for nearby in to
    if(initial.value == "Nearby"){
        var areaOpt = document.createElement("option");
        areaOpt.value = "area";
        areaOpt.innerHTML = "Area";
        dynamic.options.add(areaOpt);
      
        var proxOpt = document.createElement("option");
        proxOpt.value = "Proximity";
        proxOpt.innerHTML = "Proximity";
        dynamic.options.add(proxOpt);
    }
    
    var secondlist = collectSecondData(initial.value);  
    for(i = 0; i < secondlist.length; i++){
        var newOption = document.createElement("option");
        newOption.value = secondlist[i].name;
        newOption.innerHTML = secondlist[i].name;
        dynamic.options.add(newOption);
    }
}

//not yet working
/*function getLocation(){
    //var secondlist = [];
    //var myLocationKey = "0000000";
    //var secondlist = [];
    navigator.geolocation.getCurrentPosition(showPosition);
       "0000000":{
       "id":"0000000",
       "name":"My Location",
       "areas":null,
       "lat":null,
       "lng":null,
       "type":null,
       "to":[]
    },
   
}

function showPosition(pos){
    //not working yet
    //tests[myLocationKey].lat = pos.coords.latitude;
    //tests[myLocationKey].lng = pos.coords.longitude;
}*/

function checkIfNode(optValue){
    //boolean to see if first menu should let second menu be seen
    if(optValue == "My Location"){
        gatherLocation();
        return true;
    }
    if(optValue == "empty"){
        return true;
    }
    return false;
}

function checkFirstMenu(menu, second){ 
    //check if the first menu is chosen and if second menu should be shown
    var optFirst = document.getElementById(menu);
    if (checkIfNode(optFirst.value)){
        document.getElementById(second).style.display = "none";
    } else {
        document.getElementById(second).style.display = "inline-block";
    }
}

function nearbyOpt(optValue){
    if(optValue == "area" || optValue == "proximity"){
        //dosomething
    }
}

//checksIDs and passes to search algorithm
function findIDs(menuFromInit,menuToInit, menuFromDyna,menuToDyna){
    var IDs = checkSecondMenu(menuFromInit,menuToInit, menuFromDyna,menuToDyna);
    //only run the algorithm when both IDs are given
    if (IDs == undefined){
        
    } else {
        aStar(IDs[0], IDs[1]);
    }
}

//checks menus are chosen
function checkSecondMenu(menuFromInit,menuToInit, menuFromDyna,menuToDyna){    
    var fromID;
    var toID;
    var optFirstFrom = document.getElementById(menuFromInit);
    var optFirstTo = document.getElementById(menuToInit);
    var optSecondFrom = document.getElementById(menuFromDyna);
    var optSecondTo = document.getElementById(menuToDyna);
    
    //collect data for second option to reference
    var fromList = collectSecondData(optFirstFrom.value);
    for(i = 0; i < fromList.length; i++){
        if(optSecondFrom.value == fromList[i].name){
            fromID = secondlist[i].id;
        }
    }
    toList = collectSecondData(optFirstTo.value);
    for(i = 0; i < toList.length; i++){
        if(optSecondTo.value == toList[i].name){
            toID = secondlist[i].id;
        }
    }
    
    //only return when both IDs are found
    if (fromID != undefined && toID != undefined){
        return[fromID, toID];
    }
    
    return undefined;
}
