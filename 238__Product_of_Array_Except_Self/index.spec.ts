import {describe, it, expect} from 'bun:test';
import {productExceptSelf} from './index';
    
describe('238. Product of Array Except Self', () => {
    it('example 1', () => {
        expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    })

    it('example 2', () => {
        expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
    })
});