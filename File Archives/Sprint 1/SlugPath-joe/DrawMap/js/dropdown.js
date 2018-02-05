var residentiallist = ["",];
var marketlist = ["",];
var activitieslist = ["",];
var academiclist = ["",];
var studentservlist = ["",];
var dininghalllist = ["",];
var foodgolist = ["",];
var otherlist = ["",];

var collectedAlready = false;
var checkTo = false;
var checkFrom = false;
var toID;
var fromID;
var optionFromArr;
var optionToArr;

function collectData(){
   if (collectedAlready === false){
      for(key in nodes){
         if(nodes[key].type == "Residential"){
            residentiallist.push(nodes[key]);
         }
         if(nodes[key].type == "Market"){
            marketlist.push(nodes[key]);
         }
         if(nodes[key].type == "Activities"){
            activitieslist.push(nodes[key]);
         }
         if(nodes[key].type == "Academic"){
            academiclist.push(nodes[key]);
         }
         if(nodes[key].type == "Student Services"){
            studentservlist.push(nodes[key]);
         } 
         if(nodes[key].type == "Dining Hall"){
            dininghalllist.push(nodes[key]);
         } 
         if(nodes[key].type == "Food To Go"){
            foodgolist.push(nodes[key]);
         }
         if(nodes[key].type == "Other"){
            otherlist.push(nodes[key]);
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
   
   if(initial.value == "Residential"){
      optionFromArr = residentiallist;
   }
   if(initial.value == "Market"){
      optionFromArr = marketlist;
   }
   if(initial.value == "Activities"){
      optionFromArr = activitieslist;
   }
   if(initial.value == "Academic"){
      optionFromArr = academiclist;
   }
   if(initial.value == "Student Services"){
      optionFromArr = studentservlist;
   }
   if(initial.value == "Dining Hall"){
      optionFromArr = dininghalllist;
   }
   if(initial.value == "Food To Go"){
      optionFromArr = foodgolist;
   }
   if(initial.value == "Other"){
      optionFromArr = otherlist;
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
   
   if(initial.value == "Residential"){
      optionToArr = residentiallist;
   }
   if(initial.value == "Market"){
      optionToArr = marketlist;
   }
   if(initial.value == "Activities"){
      optionToArr = activitieslist;
   }
   if(initial.value == "Academic"){
      optionToArr = academiclist;
   }
   if(initial.value == "Student Services"){
      optionToArr = studentservlist;
   }
   if(initial.value == "Dining Hall"){
      optionToArr = dininghalllist;
   }
   if(initial.value == "Food To Go"){
      optionToArr = foodgolist;
   }
   if(initial.value == "Other"){
      optionToArr = otherlist;
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