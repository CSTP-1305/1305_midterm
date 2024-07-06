function findSums(numbers, target) {
    // array is created to store the indices
    const nIndices = new Map();
    
    for (let i = 0; i < numbers.length; i++) {
        const currentNum = numbers[i];
        const element = target - currentNum;
        
        // Check if the element exists in the hash map
        if (nIndices.has(element)) {
            // Return the indices of the two numbers
            return [nIndices.get(element), i];
        }
        
        // Add the current number and its index to the hash map
        nIndices.set(currentNum, i);
        console.log(nIndices)

    }
    
}

const array = [1, 5, 2, 7];
const target = 8;
console.log(findSums(array, target)); 


const array2 = [3, 2, 4];
const target2 = 6;
console.log(findSums(array2, target2)); 

const array3 = [20,1,5,2,11]
target3 = 3
console.log(findSums(array3, target3))
