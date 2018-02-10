function collectTypeData(){
    var typeList = [];
    var alreadyHere = false;
    for(key in nodes){
        alreadyHere = false;
        for(var index in typeList){
            if(nodes[key].type == typeList[index].type){
                alreadyHere = true;
            }
        } 
        if(alreadyHere == false){
            typeList.push(nodes[key]);
        }
    }
    return typeList;
}
function clearMenu(menu){
    menu.innerHTML ="";
}

function populateByName(menu, list){
    clearMenu(menu);
    addBlank(menu);
    for(i = 0; i < list.length; i++){
        var newOption = document.createElement("option");
        newOption.value = list[i].name;
        newOption.innerHTML = list[i].name;
        menu.options.add(newOption);
    }
}

function populateByType(menu, list){
    for(i = 0; i < list.length; i++){
        var newOption = document.createElement("option");
        newOption.value = list[i].type;
        newOption.innerHTML = list[i].type;
        menu.options.add(newOption);
    }
}

function addBlank(menu){
    var blank = document.createElement("option");
    blank.value = "blank";
    blank.innerHTML = "";
    menu.options.add(blank);
}

function gatherTypes(types){
    var typesDD = document.getElementById(types);
    var list = collectTypeData();
    populateByType(typesDD, list);
}

function collectData(value){
   var list = [];
   for(key in nodes){
      if(nodes[key].type == value){
         list.push(nodes[key]);
      }
   }
   return list;
}

function updateReg(typeDD, areaDD, nameDD){
    var list = collectData(typeDD.value);
    populateByName(nameDD,list);
}
function checkIfType(optValue){
    if(optValue == "My Location"){
        return true;
    }
    if(optValue == "blank"){
        return true;
    }
    return false;
}

function updateFrom(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo){
    var typeFromDD = document.getElementById(typeFrom);
    var areaFromDD = document.getElementById(areaFrom);
    var nameFromDD = document.getElementById(nameFrom);
    var typeToDD = document.getElementById(typeTo);
    var areaToDD = document.getElementById(areaTo);
    var nameToDD = document.getElementById(nameTo);
    
    if(checkIfType(typeFromDD.value)){
        document.getElementById(nameFrom).style.display = "none";
        document.getElementById(areaFrom).style.display = "none";
    } else {
        document.getElementById(nameFrom).style.display = "inline-block";
        document.getElementById(areaFrom).style.display = "inline-block";
    }
    

    updateReg(typeFromDD, areaFromDD, nameFromDD);

    //console.log(nameFromDD.value);
    updateNearby(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD);

}


function updateNearby(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD){
    clearMenu(nameToDD);
    addBlank(nameToDD);
    //console.log("updating NearBy");
    if(typeFrom.value == "My Location"){
        //console.log(typeFromDD.value);
        var list = nearTo(typeFromDD.value);
        populateByName(nameToDD, list);
    } else {
        if(nameFromDD.value != "blank"){
        var list = nearTo(nameFromDD.value);
        populateByName(nameToDD, list);
        }
    }
}

function updateTo(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo){
    var typeFromDD = document.getElementById(typeFrom);
    var areaFromDD = document.getElementById(areaFrom);
    var nameFromDD = document.getElementById(nameFrom);
    var typeToDD = document.getElementById(typeTo);
    var areaToDD = document.getElementById(areaTo);
    var nameToDD = document.getElementById(nameTo);
    
    
    if(checkIfType(typeToDD.value)){
        document.getElementById(nameTo).style.display = "none";
        document.getElementById(areaTo).style.display = "none";
    } else {
        document.getElementById(nameTo).style.display = "inline-block";
        document.getElementById(areaTo).style.display = "inline-block";
    }
    if(typeToDD.value != "Nearby"){
        updateReg(typeToDD, areaToDD, nameToDD);
    } else {
        updateNearby(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD);
    }
}


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

function findIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo){
    var IDs = checkIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo);
    //console.log("HI");
    //console.log(IDs);
    //only run the algorithm when both IDs are given
    if (IDs != undefined){
        aStar(IDs[0], IDs[1]);
    }
}

function checkIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo){
    var typeFromDD = document.getElementById(typeFrom);
    var areaFromDD = document.getElementById(areaFrom);
    var nameFromDD = document.getElementById(nameFrom);
    var typeToDD = document.getElementById(typeTo);
    var areaToDD = document.getElementById(areaTo);
    var nameToDD = document.getElementById(nameTo);
    //console.log(typeFromDD.value == "My Location");
    
    if(typeFromDD.value == "My Location"){
        var fromID = "0000000";
    } else {
        var fromList = collectData(typeFromDD.value);
        for(i = 0; i < fromList.length; i++){
            if(nameFromDD.value == fromList[i].name){
                var fromID = fromList[i].id;
            }
        }
    }
    
    var toList = collectData(typeToDD.value);
    if(typeToDD.value == "Nearby"){
        //console.log(typeFrom.value);
        if(typeFromDD.value == "My Location"){
            toList = nearTo(typeFromDD.value)
        } else if(nameFromDD.value != "blank"){
            toList = nearTo(nameFromDD.value);
        }
    }
    
    for(i = 0; i < toList.length; i++){
        if(nameToDD.value == toList[i].name){
            var toID = toList[i].id;
        }
    }

    if (typeToDD.value == "Nearby" && toID == undefined){
        updateNearby(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD);
    }
    
    
    if (fromID != undefined && toID != undefined){
        return[fromID, toID];
    }
    
    return undefined;
}

function updateFromAndFindIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo){
    var typeFromDD = document.getElementById(typeFrom);
    var nameFromDD = document.getElementById(nameFrom);
    updateFrom(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo);
    if(typeFromDD.value == "My Location"){
        clearMenu(nameFromDD);
        addBlank(nameFromDD);
        //console.log(nameFromDD.value);
        checkIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo);
    }
}


