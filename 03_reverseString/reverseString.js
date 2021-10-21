const reverseString = function(str) {
    rstring = ''
    for (let i = str.length ; i >= 0; i--){
        rstring = rstring + str.charAt(i)
    }
    return rstring;
};

// Do not edit below this line
module.exports = reverseString;
