import { beforeAll, describe, expect, it } from "bun:test"
import { ListNode, arrayToList, listTotArray, removeNthFromEnd } from "."

describe("19-Remove Nth Node From End of List", () => {
  it("should remove the nth node from the end of the list", () => {
    const list = arrayToList([1, 2, 3, 4, 5])
    expect(listTotArray(removeNthFromEnd(list, 2))).toEqual([1, 2, 3, 5])
  })

  it('Should remove the only element from the list', () => {
    const list = arrayToList([1])
    expect(listTotArray(removeNthFromEnd(list, 1))).toEqual([])
  })

  it('Should remove the first element from the list', () => {
    const list = arrayToList([1, 2])
    expect(listTotArray(removeNthFromEnd(list, 1))).toEqual([1])
  })

  it('Should return null if the list is empty', () => {
    expect(removeNthFromEnd(null, 2)).toBeNull()
  })
})