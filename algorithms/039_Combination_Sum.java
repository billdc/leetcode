public class Solution {
    List<List<Integer>> res = new ArrayList<>();

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        Arrays.sort(candidates);
        calculate(candidates, 0, new ArrayList<>(), 0, target);
        return res;
    }

    void calculate(int[] nums, int index, List<Integer> current, int sum, int target) {
        if (sum < target) {
            for (int i = index; i < nums.length; i++) {
                current.add(nums[i]);
                if (sum + nums[i] == target) {
                   res.add(new ArrayList<>(current));
                } else if (sum + nums[i] < target) {
                    calculate(nums, i, current, sum + nums[i], target);
                }
                current.remove(current.size()-1);
            }
        }
    }

}
