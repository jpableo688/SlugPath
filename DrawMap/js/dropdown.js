function addBlank(menu){
    var blank = document.createElement("option");
    blank.value = "blank";
    blank.innerHTML = "";
    menu.options.add(blank);
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
    if(menu.id == "typeFrom"){
        clearMenu(menu);
        addBlank(menu);
    }
    for(i = 0; i < list.length; i++){
        var newOption = document.createElement("option");
        newOption.value = list[i].type;
        newOption.innerHTML = list[i].type;
        menu.options.add(newOption);
    }
}

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
    //console.log(typeList);
    return typeList;
}


function collectNameData(value){
   var nameList = [];
   for(key in nodes){
      if(nodes[key].type == value){
         nameList.push(nodes[key]);
      }
   }
   return nameList;
}

function collectNameByArea(value){
   var areaList = [];
   for(key in nodes){
      if(nodes[key].areas == value){
         areaList.push(nodes[key]);
      }
   }
   return areaList;
}

function gatherTypes(types){
    var typesDD = document.getElementById(types);
    var list = collectTypeData();
    populateByType(typesDD, list);
}
function updateReg(typeDD, areaDD, nameDD){
    var nameList = collectNameData(typeDD.value);
    populateByName(nameDD,nameList);
    console.log(nameList);
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

function updateFrom(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo,weight){
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
        //for future sort nameDD by area
        //document.getElementById(areaFrom).style.display = "inline-block";
    }
    
    updateReg(typeFromDD, areaFromDD, nameFromDD);
    if(typeToDD.value == "Nearby"){
        //console.log(nameFromDD.value);
        updateNearby(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD);
    }
    
    if(typeFromDD.value == "My Location"){
        //console.log("checking IDs from update");
        clearMenu(nameFromDD);
        addBlank(nameFromDD);
        //console.log(nameFromDD.value);
        findIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo, weight);
    }
}

function updateNearby(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD){
    clearMenu(nameToDD);
    addBlank(nameToDD);
    //console.log("updating NearBy");
    if(typeFrom.value == "My Location"){
        //console.log(typeFromDD.value);
        var list = nearTo(typeFromDD.value);
        populateByName(nameToDD, list);
    } else if(nameFromDD.value != "blank"){
        var list = nearTo(nameFromDD.value);
        populateByName(nameToDD, list);
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
        //for future sort nameDD by area
        //document.getElementById(areaTo).style.display = "inline-block";
        if(typeToDD.value == "Nearby"){
            document.getElementById(areaTo).style.display = "none";
        }
    }
    if(typeToDD.value != "Nearby"){
        updateReg(typeToDD, areaToDD, nameToDD);
    } else {
        updateNearby(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD);
    }
}

function nearTo(value){
    var node;
    for(key in nodes){
        if(nodes[key].name == value){
            node = nodes[key];
        }
    }
    var nearNodeList = [];
    var nearest = .0125;
    for(key in nodes){
        var dist = nodeDistance(node, nodes[key]);
        //console.log(tests[key]);
        if (dist < nearest){
            nearNodeList.push(nodes[key]);
        }
    }
    return nearNodeList;
    
    //byArea
    /*
    var nearID;
    for(key in nodes){
        if(nodes[key].name == value){
            nearID = nodes[key].id;
        }
    }
    toList = collectAreaData(nodes[nearID].areas);
    //console.log("nearToList" );
    //console.log(toList);
    return toList;
    */
}

function getFromID(typeFromDD, areaFromDD, nameFromDD){
    if(typeFromDD.value == "My Location"){
        var fromID = "0000000";
    } else {
        var fromList = collectNameData(typeFromDD.value);
        for(i = 0; i < fromList.length; i++){
            if(nameFromDD.value == fromList[i].name){
                var fromID = fromList[i].id;
            }
        }
    }
    
    return fromID;
}

function getToID(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD){
    var toList = collectNameData(typeToDD.value);
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
    return toID;
}

function checkIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo, weight){
    var typeFromDD = document.getElementById(typeFrom);
    var areaFromDD = document.getElementById(areaFrom);
    var nameFromDD = document.getElementById(nameFrom);
    var typeToDD = document.getElementById(typeTo);
    var areaToDD = document.getElementById(areaTo);
    var nameToDD = document.getElementById(nameTo);
    var weightDD = document.getElementById(weight);
    
    //console.log(typeFromDD.value == "My Location");
    
    fromID = getFromID(typeFromDD, areaFromDD, nameFromDD);
    toID = getToID(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD);


    if (typeToDD.value == "Nearby" && toID == undefined){
        //console.log("updating nearby from checkID");
        updateNearby(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD);
    }
    
    if (fromID != undefined && toID != undefined && weightDD.value != "blank"){
        return[fromID, toID, weightDD.value];
    }
    
    return undefined;
}

function findIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo, weight){
    var IDs = checkIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo, weight);
    //console.log("HI");
    //console.log(IDs);
    //only run the algorithm when both IDs are given
    if (IDs != undefined){
        aStar(IDs[0], IDs[1], IDs[2]);
    }
}


/*
//for future sort nameDD by area
function collectAreaData(list){
    var areaList = [];
    var alreadyHere = false;
    console.log("HI");
    for(var items in list){
        console.log(list[items].areas);
        alreadyHere = false;
        for(var index in areaList){
            if(list[items].areas == areaList[index].areas){
                alreadyHere = true;
                console.log(areaList[index].areas);
            }
        } 
        if(alreadyHere == false){
            console.log();
            areaList.push(list[items]);
        }
    }
    return areaList;
}


//for future sort nameDD by area
function populateByArea(menu, list){
    clearMenu(menu);
    addBlank(menu);
    for(i = 0; i < list.length; i++){
        var newOption = document.createElement("option");
        newOption.value = list[i].areas;
        newOption.innerHTML = list[i].areas;
        menu.options.add(newOption);
    }
}*/
