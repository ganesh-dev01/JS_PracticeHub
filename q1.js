// Q1) Write a JavaScript program to get the minimum value of an array, after mapping
//  each element to a value using the provided function


let arr=[10,5,20,30,40,25,50,45];

min=arr[0];

arr.map(function(v){
    if(min>v){
        min=v;
    }
});

console.log(min);



