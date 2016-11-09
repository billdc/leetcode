public class Solution {
    List<List<Integer>> res = new ArrayList<>();

    public List<List<Integer>> permute(int[] nums) {
        calculate(nums, new ArrayList<>(), new HashMap<>());
        return res;
    }

    void calculate(int[] nums, List<Integer> current, HashMap<Integer, Boolean> map) {
        if (current.size() == nums.length) {
            res.add(new ArrayList<>(current));
        } else {
            for (int i = 0; i < nums.length; i++) {
                if (map.get(i) != null && map.get(i)) continue;
                map.put(i, Boolean.TRUE);
                current.add(nums[i]);

                calculate(nums, current, map);

                current.remove(current.size() - 1);
                map.put(i, Boolean.FALSE);
            }
        }
    }
}
