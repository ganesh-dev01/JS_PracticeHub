// Q4) Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' 
// values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]


let arr=[NaN, 0, 15, false, -22, '',undefined, 47, null];

let newarr=[];

for(let i=0;i<arr.length;i++){
    if(
        arr[i]!=false &&
        arr[i]!=0 &&
        arr[i]!=undefined &&
        arr[i]!=null &&
        arr[i]!='' &&
        !isNaN(arr[i])
    )
    {
        newarr.push(arr[i])
    }
}

console.log(newarr);
