import { describe, expect, it } from 'bun:test';
import { candy } from '.';

describe("135-Candy", () => {
  it("should return the minimum number of candies that must be given to the children", () => {
    const ratings = [1, 0, 2];
    expect(candy(ratings)).toEqual(5);
  });

  it("should return the minimum number of candies that must be given to the children", () => {
    const ratings = [1, 2, 2];
    expect(candy(ratings)).toEqual(4);
  });
});