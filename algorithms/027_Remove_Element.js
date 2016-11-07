var removeElement = function(nums, val) {
    if (nums.length == 1) {
        if (nums[0] == val) {
            nums = [];
        }
        return nums;
    }
    var i = 0;
    var j = nums.length - 1;
    var dup = 0;
    while (i < j) {
        while (nums[i] != val) {
            i++;
        }
        while (nums[j] == val) {

            dup++;
            j--;
        }
        if (i < j) {
            nums[i] = nums[j];
            nums[j] = val;
            dup++;
        }
        i++;
    }
    nums.splice(i - 1, dup);
};
