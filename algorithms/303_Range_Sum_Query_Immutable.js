/**
 ** @constructor
 ** @param {number[]} nums
 **/
var NumArray = function(nums) {
    this.nums = nums;
    this.map = [];
};

/**
 ** @param {number} i
 ** @param {number} j
 ** @return {number}
 **/
NumArray.prototype.sumRange = function(i, j) {
    if (this.map[i] === undefined) {
        this.map[i] = {};
    }
    if (this.map[i][j] === undefined) {
        var sum = 0;
        for (var idx = i; idx <= j; idx++) {
            sum += this.nums[idx];
        }
        this.map[i][j] = sum;
        console.log(sum);
        return sum;
    } else {
        console.log(this.map[i][j]);
        return this.map[i][j];
    }
};


/**
 ** Your NumArray object will be instantiated and called as such:
 ** var numArray = new NumArray(nums);
 ** numArray.sumRange(0, 1);
 ** numArray.sumRange(0, 2);
 **/

var numArr = new NumArray([0, 1, 2, 3, 4, 50]);
numArr.sumRange(0, 1);
numArr.sumRange(0, 1);
numArr.sumRange(2, 3);
numArr.sumRange(2, 3);
