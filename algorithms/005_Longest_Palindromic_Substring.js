/**
 *
 ** @param {string} s
 ** @return {string}
 *
 **/

var longestPalindrome = function(s) {
    if (s.length < 3) return s;
    var max = 0;
    var sum, isEven, j, str;
    var index, length;
    for (var i = 1; i < s.length; i++) {
        j = 1;
        if (s[i] == s[i + 1]) {
            isEven = 1;
        } else {
            isEven = 0;
        }
        while ((i - j) >= 0 && (i + j + isEven) < s.length) {
            if (s[i - j] == s[i + j + isEven]) {
                j++;
            } else {
                break;
            }
        }

        if (j > max) {
            max = j;
            index = i;
        }
    }
    str = s.substr(index - max + 1, max * 2 + isEven);
    var allSame = true;
    for (i = 1; i < str.length; i++) {
        if (str[i - 1] != str[i]) {
            allSame = false;
            break;
        }
    }
    if(allSame){
        if(str[0]==s[index+max+isEven+1]){
            str = str+s[index+max+isEven+1];
        };
    }
    console.log(str);
    return str;
};

longestPalindrome("ccc");
longestPalindrome("cccc");
longestPalindrome("ccccc");
longestPalindrome("cccccc");
longestPalindrome("aba");
longestPalindrome("abb");
longestPalindrome("abba");
longestPalindrome("abdba");
longestPalindrome("abcdkllkdc");
longestPalindrome("zxcnbbncqwe");
