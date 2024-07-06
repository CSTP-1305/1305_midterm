function findLostNum(array, elements) {
    const idealSum = (elements * (elements + 1)) / 2;
    
    // Calculated the actual sum of the numbers in the array
    //** */
    const TrueSum = array.reduce((list, nums) => list + nums);
    
    // The missing number is found by subtracting between the ideal sum 
    // and the true sum
    return idealSum - TrueSum;
}


const array = [5, 4, 1, 2];
const number = 5;
console.log(findLostNum(array, number));

const array2 = [9, 5, 3, 2, 6, 1, 7, 8, 10]
const number2 = 10
console.log(findLostNum(array2, number2));

const array3 = [2,3,1,5]
const number3 = 5
console.log(findLostNum(array3, number3));

const array4 = [1,2,3,4,5]
const number4 = 6
console.log(findLostNum(array4, number4));
