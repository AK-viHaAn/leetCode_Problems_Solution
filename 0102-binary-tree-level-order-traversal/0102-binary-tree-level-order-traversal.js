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
 * @return {number[][]}
 */
var levelOrder = function(root) {
     if(root == null)
       return [];
   let height = calHeight(root);
   let answer = [];


   for(let i=1;i<=height; i++){
       let levelNodes = [];
       levelOrderTraversal(root, i, levelNodes);
       answer.push(levelNodes);
   }


   return answer;


}


const levelOrderTraversal = (root, levelNumber, levelNodes) => {


   if(root == null)
       return 0;
   if(levelNumber == 1)
       levelNodes.push(root.val);
   else{
       levelOrderTraversal(root.left, levelNumber-1, levelNodes);
       levelOrderTraversal(root.right, levelNumber-1, levelNodes);
   }
}


var calHeight = function(root) {
   if(root == null)
       return 0;
   let left = calHeight(root.left);
   let right = calHeight(root.right);


   if(left> right)
       return left+1;
   else
    return right+1;
};