//const myObject = { a: 1, b: 2, c: 3 }; Obtain the values of this object in an array


const myObject = 
{ 
  a: 1, 
  b: 2, 
  c: 3 
}

let arr=[];

let c=Object.entries(myObject);

for(let i=0;i<c.length;i++){
    arr.push(c[i][1])
}

console.log(arr);
