// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {

    if (preorder.length === 0 && inorder.length === 0) return null;

    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);

    let mid = inorder.indexOf(rootVal);

    let leftInorder = inorder.slice(0, mid);
    let rightInorder = inorder.slice(mid + 1);

    let leftPreorder = preorder.filter((ele) => leftInorder.includes(ele));
    let rightPreorder = preorder.filter((ele) => rightInorder.includes(ele));

    let leftTree = buildTree(leftPreorder, leftInorder);
    let rightTree = buildTree(rightPreorder, rightInorder);

    root.left = leftTree
    root.right = rightTree;

    return root;


  };
