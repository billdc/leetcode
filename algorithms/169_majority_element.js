/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length;
    var count = [];
    var i;
    for(i=0;i<len;i++){
        if (count[nums[i]] === undefined){
            count[nums[i]] = 0;
        } 
        count[nums[i]] = count[nums[i]]+1;
        if(count[nums[i]]>len/2){
            return nums[i];
        }
    }
};