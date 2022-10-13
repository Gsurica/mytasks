describe('not method', () => {
  it('basic usage - not', () => {
    expect(1 + 1).not.toEqual(1);
  });
});

describe('Math - regular expressions', () => {
  it('basic usage - toMatch', () => {
    expect('developer').toMatch(/\w+/);
  });
});

export {};
