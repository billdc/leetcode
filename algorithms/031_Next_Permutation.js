var nextPermutation = function(nums) {
    if (nums.length > 1) {
        var pos = -1;
        var len = nums.length - 1;
        var temp;
        for (var i = 1; i <= len; i++) {
            if (nums[i] > nums[i - 1]) {
                pos = i;
            }
        }
        if (pos == -1) {
            for (var i = 0; i < (len + 1) / 2; i++) {
                temp = nums[i];
                nums[i] = nums[len - i];
                nums[len - i] = temp;

            }
        } else if (pos == len) {
            temp = nums[len - 1];
            nums[len - 1] = nums[len];
            nums[len] = temp;
        } else {
            var rest = [];
            temp = nums[pos];
            rest.push(nums[pos - 1]);
            for (var i = pos + 1; i <= len; i++) {
                if (nums[i] < temp && nums[i] > nums[pos - 1]) {
                    rest.push(temp);
                    temp = nums[i];
                } else {
                    rest.push(nums[i]);
                }
            }
            nums[pos - 1] = temp;
            rest.sort(function(a, b) {
                return a - b;
            });
            for (var i = 0; i < rest.length; i++) {
                nums[pos + i] = rest[i];
            }
            console.log(rest);
            console.log(nums);
        }
    }
};

var nums = [11, 12, 0, 27, 3, 11, 21, 9, 0, 15, 26, 27, 17, 24, 0, 16, 4, 17, 14, 8, 15, 8, 2, 16, 10, 6, 6, 24, 16, 2, 18, 19, 6, 10, 17, 10, 21, 0, 11, 13, 7, 7, 2, 16, 24, 25, 2, 20, 12, 9, 20, 19];
nextPermutation(nums)
