describe('Last minute test case creation', () => { 
  it('Create regex which test allows only alphabets', () => {
    expect(/A-Za-z/.test('A')).toEqual();
  });
  it('Create regex which test allows only alphabets and digits', () => {
    expect(/A-Za-z/.test('Ab')).toBeTruthy();
  });

 });