var graph = new Graph();

//graph.setState("0900000", "0900045"); //breaks at node 0905000 since theres no id; probably fixed by putting all nodes together
graph.setState("0900003", "0900008");
var finalPath = slugStar(graph);
console.log("1) Final found path: " + finalPath);

graph.setState("0900000", "0900019");
var finalPath = slugStar(graph);
console.log("2) Final found path: " + finalPath);

//breaks if this is used
/*
graph.setState("0900019", "0900000");
var finalPath = slugStar(graph);
console.log("3) Final found path: " + finalPath);
*/

//slugStar(graph);

//slugStar(graph, graph.getGraphHeur);
//console.log(finalPath);

//function slugStar(graph, heruisticFn=graph.getGraphHeur){ 
//function slugStar(graph, heruisticFn){
function slugStar(graph){
    //NOTE: using graph.getGraphHeur() right now since passing function is not working

    var counter = 0; //testing
    
    var path = [];
    
    startSateId = graph.getStart();
    
    if(graph.isEnd(startSateId)){
        return path;
    }
    
    //initialize data structures
    var visited = [];
    var fringe = new PriorityQueue();
    parentDictionary = {}; // [child]=parent
    pathCostDictionary = {}; //[nodeId] = cost
    
    // initialize start state info
    var START_STATE = "StartState";  //constant
    parentDictionary[startSateId] = START_STATE;
    pathCostDictionary[startSateId] = 0;
    var nodeCost = 0 + graph.getGraphHeur(startSateId);
    fringe.push(startSateId, nodeCost); //make it 0 + heruistic function
    
    //find path if there is one
    while(true){
        if (fringe.isEmpty()){
            //should not come here if there is a solution; failure
            console.error("No solution to Search " + counter); //testing
            //console.error("No solution to Search");
            throw new Error("Exception: No solution to Search. End could not be found.");
        }
        
        node = fringe.pop();
        visited.push(node);
        
        successorStates = graph.getSuccessor(node);
        for (let i = 0; i < successorStates.length; i++) {  
            var successorNode = successorStates[i]; // in form ["ID",Weight]
            //break up the tuple array
            var successorNodeId = successorNode[0];
            var successorNodeWeight  = successorNode[1];
            // check if this node is in the fringe or in the visited list
            var inFringe = fringe.contains(successorNodeId);
            var inVisited = visited.indexOf(successorNodeId) != -1; //returns -1 if not in visited

            //if it is not in in either...
            if(!inFringe && !inVisited){

                //if this is the goal state build the path..
                if(graph.isEnd(successorNodeId)){
                    path.push(successorNodeId);

                    currNodeId = node;
                    //check the parent to get the previous node
                    while(currNodeId != START_STATE){
                        if(currNodeId != START_STATE){
                            path.push(currNodeId);
                        }
                        currNodeId =  parentDictionary[currNodeId];
                    }
                    path.reverse(); // reverse so it's in the right order
                    return path;
                }

                //bookkeeping to keep track of the fringe, visited list, etc 
                visited.push(successorNodeId);
                var costSoFar = pathCostDictionary[node]; //get what the cost ot this node was
                var heruisticValue = graph.getGraphHeur(startSateId); //need to make this the function passed in 
                parentDictionary[successorNodeId] = node; //set the parent of the succesor nodes
                pathCostDictionary[successorNodeId] = costSoFar + successorNodeWeight; //set path cost of this successor node
                var nodeCost = costSoFar + successorNodeWeight + heruisticValue;
                fringe.push(successorNodeId, nodeCost);
            }
        }
    }
}