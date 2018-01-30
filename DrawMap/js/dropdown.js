var collegelist = ["",];
var marketlist = ["",];
var activitieslist = ["",];
var classroomlist = ["",];
var collectedAlready = false;
var checkTo = false;
var checkFrom = false;
var toID;
var fromID;
var optionFromArr;
var optionToArr;

function collectData(){
   if (collectedAlready === false){
      for(i = 0; i < nodes.length; i++){
         if(nodes[i].type == "College"){
            collegelist.push(nodes[i]);
         }
         if(nodes[i].type == "Market"){
            marketlist.push(nodes[i]);
         }
         if(nodes[i].type == "Activities"){
            activitieslist.push(nodes[i]);
         }
         if(nodes[i].type == "Classroom"){
            classroomlist.push(nodes[i]);
         }
      }
      collectedAlready = true;
   }
}

function optfromquery(initfrom, dynafrom){
   collectData();

   var initial = document.getElementById(initfrom);
   var dynamic = document.getElementById(dynafrom);   
   
   dynamic.innerHTML ="";
   
   if(initial.value == "College"){
      optionFromArr = collegelist;
   }
   if(initial.value == "Market"){
      optionFromArr = marketlist;
   }
   if(initial.value == "Activities"){
      optionFromArr = activitieslist;
   }
   if(initial.value == "Classroom"){
      optionFromArr = classroomlist;
   }
   
   for(i = 0; i < optionFromArr.length; i++){
      var newOption = document.createElement("option");
      newOption.value = optionFromArr[i].name;
      newOption.innerHTML = optionFromArr[i].name;
      dynamic.options.add(newOption);
   }
   
}

function opttoquery(initto, dynato){
   
   collectData();

   var initial = document.getElementById(initto);
   var dynamic = document.getElementById(dynato);
   
   dynamic.innerHTML ="";
   
   if(initial.value == "College"){
      optionToArr = collegelist;
   }
   if(initial.value == "Market"){
      optionToArr = marketlist;
   }
   if(initial.value == "Activities"){
      optionToArr = activitieslist;
   }
   if(initial.value == "Classroom"){
      optionToArr = classroomlist;
   }
   
   for(i = 0; i < optionToArr.length; i++){
      var newOption = document.createElement("option");
      newOption.value = optionToArr[i].name;
      newOption.innerHTML = optionToArr[i].name;
      dynamic.options.add(newOption);
   }
   
}

function checkDropDownTo(dropdownopt){
   optTo = document.getElementById(dropdownopt);
   for(i = 0; i < optionToArr.length; i++){
      if(optTo.value == optionToArr[i].name){
         toID = optionToArr[i].id;
      }
   }
   if (fromID != undefined && toID != undefined){
      aStar(fromID, toID);
   }
}

function checkDropDownFrom(dropdownopt){
   optFrom = document.getElementById(dropdownopt);
   for(i = 0; i < optionFromArr.length; i++){
      if(optFrom.value == optionFromArr[i].name){
         fromID = optionFromArr[i].id;
      }
   }
   if (fromID != undefined && toID != undefined){
      aStar(fromID, toID);
   }
}