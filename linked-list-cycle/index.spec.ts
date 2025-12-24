import {describe, expect, it} from 'bun:test'
import {hasCycle, ListNode} from '.';

describe('141. Linked List Cycle', () => {
    it('Should return true for a linked list with a cycle', () => {
        const node3 = new ListNode(3);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(0, node2);
        node3.next = node1; // Create a cycle here
        expect(hasCycle(node1)).toBe(true);
    });

    it('Should return false for a linked list without a cycle', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3)));
        expect(hasCycle(head)).toBe(false);
    }
    );

    it('Should return false for an empty linked list', () => {
        expect(hasCycle(null)).toBe(false);
    });

    it('Should return true for a single node linked list with a cycle', () => {
        const node = new ListNode(1);
        node.next = node; // Create a cycle here
        expect(hasCycle(node)).toBe(true);
    });

    it('Should return false for a single node linked list without a cycle', () => {
        const node = new ListNode(1);
        expect(hasCycle(node)).toBe(false);
    });
});