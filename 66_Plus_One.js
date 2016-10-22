var plusOne = function(digits) {
    var add = 1;
    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + add;
        if (digits[i] >= 10) {
            add = 1;
            digits[i] = digits[i] - 10;
        } else {
            add = 0;
        }
    }
    if (add > 0) {
        digits.unshift(1);
    }
    return digits;
};
