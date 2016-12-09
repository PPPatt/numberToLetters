const n2l = require('../index')

var expect = require('chai').expect;

describe('index', () => {
  it('tests', () => {
    console.log(n2l(123))
    expect(n2l(123)).to.equal('123dude')
  })
})
