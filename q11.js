// Q11) Write a function that returns the sum of all numbers in an array. 

let arr=[10,20,30,50];

function sum(arr){
    let s=0;
    for(let i of arr){
        s=s+i;
    }
    return s;
}

let result=sum(arr);

console.log(result);
