// Q16)Create a function that takes an array of numbers and returns the sum of all
// unique numbers in the array.

let arr = [10, 10, 20, 30, 20, 40, 50, 50];

function UniSum(arr) {
    let s = new Set([...arr]);
    let newarr = [];
    let x = 0;
    for (let i of s) {
        x = x + i;
    }
    console.log(x);

}

UniSum(arr);