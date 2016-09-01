/**
 *
 ** @param {string} s
 *
 ** @return {number}
 *
 **/

var lengthOfLongestSubstring = function(s) {
    var length = s.length;
    if (length < 2) return length;
    var i = 0;
    var pos_map = {};
    var max = 1;
    pos_map[s[0]] = 0;
    for (var j = 1; j < length; j++) {
        if (pos_map[s[j]] !== undefined && (pos_map[s[j]] >= i)) {
            max = Math.max(j - i, max);
            i = pos_map[s[j]] + 1;
        }
        pos_map[s[j]] = j;
    }
    max = Math.max(j - i, max);
    return max;
};

console.log("", lengthOfLongestSubstring(""));
console.log("c", lengthOfLongestSubstring("c"));
console.log("au", lengthOfLongestSubstring("au"));
console.log("abcabcbb", lengthOfLongestSubstring("abcabcbb"));
console.log("bbbbbb", lengthOfLongestSubstring("bbbbb"));
console.log("aabbb", lengthOfLongestSubstring("aabbb"));
console.log("dvdf", lengthOfLongestSubstring("dvdf"));
