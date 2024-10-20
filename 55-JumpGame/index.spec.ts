import {describe, expect, it} from 'bun:test';

import {canJump} from './index';

describe('55. Jump Game', () => {
  it('example 1', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  it('example 2', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });

  it('example 3', () => {
    expect(canJump([0])).toBe(true);
  });
})