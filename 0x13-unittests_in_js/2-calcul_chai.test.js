const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai.js");

describe('Calculate', () => {
  describe("sum", () => {
    it('should equal 5', () => {
      expect(calculateNumber('SUM', 1.4, 3.7)).to.equal(5);
    });
    it('should equal 5', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('should equal 6', () => {
      expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
    });
    it('should equal 5', () => {
      expect(calculateNumber('SUM', 1.5, 3.2)).to.equal(5);
    });
  });

  describe("subtract", () => {
    it('should equal -2', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
    it('should equal -3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('should equal 1', () => {
      expect(calculateNumber('SUBTRACT', 5.4, 3.5)).to.equal(1);
    });
    it('should equal 0', () => {
      expect(calculateNumber('SUBTRACT', 5.4, 5)).to.equal(0);
    });
    it('should equal 6', () => {
      expect(calculateNumber('SUBTRACT', 5.4, -.6)).to.equal(6);
    });
    it('should equal 5', () => {
      expect(calculateNumber('SUBTRACT', 5.4, .4)).to.equal(5);
    });
    it('should equal 0', () => {
      expect(calculateNumber('SUBTRACT', 5.4, 5)).to.equal(0);
    });
  });

  describe("divide", () => {
    it('should equal .25', () => {
      expect(calculateNumber('DIVIDE', 1.4, 3.7)).to.equal(.25);
    });
    it('should equal 1', () => {
      expect(calculateNumber('DIVIDE', 4, 3.7)).to.equal(1);
    });
    it('should equal 0', () => {
      expect(calculateNumber('DIVIDE', 0, 3.5)).to.equal(0);
    });
    it('should equal Error', () => {
      expect(calculateNumber('DIVIDE', 1.5, .4)).to.equal('Error');
    });
    it('should equal Error', () => {
      expect(calculateNumber('DIVIDE', 1.5, -.4)).to.equal('Error');
    });
    it('should equal -2', () => {
      expect(calculateNumber('DIVIDE', 1.5, -.6)).to.equal(-2);
    });
    it('should equal Error', () => {
      expect(calculateNumber('DIVIDE', 1.5, .4)).to.equal('Error');
    });
  });
});
