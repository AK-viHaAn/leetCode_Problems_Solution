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
 * @param {number} key
 * @return {TreeNode}
 */
  var deleteNode = function(root, key) {
   if(root == null)
       return root;
  
   if(root.val > key)
       root.left = deleteNode(root.left, key);
   else if (root.val < key)
       root.right = deleteNode(root.right, key);
   else{


       if(root.left == null)
           return root.right;
       else if(root.right == null)
           return root.left;
      
           let minNode  = findMinNodeInRightSubTree(root.right); //findMaxinLeftSubTree
           root.val = minNode.val;
           root.right = deleteNode(root.right, minNode.val);
      
   }
   return root;
};


const findMinNodeInRightSubTree = (node) => {
   while(node.left != null)
       {
           node = node.left;
       }
   return node;
}
