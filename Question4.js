class Node {
    constructor(data) {
      this.data = data; 
      this.next = null; 
    }
  }
  


function checkCycle(hNode) {
    
    let slow = hNode;
    let fast = hNode;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;

        //fast pointer is always one step forward
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;

        }

        if (fast !== null && fast.next !== null) {
        return false;
        }

    }
    
}

// seperate function that creates linked lists to be passed into CheckCycle

function createLinkList(array, position) {
    if (array.length === 0) return null;
    
    let head = new Node(array[0]);
    let current = head;
    let cycleNode = null;
    
    for (let i = 1; i < array.length; i++) {
        current.next = new Node(array[i]);
        current = current.next;
        
        if (i === position) {
            cycleNode = current;
        }

    }
    
    if (position !== -1) {
        current.next = cycleNode;

    }
    
    return head;
}

let hNode = createLinkList(["A", "B", "C", "A"], 0);
console.log(checkCycle(hNode)); 

let hNode2 = createLinkList(["1", "2", "3", null], 0);
console.log(checkCycle(hNode2));

let hNode3 = createLinkList(["1", "2", "3", "1"], 0);
console.log(checkCycle(hNode3));