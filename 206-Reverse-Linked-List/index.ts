// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
  if(head == null || head.next == null) return head;
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

function listTotArray(head: ListNode | null): number[] {
  let next = head;
  let result = [];
  while(next != null) {
    result.push(next.val);
    next = next.next;
  }

  return result;
}

function arrayToList(arr: number[]): ListNode {
  let head = new ListNode(arr[0]);
  let next = head;
  for(let i = 1; i < arr.length; i++) {
    next.next = new ListNode(arr[i]);
    next = next.next;
  }
  return head;
}

export { reverseList, ListNode, listTotArray, arrayToList }