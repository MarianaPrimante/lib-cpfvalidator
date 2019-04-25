const lib = require("../lib/index");
const expect = require("chai").expect;

describe("cpfValidate", () => {
  it("valid", () => {
    expect(lib.cpfValidate("38748141810")).to.be.equal(true);
  });
  it("valid", () => {
    expect(lib.cpfValidate("40090279832")).to.be.equal(true);
  });
  it("invalid", () => {
    expect(lib.cpfValidate("11111111111")).to.be.equal(false);
  });
  it("invalid", () => {
    expect(lib.cpfValidate("88888888888")).to.be.equal(false);
  });
  it("invalid", () => {
    expect(lib.cpfValidate("27727282822")).to.be.equal(false);
  });
  it("invalid", () => {
    expect(lib.cpfValidate("aaaaaaaaaaa")).to.be.equal(false);
  });
  it("invalid", () => {
    expect(lib.cpfValidate("||\\$$$57&")).to.be.equal(false);
  });
  it("invalid", () => {
    expect(lib.cpfValidate("a5676a6a7")).to.be.equal(false);
  });
});

