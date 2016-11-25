public class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        if (triangle.size() == 1) {
            return triangle.get(0).get(0);
        }
        List<Integer> level = triangle.get(0);
        int[] sum = new int[triangle.size()];
        sum[0] = level.get(0);
        for (int i = 1; i < triangle.size(); i++) {
            level = triangle.get(i);
            sum[level.size() - 1] = sum[level.size() - 2] + level.get(level.size() - 1);
            for (int j = level.size() - 2; j > 0; j--) {
                sum[j] = Math.min(sum[j], sum[j - 1]) + level.get(j);
            }
            sum[0] = sum[0] + level.get(0);
        }
        int min = sum[0];
        for (int i = 1; i < sum.length; i++) {
            if (sum[i] < min) {
                min = sum[i];
            }
        }
        return min;
    }
}
