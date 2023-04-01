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
var levelOrderBottom = function(root) {
    
     if(root == null)
       return []


   let q = []; //create a queue
   let answer = [];
   q.push(root);
   while(q.length != 0){


       let levelNodesList = [];
       let nodesAtCurrLevel = q.length;
      
       for(let i = nodesAtCurrLevel;i>0;i--)
       {
           let currNode = q.shift(); //pop from queue from front end
           levelNodesList.push(currNode.val);


          
           if(currNode.left != null)
              { q.push(currNode.left)}
          
           if(currNode.right != null)
              { q.push(currNode.right)}
       }


       answer.push(levelNodesList);
   }
   return answer.reverse();
    
};