// Q10) Write a function that takes an array of integers and returns the largest 
// difference between any two numbers in the array.

let arr=[2,10,5,15,20];

function check(arr){
    let b=Math.max(...arr);
    let sm=Math.min(...arr);
    let def=b-sm;
    console.log(`the largest difference between any two numbers in the array : ${def}`);
}

check(arr);