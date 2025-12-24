import {describe, expect, it} from 'bun:test';
import {isPalindrome, ListNode} from '.';

describe('234. Palindrome Linked List', () => {
    it('Should return true for a palindrome linked list', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
        expect(isPalindrome(head)).toBe(true);
    });

    it('Should return false for a non-palindrome linked list', () => {
        const head = new ListNode(1, new ListNode(2));
        expect(isPalindrome(head)).toBe(false);
    });
    
    it('Should return true for an empty linked list', () => {
        expect(isPalindrome(null)).toBe(true);
    });

    it('Should return true for a two zero node linked list', () => {
        const head = new ListNode(0, new ListNode(0));
        expect(isPalindrome(head)).toBe(true);
    });
});