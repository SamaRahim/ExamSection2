const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare.js');

const num1 = 2;
const num2 = 4;
const num1String = "2";
const num2String = "4";



describe('mySquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + num1 + ') should return number value of "' + num2 + '"', function() {
            let result = mySquare.toSquare(num1);
            assert.equal(result, num2);
        });

        it('toSquare("' + num1String + '") should return number value of "' + num2 + '"', function() {
            let result = mySquare.toSquare(num1String);
            assert.equal(result, num2);
        });

        it('toSquare should return type Number', function() {
            let result = mySquare.toSquare(num1);
            assert.typeOf(result, 'Number');
        });
    });
});