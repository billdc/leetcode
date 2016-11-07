public class Solution {
    public int maxArea(int[] height) { 
        int i = 0;
        int j = height.length -1;
        int max = 0;
        int h,newArea;
        while(i < j){
            h = Math.min(height[i], height[j]);
            newArea = h*(j-i);
            if(newArea>max) max = newArea;
            if(height[i]<height[j]){
                while(i<j && height[i]<=h){
                    i++;
                }
            }else{
                while(j>i && height[j]<=h){
                    j--;
                }
            }
        }
        return max;
    }
}
