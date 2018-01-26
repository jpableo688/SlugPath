var collegelist = ["",];
var marketlist = ["",];
var activitieslist = ["",];
var classroomlist = ["",];
var collectedAlready = false;
function collectData(){
   if (collectedAlready === false){
      for(i = 0; i < nodes.length; i++){
         if(nodes[i].type == "College"){
            collegelist.push(nodes[i].name);
         }
         if(nodes[i].type == "Market"){
            marketlist.push(nodes[i].name);
         }
         if(nodes[i].type == "Activities"){
            activitieslist.push(nodes[i].name);
         }
         if(nodes[i].type == "Classroom"){
            classroomlist.push(nodes[i].name);
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
      var optionarr = collegelist;
   }
   if(initial.value == "Market"){
      var optionarr = marketlist;
   }
   if(initial.value == "Activities"){
      var optionarr = activitieslist;
   }
   if(initial.value == "Classroom"){
      var optionarr = classroomlist;
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
   
   if(initial.value == "College"){
      var optionarr = collegelist;
   }
   if(initial.value == "Market"){
      var optionarr = marketlist;
   }
   if(initial.value == "Activities"){
      var optionarr = activitieslist;
   }
   if(initial.value == "Classroom"){
      var optionarr = classroomlist;
   }
   
   for(i = 0; i < optionarr.length; i++){
      var newOption = document.createElement("option");
      newOption.value = optionarr[i].toLowerCase;
      newOption.innerHTML = optionarr[i];
      dynamic.options.add(newOption);
   }
   
}