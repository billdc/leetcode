var letterCombinations = function(digits) {
    var letterList = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var resultList = [];
    str = "";
    var getString = function(d, str) {
        if (d.length > 1) {
            var idx = d.substr(0, 1);
            for (var i in letterList[idx]) {
                getString(d.substr(1), str + letterList[idx][i]);
            }
        } else {
            for (var i in letterList[d]) {
                resultList.push(str + letterList[d][i]);
            }
            return;
        }
    }
    getString(digits, "");
    return resultList;
};
