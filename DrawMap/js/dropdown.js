
function collectFirstData(){
   var firstList = [];
   var alreadyHere = false;
   for(key in nodes){
      alreadyHere = false;
      for(var index in firstList){
         if(nodes[key].type == firstList[index].type){
            alreadyHere = true;
         }
      }
      if(alreadyHere == false){
         firstList.push(nodes[key]);
      }
   }
   return firstList;
}

function collectSecondData(value){
   secondList = [];
   for(key in nodes){
      if(nodes[key].type == value){
         secondList.push(nodes[key]);
      }
   }
   return secondList;
}



//populate first From and To menus
function optStart(menu){
    var initial = document.getElementById(menu);
    var firstList = collectFirstData();
    for(i = 0; i < firstList.length; i++){
        var newOption = document.createElement("option");
        newOption.value = firstList[i].type;
        newOption.innerHTML = firstList[i].type;
        initial.options.add(newOption);
    }
}

//populate second From and To menus
function checkIfNearbyOpts(menu){
    if (menu.value == "Area"){
        return true;
    }
    if (menu.value == "Proximity"){
        return true;
    }
    return false;
}
function optQuery(init,dyna){
    var initial = document.getElementById(init);
    var dynamic = document.getElementById(dyna);
    console.log(initial.value);
    
    
    //for blanks in as default
    dynamic.innerHTML ="";
    var blank = document.createElement("option");
    blank.value = "";
    blank.innerHTML = "";
    dynamic.options.add(blank);
    
    if(initial.value != "Nearby"){
        var secondList = collectSecondData(initial.value);
        for(i = 0; i < secondList.length; i++){
            var newOption = document.createElement("option");
            newOption.value = secondList[i].name;
            newOption.innerHTML = secondList[i].name;
            dynamic.options.add(newOption);
        }
    }
    
    if(checkIfNearbyOpts(initial.value)){
        var secondList = nearTo(initial.value);
        for(i = 0; i < secondList.length; i++){
            var newOption = document.createElement("option");
            newOption.value = secondList[i].name;
            newOption.innerHTML = secondList[i].name;
            dynamic.options.add(newOption);
        }
    }
}


function checkIfNode(optValue){
    //boolean to see if first menu should let second menu be seen
    if(optValue == "My Location"){
        return true;
    }
    if(optValue == "empty"){
        return true;
    }
    return false;
}

function checkFirstMenu(menu, second, nearby){ 
    //check if the first menu is chosen and if second menu should be shown
    var optFirst = document.getElementById(menu);
    
   
    
    if (checkIfNode(optFirst.value)){
        if(optFirst.value == "My Location"){
            //getLocation();
        }
        document.getElementById(second).style.display = "none";
    } else {
        if(optFirst.value == "Nearby"){
            document.getElementById(nearby).style.display = "inline-block";
        } else {
            document.getElementById(second).style.display = "inline-block";
        }
    }
}


//checksIDs and passes to search algorithm
function findIDs(menuFromInit,menuToInit, menuFromDyna,menuToDyna){
    var IDs = checkSecondMenu(menuFromInit,menuToInit, menuFromDyna,menuToDyna);
    //only run the algorithm when both IDs are given
    if (IDs != undefined){
        aStar(IDs[0], IDs[1]);
    }
}

//checks menus are chosen
function checkSecondMenu(menuFromInit,menuToInit, menuFromDyna,menuToDyna, nearbySecond){    
    var fromID;
    var toID;
    var optFirstFrom = document.getElementById(menuFromInit);
    var optFirstTo = document.getElementById(menuToInit);
    var optSecondFrom = document.getElementById(menuFromDyna);
    var optSecondTo = document.getElementById(menuToDyna);
    var optNearTo = document.getElementById(nearbySecond);
    if(optFirstFrom.value == "My Location"){
        fromID = "0000000";
    } else {
        //collect data for second option to reference
        var fromList = collectSecondData(optFirstFrom.value);

        for(i = 0; i < fromList.length; i++){
            if(optSecondFrom.value == fromList[i].name){
                fromID = secondList[i].id;
            }
        }
    }

    var toList = collectSecondData(optFirstTo.value);
    for(i = 0; i < toList.length; i++){
        if(optSecondTo.value == toList[i].name){
            toID = secondList[i].id;
        }
    }
    //only return when both IDs are found
    if (fromID != undefined && toID != undefined){
        return[fromID, toID];
    }
    return undefined;
}
