public class Solution {
 
    List<String> res = new ArrayList<>();

    public List<String> generateParenthesis(int n) {
        if (n > 0) {
            gen(n-1,n,"(");
        } else {
            res.add("");
        }
        return res;
    }
 
    void gen(int left, int right, String str) {
        if (left == 0) {
            for (int i = 0; i < right; i++) {
                str = str + ")";
            }
            res.add(str);
        } else {
            gen(left-1,right,str+"(");
            if(left<right){
                gen(left,right-1,str+")");
            }
        }
    }
}
