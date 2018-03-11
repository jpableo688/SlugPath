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

function populateByArea(menu, list){
    clearMenu(menu);
    
    var blank = document.createElement("option");
    blank.value = "blank";
    blank.innerHTML = "All";
    menu.options.add(blank);
    
    for(i = 0; i < list.length; i++){
        var newOption = document.createElement("option");
        newOption.value = list[i].areas;
        newOption.innerHTML = list[i].areas;
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
        if(alreadyHere == false && nodes[key].type != undefined){
            typeList.push(nodes[key]);
        }
    }
    typeList.sort(function(a, b){
        var typeA=a.type.toLowerCase(), typeB=b.type.toLowerCase()
        if (typeA < typeB){
            return -1;
        }
        if (typeA > typeB){
            return 1;
        }
        return 0;
    })
    return typeList;
}


function collectNameData(value){
    var nameList = [];
    for(key in nodes){
        if(nodes[key].type == value){
            nameList.push(nodes[key]);
        }
    }
    nameList.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB){
            return -1;
        }
        if (nameA > nameB){
            return 1;
        }
        return 0;
    })
    return nameList;
    
}

function collectAreasByType(value){
    var areaList = [];
    var alreadyHere = false;
    for(key in nodes){
        alreadyHere = false;
        if(nodes[key].type == value){
            for(var index in areaList){
                if(nodes[key].areas == areaList[index].areas){
                    alreadyHere = true;
                    //console.log(areaList[index].areas);
                }
            }
            if(alreadyHere == false && nodes[key].areas != undefined){
                areaList.push(nodes[key]);
                //console.log(nodes[key].areas);
            }
        }
   }
    areaList.sort(function(a, b){
        var areaA=a.areas.toLowerCase(), areaB=b.areas.toLowerCase()
        if (areaA < areaB){
            return -1;
        }
        if (areaA > areaB){
            return 1;
        }
        return 0;
    })
   return areaList;
}

function gatherTypes(types){
    var typesDD = document.getElementById(types);
    var list = collectTypeData();
    populateByType(typesDD, list);
}

function collectNameByArea(typeValue, areaValue){
    var nameList = [];
    for(key in nodes){
        if(nodes[key].type == typeValue && nodes[key].areas == areaValue ){
            nameList.push(nodes[key]);
        }
    }
    return nameList;
}

function updateArea(type, areas, name){
    var typeDD = document.getElementById(type);
    var areaDD = document.getElementById(areas);
    var nameDD = document.getElementById(name);

    if(areaDD.value != "blank"){
        var nameList = collectNameByArea(typeDD.value, areaDD.value);
        populateByName(nameDD,nameList);
    } else {
        updateReg(typeDD, areaDD, nameDD);
    }
}
function updateReg(typeDD, areaDD, nameDD){
    var nameList = collectNameData(typeDD.value);
    populateByName(nameDD,nameList);
    var areaList = collectAreasByType(typeDD.value);
    populateByArea(areaDD,areaList);
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
    
    //hides or unhides other dropdowns
    if(checkIfType(typeFromDD.value)){
        document.getElementById(nameFrom).style.display = "none";
        document.getElementById(areaFrom).style.display = "none";
    } else {
        document.getElementById(nameFrom).style.display = "inline-block";  
        document.getElementById(areaFrom).style.display = "inline-block";
    }
    
    updateReg(typeFromDD, areaFromDD, nameFromDD);
    
    if(typeToDD.value == "Nearby"){
        clearMenu(nameToDD);
        addBlank(nameToDD);
        //updateNearby(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo);
    }
    
    if(typeFromDD.value == "My Location"){
        clearMenu(nameFromDD);
        addBlank(nameFromDD);
    }
}

function updateNearby(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo){
    var typeFromDD = document.getElementById(typeFrom);
    var areaFromDD = document.getElementById(areaFrom);
    var nameFromDD = document.getElementById(nameFrom);
    var typeToDD = document.getElementById(typeTo);
    var areaToDD = document.getElementById(areaTo);
    var nameToDD = document.getElementById(nameTo);
    
    if(typeToDD.value == "Nearby"){
        clearMenu(nameToDD);
        addBlank(nameToDD);
        if(typeFromDD.value == "My Location"){
            var list = nearTo(typeFromDD.value);
            //console.log(list);
            populateByName(nameToDD, list);
        } else if(nameFromDD.value != "blank"){
            var list = nearTo(nameFromDD.value);
            //console.log(list);
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
    
    //hides or unhides other dropdowns
    if(checkIfType(typeToDD.value)){
        document.getElementById(nameTo).style.display = "none";
        document.getElementById(areaTo).style.display = "none";

    } else {
        document.getElementById(nameTo).style.display = "inline-block";       
        document.getElementById(areaTo).style.display = "inline-block";
        if(typeToDD.value == "Nearby"){
            document.getElementById(areaTo).style.display = "none";
        }
    }
    
    if(typeToDD.value != "Nearby"){
        updateReg(typeToDD, areaToDD, nameToDD);
    } else {
        updateNearby(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo);
    }
}

//finds nearest node from my location
function nearTo(value){
    var node;
    for(key in nodes){
        if(nodes[key].name == value){
            node = nodes[key];
        }
    }
    var nearNodeList = [];
    var nearest = .05;
    for(key in nodes){
        var dist = nodeDistance(node, nodes[key]);
        if (dist < nearest && nodes[key].name != undefined){
            nearNodeList.push(nodes[key]);
        }
    }
    return nearNodeList;
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

function checkIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo){
    var typeFromDD = document.getElementById(typeFrom);
    var areaFromDD = document.getElementById(areaFrom);
    var nameFromDD = document.getElementById(nameFrom);
    var typeToDD = document.getElementById(typeTo);
    var areaToDD = document.getElementById(areaTo);
    var nameToDD = document.getElementById(nameTo);

    fromID = getFromID(typeFromDD, areaFromDD, nameFromDD);
    toID = getToID(typeFromDD,areaFromDD,nameFromDD,typeToDD, areaToDD,nameToDD);

    //console.log(fromID + toID);
    if (typeToDD.value == "Nearby" && toID == undefined){
        console.log("updating nearby under checkIDs");
        updateNearby(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo);
    }
    if (fromID != undefined && toID != undefined){
        return[fromID, toID];
    }
    return undefined;
}

function findIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo){
    var IDs = checkIDs(typeFrom, areaFrom, nameFrom, typeTo, areaTo, nameTo);
    //console.log(IDs);
    if (IDs != undefined){
        aStar(IDs[0], IDs[1]);
    }
}

