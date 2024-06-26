// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if(list1 == null && list2 == null) return null;
  if(list1 == null) return list2;
  if(list2 == null) return list1;
  const head = new ListNode();
  let current = head;
  while (list1 != null || list2 != null) {
    if(list1 == null) {
      current.next = list2;
      break;
    }
    if(list2 == null) {
      current.next = list1;
      break;
    }
    if(list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  return head.next;
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

export { mergeTwoLists, ListNode, listTotArray, arrayToList }