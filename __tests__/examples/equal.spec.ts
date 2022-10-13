describe('calculator', () => {
  it('basic usage - toEqual', () => {
    expect(1 + 1).toEqual(2);
    expect('developer').toEqual('developer');
    expect({name: 'dev'}).toEqual({name: 'dev'});
  });

  it('basic usage - to be', () => {
    expect(1 + 1).toBe(2);
    expect('developer').toBe('developer');
    expect({name: 'dev'}).toEqual({name: 'dev'});
  });
});

export {};
