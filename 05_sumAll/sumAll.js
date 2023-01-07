const sumAll = function(nb1, nb2) {
    if((typeof nb1) !== "number" || (typeof nb2) !== "number" || nb1 < 0 || nb2 < 0) return 'ERROR';
    let res = 0, largest = 0, lowest = 0;
    if (nb1 < nb2) {
        largest = nb2;
        lowest = nb1; 
    } else {
        largest = nb1;
        lowest = nb2;
    }
    while(lowest <= largest) {
        res += lowest;
        lowest++;
    }
    return res; 
};
// Do not edit below this line
module.exports = sumAll;
