//my implementation of a priority queue
//modified to fit the needs for our algorithm

class PriorityQueue {
    constructor() {
        this.array = [null]; //smallest value at index 1, index 0 is not used
        // whill hold pairs in the form of an array [data,priority]
    }

    leftChildIndex(parentIndex) {
        return 2 * parentIndex;
    }

    rightChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    parentIndex(childIndex) {
        return Math.floor(childIndex / 2);
    }

    push(data, priority) {
        var node = [data, priority];
        this.array.push(node);
        this.balanceUp(this.array.length - 1);
    }

    pop() {
        let node = this.array[1]
        let data = node[0];
        let priority = node[1];

        var endNode = this.array.pop(); //get the node at the end

        if (!this.isEmpty()) { // would be empty now if there was only one element to start with
            this.array[1] = endNode;
            this.balanceDown(1);
        }
        return data;
    }

    balanceUp(index) {
        //var node = this.array[index];
        //var nodePriority = node[1];

        while (index > 1) { //cant go over index 1
            var node = this.array[index];
            var nodePriority = node[1];

            var parentIndex = this.parentIndex(index);
            var parentNode = this.array[parentIndex];
            var parentPriority = parentNode[1];
            if (nodePriority > parentPriority) {
                break; // the node is in the right place
            }

            this.swapNodes(index, parentIndex);
            index = parentIndex;
        }
    }

    balanceDown(index) {

        while (true) {
            var node = this.array[index];
            var nodePriority = node[1];

            var swapIndex = 0; //default; can't be 0 since [null]
            var leftIndex = this.leftChildIndex(index);
            var rightIndex = this.rightChildIndex(index);

            //check if left child exists and if it is smaller than node
            if (leftIndex < this.array.length) {
                var leftChild = this.array[leftIndex];
                var leftPriority = leftChild[1];

                if (leftPriority < nodePriority) {
                    swapIndex = leftIndex;
                }
            }

            //check if right child exists and is smaller than leftchild (if it exists) or node otherwise
            if (rightIndex < this.array.length) {
                var rightChild = this.array[rightIndex];
                var rightPriority = rightChild[1];

                if (swapIndex != 0) { //left child exists
                    if (rightPriority < leftPriority) {
                        swapIndex = rightIndex;
                    }
                }
            }

            if (swapIndex == 0) { //no children exist
                break;
            }
            //at least one child exists and the smaller one has been found, swap node with that child
            this.swapNodes(index, swapIndex);
            index = swapIndex; //make other nodes are in the right plcae
        }
    }

    swapNodes(index1, index2) {
        var tempNode = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = tempNode;
    }

    isEmpty() {
        return this.array.length == 1; //not 0 beacuse [null]
    }
}

//testing

var pq = new PriorityQueue();
console.log(pq.array)
/*
pq.push("a", 2);
console.log(pq.array);
pq.push("b", 1);
console.log(pq.array);
pq.push("c", 4);
console.log(pq.array);
pq.push("d", 2);
console.log(pq.array); // should be [null,['b',1],['d',2],['c',4],['a',2]]
console.log(pq.pop());
console.log(pq.array);
*/

for (var i = 1; i <= 6; i++) {
    var num = Math.floor(Math.random() * 20);
    console.log("pushing: " + i + " with priority: " + num);
    pq.push("" + i, num);
    console.log(pq.array);
}
console.log();
while (!pq.isEmpty()) {
    console.log("popped: " + pq.pop());
    console.log(pq.array)
}
