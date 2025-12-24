import {describe, expect, it} from 'bun:test';
import {
  maxDepth,
  TreeNode,
} from '.';

describe('Maximum Depth of Binary Tree', () => {
  it('example 1', () => {
    const root = new TreeNode(3,
      new TreeNode(9),
      new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
      )
    );
    expect(maxDepth(root)).toBe(3);
  });

  it('example 2', () => {
    const root = new TreeNode(1,
      null,
      new TreeNode(2)
    );
    expect(maxDepth(root)).toBe(2);
  });

  it('example 3', () => {
    const root = null;
    expect(maxDepth(root)).toBe(0);
  });
});