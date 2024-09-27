import { describe, expect, it } from 'bun:test';
import { rotate } from '.';
import { arr } from './arr';

describe("169-MajorityElement", () => {
    it("Example 1", () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        rotate(nums, k);
        expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });

    it("Example 2", () => {
        const nums = [-1, -100, 3, 99];
        const k = 2;
        rotate(nums, k);
        expect(nums).toEqual([3, 99, -1, -100]);
    });

    it("Example 3", () => {
        const nums = [1, 2];
        const k = 3;
        rotate(nums, k);
        expect(nums).toEqual([2, 1]);
    });

    it("Example 4", () => {
        const nums = [1, 2];
        const k = 1;
        rotate(nums, k);
        expect(nums).toEqual([2, 1]);
    });

    it("Example 5", () => {
        const nums = [1, 2, 3];
        const k = 2;
        rotate(nums, k);
        expect(nums).toEqual([2, 3, 1]);
    });

    it("Example 6", () => {
        const k = 54944;
        rotate(arr, k);
        expect(rotate(arr, k)).toBeUndefined();
    });
});