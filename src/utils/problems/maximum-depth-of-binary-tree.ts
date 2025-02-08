import assert from "assert";
import { Problem } from "../types/problem";

export const maxDepthHandler = (fn: any) => {
	try {
		class TreeNode {
			val: number;
			left: TreeNode | null;
			right: TreeNode | null;
			constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
				this.val = val ?? 0;
				this.left = left ?? null;
				this.right = right ?? null;
			}
		}

		const tests = [
			new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
			new TreeNode(1, null, new TreeNode(2)),
			null,
			new TreeNode(0)
		];
		const answers = [3, 2, 0, 1];

		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.deepEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.error("Error from maxDepthHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMaxDepthJS = `function maxDepth(root) {
  // Write your code here
};`;

export const maxDepth: Problem = {
	id: "max-depth-binary-tree",
	title: "Maximum Depth of Binary Tree",
	problemStatement: `<p class='mt-3'>Given the <code>root</code> of a binary tree, return its maximum depth.</p> <p class='mt-3'>A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>`,
	examples: [
		{
			id: 0,
			inputText: "root = [3,9,20,null,null,15,7]",
			outputText: "3",
		},
		{
			id: 1,
			inputText: "root = [1,null,2]",
			outputText: "2",
		},
		{
			id: 2,
			inputText: "root = []",
			outputText: "0",
		},
		{
			id: 3,
			inputText: "root = [0]",
			outputText: "1",
		},
	],
	constraints: `<li class='mt-2'><code>The number of nodes in the tree is in the range [0, 10<sup>4</sup>]</code></li>
<li class='mt-2 '><code>-100 <= Node.val <= 100</code></li>`,
	handlerFunction: maxDepthHandler,
	starterCode: starterCodeMaxDepthJS,
	starterFunctionName: "function maxDepth(",
	order: 5,
};
