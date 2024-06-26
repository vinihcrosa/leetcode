import { beforeAll, describe, expect, it } from "bun:test"
import { ListNode, arrayToList, listTotArray, reverseList } from "."

describe("206 - Rever Linked List", () => {
  it("should reverse the linked list", () => {
    const list = arrayToList([1, 2, 3, 4, 5])
    expect(listTotArray(reverseList(list))).toEqual([5, 4, 3, 2, 1])
  })
})