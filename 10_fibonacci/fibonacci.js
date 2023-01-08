const fibonacci = function(baseNb) {
    const nb = Number(baseNb);
    if (nb < 0) return 'OOPS';
    let a = 0;
    let b = 1;
    let c = 0;
    for(let i = 1; i <= nb; i++) {
        c = a;
        a = b;
        b += c;
    }
    return a;
};

// console.log(fibonacci(6));
// console.log(fibonacci('6'));


// Do not edit below this line
module.exports = fibonacci;
