/**
 *  * @param {number} n
 *   * @return {boolean}
 *    */
var isHappy = function(n) {
    var resultMap = {};
    var flag = true;
    var result = false;
    var sum;
    var str;
    while (flag) {
        str = n + "";
        if (str[0] == 1) {
            if (Math.pow(10, str.length - 1) == n) {
                result = true;
                break;
            }
        }
        sum = 0;
        for (var i = 0; i < str.length; i++) {
            sum = str[i] * str[i] + sum;
        }
        n = sum;
        if (resultMap[n] == 1) {
            break;
        }
        resultMap[n] = 1;
    }
    console.log(result);
    return result;
};

isHappy(200);
isHappy(19);
isHappy(1);
isHappy(0);;
