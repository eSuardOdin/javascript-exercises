const removeFromArray = function(...x) {
    const arr = arguments[String(0)];
    let newArr = arr;
    for(let i = 1; i < arguments.length; i++) {
        newArr = newArr.filter(el => el !== arguments[i]);
    }
    return newArr;
};
// console.log(removeFromArray([1,2,3,4,5,'roger','lol',(52+2)], 2,'roger','loooool', 54));


// Do not edit below this line
module.exports = removeFromArray;
