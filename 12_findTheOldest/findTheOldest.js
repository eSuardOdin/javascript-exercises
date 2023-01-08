const findTheOldest = function(people) {
    const year = new Date().getFullYear();
    const getAge = (person) => {
        return (person.hasOwnProperty('yearOfDeath') ? person.yearOfDeath - person.yearOfBirth : year - person.yearOfBirth);
    }
    let oldest = people.reduce((firstPers, x) => {
        firstPers = getAge(firstPers) < getAge(x) ? x : firstPers;
        return firstPers;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
