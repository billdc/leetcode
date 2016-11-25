/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var strs = str.split(" ");
    if (pattern.length !== strs.length) {
        return false;
    }
    var len = pattern.length;
    var map1 = {};
    var map2 = {};
    for (var i = 0; i < len; i++) {
        if (map1[pattern[i]] == undefined && map2[strs[i]] == undefined) {
            map1[pattern[i]] = strs[i];
            map2[strs[i]] = pattern[i];
            continue;
        }
        if (map1[pattern[i]] !== strs[i] ||
            map2[strs[i]] !== pattern[i]) {
            return false;
        }
    }
    return true;
};
