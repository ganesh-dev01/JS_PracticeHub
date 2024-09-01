// Q17)Write a function that takes a string and returns true if the string is a palindrome,
// false otherwise. Ignore non-alphanumeric characters.



let str = "ollo"

function checkP(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let nwstr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        nwstr += str[i];
    }

    if (nwstr === str) {
        console.log("Palindrom");
    } else {
        console.log("Not Palindrom");
    }

}

checkP(str);