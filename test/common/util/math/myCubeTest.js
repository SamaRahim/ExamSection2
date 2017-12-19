const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube.js');

const num1 = 3;
const num2 = 27;
const num1String = "3";
const num2String = "27";



describe('myCube', function() {
    describe('toCube', function() {
        it('toCube(' + num1 + ') should return number value of "' + num2 + '"', function() {
            let result = myCube.toCube(num1);
            assert.equal(result, num2);
        });

        it('toCube("' + num1String + '") should return number value of "' + num2 + '"', function() {
            let result = myCube.toCube(num1String);
            assert.equal(result, num2);
        });

        it('toCube should return type Number', function() {
            let result = myCube.toCube(num1);
            assert.typeOf(result, 'Number');
        });
    });
});