//my implementation of a priority queue
//modified to fit the needs for our algorithm

class PriorityQueue {
    constructor() {
        this.heap = [null]; //smallest value at index 1, index 0 is not used
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
        this.heap.push(node);
        this.balanceUp(this.heap.length - 1);
    }

    pop() {
        let node = this.heap[1]
        let data = node[0];
        let priority = node[1];

        var endNode = this.heap.pop(); //get the node at the end

        if (!this.isEmpty()) { // would be empty now if there was only one element to start with
            this.heap[1] = endNode;
            this.balanceDown(1);
        }
        return data;
    }

    balanceUp(index) {
        while (index > 1) { //cant go over index 1
            var node = this.heap[index];
            var nodePriority = node[1];

            var parentIndex = this.parentIndex(index);
            var parentNode = this.heap[parentIndex];
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
            var node = this.heap[index];
            var nodePriority = node[1];

            var swapIndex = 0; //default; can't be 0 since [null]
            var leftIndex = this.leftChildIndex(index);
            var rightIndex = this.rightChildIndex(index);

            //check if left child exists and if it is smaller than node
            if (leftIndex < this.heap.length) {
                var leftChild = this.heap[leftIndex];
                var leftPriority = leftChild[1];

                if (leftPriority < nodePriority) {
                    swapIndex = leftIndex;
                }
            }

            //check if right child exists and is smaller than leftchild (if it exists) or node otherwise
            if (rightIndex < this.heap.length) {
                var rightChild = this.heap[rightIndex];
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
        var tempNode = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = tempNode;
    }

    contains(nodeId){ // does not take priority into account; only data
        for (let i = 1; i < this.heap.length; i++) { //index 0 will always have null
            var node = this.heap[i];
            if (node[0] == nodeId) {
                return true;
            }
            
        }
        return false;
    }

    isEmpty() {
        return this.heap.length == 1; //not 0 beacuse [null]
    }
}