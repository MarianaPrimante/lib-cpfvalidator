let lib = require('../lib/index')
let expect = require('chai').expect

describe('add', function() {
    it('sum to numbers', function() {
        expect(lib.add(6, 6)).to.be.equal(12);
    })
    it('sum to zero', function() {
        expect(lib.add(10, 6)).to.be.equal(16);
    })
    it('sum to five', function() {
        expect(lib.add(5, 6)).to.be.equal(10);
    })
})

describe('sub', function() {
    it('sub to numbers', function() {
        expect(lib.sub(6, 6)).to.be.equal(0);
    })
    it('sub to zero', function() {
        expect(lib.sub(10, 6)).to.be.equal(4);
    })
    it('sub to five', function() {
        expect(lib.sub(5, 6)).to.be.equal(12);
    })
})