const getTheTitles = function(array) {
    const bookTitles = array.map(function(book) {
        return book["title"];
    })
    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;
