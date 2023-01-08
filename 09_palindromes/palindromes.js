const palindromes = function (str) {
    let newStr = '';
    let reverseStr = '';
    for(let i = 0; i < str.length; i++) {
        if(/^[A-Za-z]*$/.test(str.charAt(i))) {
            newStr += str.charAt(i).toLowerCase();
        }
    } 
    for(let j = newStr.length-1; j >= 0; j--) {
        reverseStr += newStr.charAt(j);
    }
    return (newStr === reverseStr); 
};


// console.log(palindromes('kayak kayak'));
// console.log(palindromes('abcba'));
// console.log(palindromes('abcbazzd  zdzd'));
// Do not edit below this line
module.exports = palindromes;
