import { describe, expect, it } from 'bun:test';
import { removeElement } from '.';

describe("27-RemoveElement", () => {
  it("should remove the element from the array", () => {
    const nums = [3, 2, 2, 3]
    const val = 3
    expect(removeElement(nums, val)).toEqual(2)
    expect(nums).toEqual([2, 2, 2, 3])
  })

  it("should remove the element from the array", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2
    expect(removeElement(nums, val)).toEqual(5)
    expect(nums).toEqual([0, 1, 4, 0, 3, 0, 4, 2])
  })
});