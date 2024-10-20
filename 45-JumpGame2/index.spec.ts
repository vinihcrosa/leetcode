import {describe, it, expect} from 'bun:test';
import {jump} from './index';

describe('45. Jump Game II', () => {
  it('should return 2', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
  })

  it('should return 2', () => {
    expect(jump([2, 3, 0, 1, 4])).toBe(2);
  })
})