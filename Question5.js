function checkValidity(string) {
    const array = [];

    const match = {
        ')': '(',
        ']': '[',
        '}': '{'

    };

    for (let brack of string) {

        if (brack === '(' || brack === '{' || brack === '[') {
            array.push(brack);

        } else if (brack === ')' || brack === '}' || brack === ']') 
            {
            if (array.pop() !== match[brack]) {
                return false;
            }

        }

    
    }

    if (array.length === 0) {
        return true
    }
}

let string = "()";
console.log(checkValidity(string)); 

let string2 = "(){}[]";
console.log(checkValidity(string2)); 

let string3 = "([})";
console.log(checkValidity(string3)); 

let string4 = "[({})]";
console.log(checkValidity(string4)); 

let string5 = " ";
console.log(checkValidity(string5)); 
