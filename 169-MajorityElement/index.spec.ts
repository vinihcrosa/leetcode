import { describe, expect, it } from 'bun:test';
import { majorityElement } from '.';

describe("169-MajorityElement", () => {
  it("should return the majority element", () => {
    const nums = [3, 2, 3]
    expect(majorityElement(nums)).toEqual(3)
  })

  it("should return the majority element", () => {
    const nums = [2, 2, 1, 1, 1, 2, 2]
    expect(majorityElement(nums)).toEqual(2)
  })
});