let lib = require("../lib/index");
let expect = require("chai").expect;

describe("cpfValidate", () => {
  it("valid", function(){
    expect(lib.cpfValidate("38748141810")).to.be.equal(true);
  });
  it("invalid", () => {
    expect(lib.cpfValidate("11111111111")).to.be.equal(false);
  });
  it("invalid", () => {
    expect(lib.cpfValidate("27727282822")).to.be.equal(false);
  });
  it("invalid", () => {
    expect(lib.cpfValidate("aaaaaaaaaaa")).to.be.equal(false);
  });
});

describe("digitsEnd", () => {
  it("valid", function(){
    expect(lib.digitsEnd("38748141810")).to.be.equal("10");
  });
});
describe("digitsEnd", () => {
    it("valid", function(){
      expect(lib.digitsEnd("38748141810")).to.be.equal("10");
    });
  });

describe("cpfCheck", () => {
  it("valid", function(){
    expect(lib.cpfCheck("38748141810")).to.be.eql([ "3", "8", "7", "4", "8", "1", "4", "1", "8" ]);
  });
});

describe("divisionRest", () => {
  it("valid", function(){
    expect(lib.divisionRest(10)).to.be.equal(10);
  });
});

describe("testDigit", () => {
  it("valid", function(){
    expect(lib.testDigit(11)).to.be.equal(0);
  });
  it("valid", function(){
    expect(lib.testDigit(8)).to.be.equal(3);
  });
});

describe("sumTotal", () => {
  it("valid", function(){
    expect(lib.sumTotal([ "3", "8", "7", "4", "8", "1", "4", "1", "8" ], 10)).to.be.equal(274);
  });
});

