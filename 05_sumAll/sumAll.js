const sumAll = function(firstInt, secondInt) {
    if (!(typeof firstInt == 'number') || !(typeof secondInt =='number') || (Math.sign(firstInt) == -1) || (Math.sign(secondInt) == -1)){
        return "ERROR"
    }
    else{
        let answer = 0
        let lowerInt = 0
        let higherInt = 0
        if (firstInt < secondInt){
            lowerInt = firstInt
            higherInt = secondInt
        }
        else {
            lowerInt = secondInt
            higherInt = firstInt
        }
        for (let i = lowerInt; i <= higherInt; i++){
            answer += i;
        }
        return answer;
    }
};

// Do not edit below this line
module.exports = sumAll;
