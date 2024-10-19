import { describe, it, expect } from "bun:test"
import { merge } from "."

describe("88-MergeSortedArray", () => {
  it("should merge the sorted array", () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const m = 3
    const nums2 = [2, 5, 6]
    const n = 3
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
  })

  it("should merge the sorted array", () => {
    const nums1 = [1]
    const m = 1
    const nums2: number[] = []
    const n = 0
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1])
  })

  it("should merge the sorted array", () => {
    const nums1 = [0]
    const m = 0
    const nums2 = [1]
    const n = 1
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1])
  })
})