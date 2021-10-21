const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    if (number === 0) {
        return 0;
    }
    let priorTwo = 0;
    let priorOne = 1;
    let temporary
    for (let i = 1; i < number; i++) {
        temporary = priorOne;
        priorOne = priorTwo + priorOne;
        priorTwo = temporary;
    }
    return priorOne;
};
// Do not edit below this line
module.exports = fibonacci;
