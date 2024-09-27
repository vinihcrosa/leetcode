import { describe, expect, it } from "bun:test";
import { arrayToList, listTotArray, mergeTwoLists } from ".";

describe("21-MergeTwoSortedLists", () => {
  it("should merge two sorted lists", () => {
    const list1 = arrayToList([1, 2, 4])
    const list2 = arrayToList([1, 3, 4])
    expect(listTotArray(mergeTwoLists(list1, list2))).toEqual([1, 1, 2, 3, 4, 4])
  })

  it("should merge an empty list with a non-empty list", () => {
    const list1 = arrayToList([])
    const list2 = arrayToList([1, 3, 4])
    expect(listTotArray(mergeTwoLists(list1, list2))).toEqual([1, 3, 4])
  })
})