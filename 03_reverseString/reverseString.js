const reverseString = function(str) {
    let res = '';
    for (let i = str.length-1; i >= 0; i--) {
        res += str.charAt(i);
    }
    return res; 
};

console.log(reverseString('hello'));
// Do not edit below this line
module.exports = reverseString;
