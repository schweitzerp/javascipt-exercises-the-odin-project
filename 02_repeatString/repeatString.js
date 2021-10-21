const repeatString = function(string, num) {
    let newString = ''
    if (Math.sign(num) == -1) {
        return 'ERROR'
    }
    else{
        for (i = 1; i <= num; i++){
              newString = newString + string;
              }
             return newString
        }
};

// Do not edit below this line
module.exports = repeatString;
