const expect = require("chai").expect;
const lib = require("../index");

describe("cpfValidator", () => {
  it("valid : '38748141810'", () => {
    expect(lib.cpfValidator("38748141810")).to.be.equal(true);
  });
  it("valid: 38748141810", () => {
    expect(lib.cpfValidator(38748141810)).to.be.equal(true);
  });
  it("valid: '40090279832'", () => {
    expect(lib.cpfValidator("40090279832")).to.be.equal(true);
  });
  it("invalid : '111111111111'", () => {
    expect(lib.cpfValidator("1111111111111")).to.be.equal(false);
  });
  it("invalid: '1111111111'", () => {
    expect(lib.cpfValidator("11111111111")).to.be.equal(false);
  });
  it("invalid: 11111111111", () => {
    expect(lib.cpfValidator(11111111111)).to.be.equal(false);
  });
  it("invalid: '88888888888'", () => {
    expect(lib.cpfValidator("88888888888")).to.be.equal(false);
  });
  it("invalid: '27727282822'", () => {
    expect(lib.cpfValidator("27727282822")).to.be.equal(false);
  });
  it("invalid: 'aaaaaaaaaaa'", () => {
    expect(lib.cpfValidator("aaaaaaaaaaa")).to.be.equal(false);
  });
  it("invalid: '||\\$$$57&'", () => {
    expect(lib.cpfValidator("||\\$$$57&")).to.be.equal(false);
  });
  it("invalid: 'a5676a6a7'", () => {
    expect(lib.cpfValidator("a5676a6a7")).to.be.equal(false);
  });
});

