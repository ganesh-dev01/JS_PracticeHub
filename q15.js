// Q15) Write a function that reverses a string without using the built-in reverse() method.


let s = "Hello";

function rev(str) {
    let text = '';
    for (let i = str.length - 1; i >= 0; i--) {
        text += str[i];
    }
    console.log(text);

}

rev(s);