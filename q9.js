// Q9) Given a string, write a function to count the occurrences of each character in 
// the string.




function count(num, arr) {
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            c = c + 1;
        }
    }
    return c;
}


let str = "hello";

let arr = str.split('');

let ch = [];

for (let i of arr) {

    if (!ch.includes(i)) {
        ch.push(i);
        let c = count(i, arr);
        console.log(`${i}: ${c}`);
    }
}




