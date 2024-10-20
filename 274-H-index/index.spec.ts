import {describe, it, expect} from 'bun:test';
import { hIndex } from '.';

describe('274. H-Index', () => {
  it('example 1', () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  })

  it('example 2', () => {
    expect(hIndex([1, 3, 1])).toBe(1);
  })
})