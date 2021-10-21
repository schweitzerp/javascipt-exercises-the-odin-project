var removeFromArray = function(array, ...valuesToRemove) {
    //let arrayLength = array.length;
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < valuesToRemove.length; j++){
            if (array[i] === valuesToRemove[j]){
                array.splice(i, 1)
                i--
                //arrayLength = array.length;
            }

        }
    }
    return array;
};
console.log(removeFromArray([1,2,3,4],3, 2))// Do not edit below this line
module.exports = removeFromArray;
