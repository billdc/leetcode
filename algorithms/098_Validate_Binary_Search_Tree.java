/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public boolean isValidBST(TreeNode root) {
        if (root == null) {
            return true;
        }
        check(root);
        for (int i = 1; i < res.size(); i++) {
            if (res.get(i) == null) continue;
            if (res.get(i) <= res.get(i - 1)) {
                return false;
            }
        }
        return true;
    }

    List<Integer> res = new ArrayList<>();

    public void check(TreeNode root) {
        if (root.left != null) {
            check(root.left);
        }
        res.add(root.val);
        if (root.right != null) {
            check(root.right);
        }
    }
}
