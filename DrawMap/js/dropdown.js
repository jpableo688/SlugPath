var checkTo = false;
var checkFrom = false;
var toID;
var fromID;
var secondlist = [];

function collectFirstData(){
   var firstlist = [];
   //console.log("am I here");
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

function optfromStart(){
   var initial = document.getElementById("initfrom");
   //initial.innerHTML ="";
   var firstlist = collectFirstData();
   for(i = 0; i < firstlist.length; i++){
      var newOption = document.createElement("option");
      newOption.value = firstlist[i].type;
      newOption.innerHTML = firstlist[i].type;
      initial.options.add(newOption);
   }
}

function opttoStart(){
   var initial = document.getElementById("initto");
   //initial.innerHTML ="";
   var firstlist = collectFirstData();
   for(i = 0; i < firstlist.length; i++){
      var newOption = document.createElement("option");
      newOption.value = firstlist[i].type;
      newOption.innerHTML = firstlist[i].type;
      initial.options.add(newOption);
   }
}

function optfromquery(){
   var initial = document.getElementById("initfrom");
   var dynamic = document.getElementById("dynafrom");   
   
   //dynamic.innerHTML ="";
   var secondlist = collectSecondData(initial.value);
   
   for(i = 0; i < secondlist.length; i++){
      var newOption = document.createElement("option");
      newOption.value = secondlist[i].name;
      newOption.innerHTML = secondlist[i].name;
      dynamic.options.add(newOption);
   }
}

function opttoquery(){
   var initial = document.getElementById("initto");
   var dynamic = document.getElementById("dynato");
   
   //dynamic.innerHTML ="";
   var secondlist = collectSecondData(initial.value);    
    
   for(i = 0; i < secondlist.length; i++){
      var newOption = document.createElement("option");
      newOption.value = secondlist[i].name;
      newOption.innerHTML = secondlist[i].name;
      dynamic.options.add(newOption);
   }

}
function checkFirstTo(){ 
   optFirstTo = document.getElementById("initto");
   if (optFirstTo.value == "Nearby" || optFirstTo.value == "empty"){
      if(optFirstTo.value == "Nearby"){
         //Nearby();
      }
      document.getElementById("dynato").style.display = "none";
   } else {
      document.getElementById("dynato").style.display = "inline-block";
   }
}
function checkSecondTo(){
   optSecondTo = document.getElementById("dynato");
   
   for(i = 0; i < secondlist.length; i++){
      if(optSecondTo.value == secondlist[i].name){
         toID = secondlist[i].id;
      }
   }
   if (fromID != undefined && toID != undefined){
      aStar(fromID, toID);
   }
}

function checkFirstFrom(){
   optFirstFrom = document.getElementById("initfrom");
   if (optFirstFrom.value == "My Location" || optFirstFrom.value == "empty"){
      if(optFirstFrom.value == "My Location"){
         //myLocation();
      }
      document.getElementById("dynafrom").style.display = "none";
   } else {
      document.getElementById("dynafrom").style.display = "inline-block";
   }
}
function checkSecondFrom(){
   optSecondFrom = document.getElementById("dynafrom");
   for(i = 0; i < secondlist.length; i++){
      if(optSecondFrom.value == secondlist[i].name){
         fromID = secondlist[i].id;
      }
   }
   if (fromID != undefined && toID != undefined){
      aStar(fromID, toID);
   }
}