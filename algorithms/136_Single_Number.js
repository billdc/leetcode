var singleNumber = function(nums) {
    var flag = 0;
    for (var i = 0; i < nums.length; i++) {
        flag = flag ^ nums[i];
    }
    return flag;
};

var nums=[1,2,3,4,4,5,5,3,1];
var res = singleNumber(nums);
console.log(res);
