// Q14)Write a function that finds the second largest number in an array.

let arr=[25,35,45,60,100];

function find(arr){
    let c=arr.sort(function(a,b){
        return a-b
    });
    return c[c.length-2];
}

let result=find(arr);

console.log(result);
