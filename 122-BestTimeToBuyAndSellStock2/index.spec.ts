import { describe, expect, it } from 'bun:test';
import { maxProfit } from '.';

describe("122-BestTimeToBuyAndSellStock 2", () => {
  it("should return the maximum profit", () => {
    const prices = [7, 1, 5, 3, 6, 4]
    expect(maxProfit(prices)).toEqual(7)
  })

  it("should return the maximum profit", () => {
    const prices = [7, 6, 4, 3, 1]
    expect(maxProfit(prices)).toEqual(0)
  })
});