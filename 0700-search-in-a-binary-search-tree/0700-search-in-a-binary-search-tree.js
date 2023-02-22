/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// var searchBST = function(root, val) {
//     while(root != null){
//         if(root.val == val){
//             return root
//         }
//         console.log(root.val);
//         if(root.val>val){
//             root = root.left
//         }
//         else if(root.val<val){
//             root = root.right
//         }
//     }return null
// };

var searchBST = function(root, val) {
   if((root == null)||(root.val==val)){
       return root
   }if(root.val>val){
       return searchBST(root.left,val)
   }else{
      return searchBST(root.right,val)
   }
};