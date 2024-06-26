// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let left = head;
  let right = head;
  let distance = 0;
  if(head == null || left == null || right == null) return null;

  while(right.next != null && left.next != null) {
    right = right.next;
    if(distance >= n) {
      left = left.next;
    } else distance ++
  }
  if(left == head && distance < n) return head.next;
  left.next = left.next?.next ?? null;
  return head
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

const list = arrayToList([1, 2, 3, 4, 5])
console.log(listTotArray(removeNthFromEnd(list, 2))) // [1, 2, 3, 5]

export { removeNthFromEnd, ListNode, listTotArray, arrayToList }