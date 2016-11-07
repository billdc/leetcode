public class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        int len = nums.length - 1;
        int lo, mid, hi;
        lo = 0;
        while (lo < len - 1) {
            if (lo > 0 && nums[lo] == nums[lo - 1]) {
                lo++;
                continue;
            }
            while (lo<len && nums[lo] + nums[lo + 1] + nums[len] > 0) len--;
            while (lo<len && nums[lo] + nums[len - 1] + nums[len] < 0) lo++;
            mid = lo + 1;
            hi = len;
            while (mid < hi) {
                if (nums[lo] + nums[mid] + nums[hi] == 0) {
                    res.add(Arrays.asList(nums[lo], nums[mid], nums[hi]));
                    while (mid < hi && nums[mid] == nums[mid + 1]) mid++;
                    while (mid < hi && nums[hi] == nums[hi - 1]) hi--;
                    mid++;
                    hi--;
                }
                while (mid < hi && nums[lo] + nums[mid] + nums[hi] < 0) mid++;
                while (mid < hi && nums[lo] + nums[mid] + nums[hi] > 0) hi--;
            }
            lo++;
        }
        return res;
    }
}
