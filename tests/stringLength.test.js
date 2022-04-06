const stringLength = require('../stringLength')

describe('stringLength', () => {
  it('the string size',() => {
    expect(stringLength('plane')).toEqual(5);
  });

  it('empty string',() => {
    expect(() => stringLength('')).toThrow(Error);
  });

  it('long string',() => {
    expect(() => stringLength('This is too long')).toThrow();
  })
})