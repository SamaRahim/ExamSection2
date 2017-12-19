module.exports = {

    toCube: function(inpNum) {

        var num1 = NaN;

        if (typeof inpNum === "number") {
            num1 = inpNum;
        } else if (typeof inpNum === "string" && typeof Number(inpNum) === "number") {
            num1 = Number(inpNum);
        }


        return num1 * num1 * num1;
    }
}