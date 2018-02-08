
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

function updateNearby(initial,dynamic,otherInit,otherDyna){

    if (otherInit.value == "Nearby"){
        //console.log("Updating for...");
        otherDyna.innerHTML ="";
        var blank = document.createElement("option");
        blank.value = "";
        blank.innerHTML = "";
        otherDyna.options.add(blank);
    
        if(initial.value == "My Location"){
            secondList = nearTo(initial.value);
        } else {
            secondList = nearTo(dynamic.value);
        }
        
        for(i = 0; i < secondList.length; i++){
            var newOption = document.createElement("option");
            newOption.value = secondList[i].name;
            newOption.innerHTML = secondList[i].name;
            otherDyna.options.add(newOption);
        }
        
    } else {
        
        //console.log("Updating else...");
        dynamic.innerHTML ="";
        var blank = document.createElement("option");
        blank.value = "";
        blank.innerHTML = "";
        dynamic.options.add(blank);
        
        if(otherInit.value == "My Location"){
                secondList = nearTo(otherInit.value);
        } else {
                secondList = nearTo(otherDyna.value);
        }
        for(i = 0; i < secondList.length; i++){
            var newOption = document.createElement("option");
            newOption.value = secondList[i].name;
            newOption.innerHTML = secondList[i].name;
            dynamic.options.add(newOption);
        }
    }
}

function optQuery(menuInit, menuDyna, menuOtherInit,menuOtherDyna){
    var secondList = [];
    var initial = document.getElementById(menuInit);
    var dynamic = document.getElementById(menuDyna);
    var otherInit = document.getElementById(menuOtherInit);
    var otherDyna = document.getElementById(menuOtherDyna);
    
    //for blanks in as default
    dynamic.innerHTML ="";
    var blank = document.createElement("option");
    blank.value = "";
    blank.innerHTML = "";
    dynamic.options.add(blank);
    
    if(initial.value != "Nearby"){
        secondList = collectSecondData(initial.value);
        for(i = 0; i < secondList.length; i++){
            var newOption = document.createElement("option");
            newOption.value = secondList[i].name;
            newOption.innerHTML = secondList[i].name;
            dynamic.options.add(newOption);
        }
    } else {
        updateNearby(initial,dynamic,otherInit,otherDyna);
    }
    if(otherInit == "Nearby"){
        //console.log("otherinitnearby");
        //updateNearby(initial,dynamic,otherInit,otherDyna);
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

function checkFirstMenu(menu, second){ 
    //check if the first menu is chosen and if second menu should be shown
    var optFirst = document.getElementById(menu);
    
    if (checkIfNode(optFirst.value)){
        if(optFirst.value == "My Location"){
            findIDs('initFrom', 'initTo', 'dynaFrom', 'dynaTo');
        }
        document.getElementById(second).style.display = "none";
    } else {
        document.getElementById(second).style.display = "inline-block";
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
function checkSecondMenu(menuFromInit,menuToInit, menuFromDyna,menuToDyna){    
    var fromID;
    var toID;
    var fromList;
    var toList;
    var optFirstFrom = document.getElementById(menuFromInit);
    var optFirstTo = document.getElementById(menuToInit);
    var optSecondFrom = document.getElementById(menuFromDyna);
    var optSecondTo = document.getElementById(menuToDyna);

    if(optFirstFrom.value == "My Location"){
        fromID = "0000000";
    } else {
        //collect data for second option to reference
        fromList = collectSecondData(optFirstFrom.value);
        for(i = 0; i < fromList.length; i++){
            if(optSecondFrom.value == fromList[i].name){
                fromID = fromList[i].id;
            }
        }
    }
    
    toList = collectSecondData(optFirstTo.value);
    if(optFirstTo.value == "Nearby"){
        //console.log("checkIDsCallingnearTO");
        if(optFirstFrom.value == "My Location"){
            toList = nearTo(optFirstFrom.value)
        } else {
            toList = nearTo(optSecondFrom.value);
        }
    }
    
    for(i = 0; i < toList.length; i++){
        if(optSecondTo.value == toList[i].name){
            toID = toList[i].id;
        }
    }
    
    if (optFirstTo.value == "Nearby" && toID  == undefined){
        //console.log("thisworks?");
        updateNearby(optFirstFrom,optSecondFrom,optFirstTo,optSecondTo);
    }
    //only return when both IDs are found
    
    //console.log("from = " + fromID);
    //console.log("to = " + toID);
    if (fromID != undefined && toID != undefined){
        return[fromID, toID];
    }
    return undefined;
}
