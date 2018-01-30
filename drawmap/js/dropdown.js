var residentiallist = ["",];
var marketlist = ["",];
var activitieslist = ["",];
var academiclist = ["",];
var studentservlist = ["",];
var dininghalllist = ["",];
var foodgolist = ["",];
var otherlist = ["",];

var collectedAlready = false;
function collectData(){
   if (collectedAlready === false){
      for(i = 0; i < nodes.length; i++){
         if(nodes[i].type == "Residential"){
            residentiallist.push(nodes[i].name);
         }
         if(nodes[i].type == "Market"){
            marketlist.push(nodes[i].name);
         }
         if(nodes[i].type == "Activities"){
            activitieslist.push(nodes[i].name);
         }
         if(nodes[i].type == "Academic"){
            academiclist.push(nodes[i].name);
         }
         if(nodes[i].type == "Student Services"){
            studentservlist.push(nodes[i].name);
         } 
         if(nodes[i].type == "Dining Hall"){
            dininghalllist.push(nodes[i].name);
         } 
         if(nodes[i].type == "Food To Go"){
            foodgolist.push(nodes[i].name);
         }
         if(nodes[i].type == "Other"){
            otherlist.push(nodes[i].name);
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
      var optionarr = residentiallist;
   }
   if(initial.value == "Market"){
      var optionarr = marketlist;
   }
   if(initial.value == "Activities"){
      var optionarr = activitieslist;
   }
   if(initial.value == "Academic"){
      var optionarr = academiclist;
   }
   if(initial.value == "Student Services"){
      var optionarr = studentservlist;
   }
   if(initial.value == "Dining Hall"){
      var optionarr = dininghalllist;
   }
   if(initial.value == "Food To Go"){
      var optionarr = foodgolist;
   }
   if(initial.value == "Other"){
      var optionarr = otherlist;
   }    
    
   for(i = 0; i < optionarr.length; i++){
      var newOption = document.createElement("option");
      newOption.value = optionarr[i].toLowerCase;
      newOption.innerHTML = optionarr[i];
      dynamic.options.add(newOption);
   }
   
}

function opttoquery(initto, dynato){
   collectData();

   var initial = document.getElementById(initto);
   var dynamic = document.getElementById(dynato);
   
   dynamic.innerHTML ="";
   
   if(initial.value == "Residential"){
      var optionarr = residentiallist;
   }
   if(initial.value == "Market"){
      var optionarr = marketlist;
   }
   if(initial.value == "Activities"){
      var optionarr = activitieslist;
   }
   if(initial.value == "Academic"){
      var optionarr = academiclist;
   }
   if(initial.value == "Student Services"){
      var optionarr = studentservlist;
   }
   if(initial.value == "Dining Hall"){
      var optionarr = dininghalllist;
   }
    if(initial.value == "Food To Go"){
      var optionarr = foodgolist;
   }
   if(initial.value == "Other"){
      var optionarr = otherlist;
   }
   
   for(i = 0; i < optionarr.length; i++){
      var newOption = document.createElement("option");
      newOption.value = optionarr[i].toLowerCase;
      newOption.innerHTML = optionarr[i];
      dynamic.options.add(newOption);
   }
   
}