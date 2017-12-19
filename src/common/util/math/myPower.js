const myCube = require('./myCube.js');
const mySquare = require('./mySquare.js');


module.exports = {

    toSquare: function(inpNum) {
        return mySquare.toSquare(inpNum);
    },
    toCube: function(inpNum) {
        return myCube.toCube(inpNum);
    }


}