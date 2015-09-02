module.exports = function average(...numbers) {
    var count = numbers.reduce((x,y) => x+y, 0)
    return count/numbers.length;
};
