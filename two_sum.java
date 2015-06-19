import java.util.HashMap;
public class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int i;
        int[] result = {0,0};
        Boolean hasResult = false;
        HashMap<Integer,Integer> table = new HashMap<Integer, Integer>();
        for (i=numbers.length-1;i>=0;i--){
            if ((target-numbers[i]*2==0) && table.containsKey(numbers[i])){
                result[0] = i+1;
                result[1] = table.get(numbers[i]) + 1;
                hasResult = true;
            }
            table.put(numbers[i],i);
        }
        if(!hasResult) {
            for (i = 0; i < numbers.length; i++) {
                table.remove(numbers[i]);
                if (numbers[i] > target) continue;
                if (table.containsKey(target - numbers[i])) {
                    result[0] = i + 1;
                    result[1] = table.get(target - numbers[i]) + 1;
                    break;
                }
            }
        }
        return result;
    }
}