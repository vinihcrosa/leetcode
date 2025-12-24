import {describe, expect, it} from 'bun:test'
import {isSymmetric, TreeNode} from '.'

describe('isSymmetric', () => {
  it('example 1', () => {
    const root = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(3),
        new TreeNode(4)
      ),
      new TreeNode(2,
        new TreeNode(4),
        new TreeNode(3)
      )
    )
    expect(isSymmetric(root)).toBe(true)
  })

  it('example 2', () => {
    const root = new TreeNode(1,
      new TreeNode(2,
        null,
        new TreeNode(3)
      ),
      new TreeNode(2,
        null,
        new TreeNode(3)
      )
    )
    expect(isSymmetric(root)).toBe(false)
  })

  it('single node', () => {
    const root = new TreeNode(1)
    expect(isSymmetric(root)).toBe(true)
  })

  it('empty tree', () => {
    expect(isSymmetric(null)).toBe(true)
  })
})