// Q13) Implement a function that finds the index of a specific element in an array.
//  If the element is not found, the function should return -1. 

let arr = [10, 20, 30];

function check(elm, arr) {
    let c;
    for (let i in arr) {
        if (elm == arr[i]) {
            c = i;
        }
    }
    return c;
}

let result = check(30, arr);

console.log(result);
