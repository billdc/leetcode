public class Solution {
    public void sortColors(int[] nums) {
        int lo = 0;
        int hi = nums.length-1;
        while(lo<hi){
            while (nums[lo] == 0 && lo < hi) lo++;
            while (nums[hi] == 2 && lo < hi) hi--;
            if(nums[lo]==1) {
                for(int i =lo+1;i<=hi;i++){
                    if(nums[i]==0){
                        swap(nums,lo,i);
                        break;
                    }
                }
                lo++;
            }else if(nums[lo] == 2 ){
                swap(nums,lo,hi);
                hi--;
            }
        }
    }

    void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
