const reverseString = require('../reverseString')

describe('reverseString', () => {
  it('reverse it',() => {
    expect(reverseString('plane')).toEqual('enalp');
  });
})