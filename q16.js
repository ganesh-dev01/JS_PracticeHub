// Q16)Create a function that takes an array of numbers and returns the sum of all
// unique numbers in the array.

let arr = [10, 10, 20, 30, 20, 40, 50, 50];

function Unisum(arr){
    let s=new Set([...arr]);
    let sum=0;
    for(let i of s){
        sum=sum+i;
    }
    console.log(sum);
}

Unisum(arr);