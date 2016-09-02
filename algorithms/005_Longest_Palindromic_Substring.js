/**
 *
 ** @param {string} s
 ** @return {string}
 *
 **/

var longestPalindrome = function(s) {
    if (s.length < 3) return s;
    var index = 0;
    var length = 0;
    var isEven = 0;
    var tempLen;
    for (var i = 0; i < s.length; i++) {
        j = 0;
        if (s[i - 1] == s[i + 1]) {
            while ((i + j) < s.length && (i - j) >= 0) {
                if (s[i - j] == s[i + j]) {
                    tempLen = j * 2 + 1;
                    if (tempLen > length) {
                        index = i - j;
                        length = tempLen;
                        isEven = 0;
                    }
                    j++;
                } else {
                    break;
                }
            }
        }
        j = 0;
        if (s[i] == s[i + 1]) {
            while ((i + j + 1) < s.length && (i - j) >= 0) {
                if (s[i - j] == s[i + j + 1]) {
                    tempLen = j * 2 + 2;
                    if (tempLen > length) {
                        index = i - j;
                        length = tempLen;
                        isEven = 1;
                    }
                    j++;
                } else {
                    break;
                }
            }
        }
    }
    console.log(s, "\t", s.substr(index, length));
    return s.substr(index.length);
};

longestPalindrome("ccc");
longestPalindrome("ccd");
longestPalindrome("cccc");
longestPalindrome("abadd");
longestPalindrome("cccccc");
longestPalindrome("aba");
longestPalindrome("abb");
longestPalindrome("abba");
longestPalindrome("abdba");
longestPalindrome("abcdkllkdc");
longestPalindrome("zxcnbbncqwe");
