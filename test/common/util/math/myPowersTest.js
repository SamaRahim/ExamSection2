const assert = require('chai').assert;
const myPower = require('../../../../src/common/util/math/myCube.js');

const num1 = 3;

const num3 = 27;
const num1String = "3";

const num3String = "27"


describe('myPower', function() {
    describe('toPower', function() {
        it('toPower(' + num1 + ') should return number value of "' + num3 + '"', function() {
            let result = myPower.toCube(num1);
            assert.equal(result, num3);
        });

        it('toPower("' + num1String + '") should return number value of "' + num3 + '"', function() {
            let result = myPower.toCube(num1String);
            assert.equal(result, num3);
        });

        it('toPower should return type Number', function() {
            let result = myPower.toCube(num1);
            assert.typeOf(result, 'Number');
        });
    });
})