describe('compare numbers', () => {
  it('basic usage', () => {
    expect(1 + 1).toBeGreaterThan(1);
    expect(1 + 1).toBeGreaterThanOrEqual(1);
    expect(1 + 1).toBeLessThan(3);
    expect(1 + 1).toBeLessThanOrEqual(12);
  });
});

describe('Mock', () => {
  it('mock implementations', () => {
    const fakeAdd = jest.fn().mockImplementation((a: number, b: number) => 5);
    expect(fakeAdd(1, 1)).toBe(5);
  });
});

export {};
