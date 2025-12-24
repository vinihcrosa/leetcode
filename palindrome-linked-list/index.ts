export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;
    
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    // Find the middle of the linked list
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    
    // If the length is odd, skip the middle element
    if (fast) {
        slow = slow!.next;
    }

    // Reverse the second half of the linked list
    let prev: ListNode | null = null;
    while (slow) {
        const nextTemp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTemp;
    }

    // Compare the first and second half nodes
    let left: ListNode | null = head;
    let right: ListNode | null = prev;
    while (right) {
        if (left!.val !== right.val) {
            return false;
        }
        left = left!.next;
        right = right.next;
    }
    
    return true;
}