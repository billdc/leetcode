var reverseWords = function(str) {
    var tmp = str.split(" ");
    var len = tmp.length;
    var result = "";
    for(var i=len-1;i>=0;i--){
        if(tmp[i] !== ""){
            result = result + " " + tmp[i];
        }
    }
    return result.substr(1);
};