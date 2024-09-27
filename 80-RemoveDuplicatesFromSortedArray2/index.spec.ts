import { describe, expect, it } from 'bun:test';
import { removeDuplicates } from '.';

describe("80-Remove duplicates from sorted arrays", () => {
  it("should remove the duplicates from the array", () => {
    const nums = [1, 1, 1, 2, 2, 3]
    expect(removeDuplicates(nums)).toEqual(5)
  })

  it("should remove the duplicates from the array", () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
    expect(removeDuplicates(nums)).toEqual(7)
  })
});