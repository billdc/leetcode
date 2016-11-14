public class Solution {
    public void rotate(int[][] matrix) {
        int temp;
        int len = matrix.length - 1;
        for (int level = 0; level < len / 2.0; level++) {
            for (int i = level; i < len - level; i++) {
                temp = matrix[level][i];
                matrix[level][i] = matrix[len - i][level];
                matrix[len - i][level] = matrix[len - level][len - i];
                matrix[len - level][len - i] = matrix[i][len - level];
                matrix[i][len - level] = temp;
            }
        }
    }
}
