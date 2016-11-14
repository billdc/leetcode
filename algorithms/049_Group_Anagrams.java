public class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        List<String> empty = new ArrayList<>();
        List<String> temp;
        HashMap<String, Integer> letterMap = new HashMap<>();
        char[] l;
        for (String str : strs) {
            if(str.equals("")){
                empty.add("");
                continue;
            }
            l = str.toCharArray();
            Arrays.sort(l);
            if(letterMap.get(String.valueOf(l)) == null){
                letterMap.put(String.valueOf(l),res.size());
                temp = new ArrayList<>();
                temp.add(str);
                res.add(temp);
            }else{
                res.get(letterMap.get(String.valueOf(l))).add(str);
            }
        }
        if(empty.size()>0){
            res.add(empty);
        }
        return res;
    }
}
