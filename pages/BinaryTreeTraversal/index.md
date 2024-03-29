# 二叉树的遍历
所谓树的遍历即是按特定的顺序访问树中所有的节点。  

以下面这颗二叉树为例，我们来研究一下最常见的三种二叉树遍历方式。  

           1
         /   \
        3     2
       / \     \  
      5   7     9 


## 前序遍历 NLR
根->左子树->右子树。  

访问节点值的操作在继续遍历左子树和右子树之前进行，所以叫前序。  

上例中的二叉树前序遍历结果 `135729`。

## 中序遍历 LNR
左子树->根->右子树。  

访问节点值的操作在遍历左子树之后遍历右子树之前进行，所以叫中序。  

上例中的二叉树中序遍历结果 `537129`。

## 后续遍历 LRN
左子树->右子树->根。  

访问节点值的操作在遍历左子树和右子树之后进行，所以叫后序。  

上例中的二叉树后序遍历结果 `573921`。

## 代码实现
```js
function traverse(node) {
	console.log(node.value) // 前序
	
	if (node.left) {
		traverse(node.left)
	}
	
	console.log(node.value) // 中序
	
	if (node.right) {
		traverse(node.right)
	}
	
	console.log(node.value) // 后序
}
```

## 总结
其实类似上述的遍历方式应该一共有6种，包括NLR/NRL/LNR/RNL/LRN/RLN。但由于其中存在俩俩对称，所以通常只说先遍历左子树的前/中/后序遍历(NLR/LNR/LRN)这三种遍历方式。  

从代码实现中不难看出，这三种方式对树节点的递归过程是一致的，区别仅在于在递归中何时去访问具体的节点值。  

所以这三种遍历方式中的前/中/后其实指的正是我们是在遍历之前、之中还是之后去访问具体的节点值。
