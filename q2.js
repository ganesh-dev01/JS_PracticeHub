// Q2) Write a JavaScript program to create an object from the specified object,
//  where all keys are in lowercase

let student={
    Name:"Ganesh saha",
    Roll:20,
    sec:"A"
}

let arr=Object.entries(student);


for(let i=0;i<arr.length;i++){
    arr[i][0]=arr[i][0].toLowerCase();
}

student=Object.fromEntries(arr);

console.log(student);




