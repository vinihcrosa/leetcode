import { describe, it, expect } from 'bun:test';
import { RandomizedSet } from '.';

describe('380. Insert Delete GetRandom O(1)', () => {
  it('Should be instantiate', () => {
    const obj = new RandomizedSet();
    expect(obj).toBeInstanceOf(RandomizedSet);
  });

  it('Should insert a value', () => {
    const obj = new RandomizedSet();
    expect(obj.insert(1)).toBeTruthy();
  });

  it('Should not insert a value if it already exists', () => {
    const obj = new RandomizedSet();
    obj.insert(1);
    expect(obj.insert(1)).toBeFalsy();
  });

  it('Should remove a value', () => {
    const obj = new RandomizedSet();
    obj.insert(1);
    expect(obj.remove(1)).toBeTruthy();
  });

  it('Should not remove a value if it does not exist', () => {
    const obj = new RandomizedSet();
    expect(obj.remove(1)).toBeFalsy();
  });

  it('Should get a random value', () => {
    const obj = new RandomizedSet();
    obj.insert(1);
    expect(obj.getRandom()).toBe(1);
  });
})