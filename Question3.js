function generatePermutation(word) {
    const results = [];

    // function that swaps characters in a string
    function swap(a, b, c) {
        const array = a.split('');

        array[b] = array[c];

        return array.join('');
    }

    // Recursive function to start permutations
    function permute(a) {
       
    }

    // start recursion
    permute(word - 1);

    return results;
}


// let string = "ABC";
// console.log(generatePermutation(string)); 
