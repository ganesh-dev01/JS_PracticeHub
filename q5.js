// Q5) Write a JavaScript conditional statement to find the largest of five numbers.


let arr=[100,20,30,40,50]; //five numbers, I've defined in an array

let L;

for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[1] && arr[i]>arr[2] && arr[i]>arr[3] && arr[i]>arr[4]){
         L=arr[i];
    }
}

console.log(L);
