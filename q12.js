// Q12) Write a function that returns a new array containing only the 
//unique elements from an input array.

let arr = [10, 15, 15, 20, 30, 10, 40, 50];

function check(arr) {
    let s = new Set([...arr]);
    let newarr = [];
    for (let i of s) {
        newarr.push(i);
    }
    return newarr;
}

let result = check(arr);

console.log(result);
