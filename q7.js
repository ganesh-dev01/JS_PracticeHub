// Q7) Given an array of numbers, write a function to find the largest and 
// smallest numbers in the array.  [Avoid using Math.min & Math.max method]

let arr=[10,5,6,20,15,17,16,15];

max=arr[0];
min=arr[0];

for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
    if(min>arr[i]){
        min=arr[i];
    }
}

console.log(`largeest number: ${max}
and smallest number: ${min}`);
