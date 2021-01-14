const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai.js");

describe('Calculate', () => {
  describe("sum", () => {
    it('should equal 5', () => {
      expect(calculateNumber(1.4, 3.7, 'SUM')).to.equal(5);
    });
    it('should equal 5', () => {
      expect(calculateNumber(1, 3.7, 'SUM')).to.equal(5);
    });
    it('should equal 6', () => {
      expect(calculateNumber(1.5, 3.5, 'SUM')).to.equal(6);
    });
    it('should equal 5', () => {
      expect(calculateNumber(1.5, 3.2, 'SUM')).to.equal(5);
    });
  });

  describe("subtract", () => {
    it('should equal 5', () => {
      expect(calculateNumber(1.5, 3.7, 'SUBTRACT')).to.equal(-2);
    });
    it('should equal -3', () => {
      expect(calculateNumber(1, 3.7, 'SUBTRACT')).to.equal(-3);
    });
    it('should equal 1', () => {
      expect(calculateNumber(5.4, 3.5, 'SUBTRACT')).to.equal(1);
    });
    it('should equal 0', () => {
      expect(calculateNumber(5.4, 5, 'SUBTRACT')).to.equal(0);
    });
    it('should equal 6', () => {
      expect(calculateNumber(5.4, -.6, 'SUBTRACT')).to.equal(6);
    });
    it('should equal 5', () => {
      expect(calculateNumber(5.4, .4, 'SUBTRACT')).to.equal(5);
    });
    it('should equal 0', () => {
      expect(calculateNumber(5.4, 5, 'SUBTRACT')).to.equal(0);
    });
  });

  describe("divide", () => {
    it('should equal .25', () => {
      expect(calculateNumber(1.4, 3.7, 'DIVIDE')).to.equal(.25);
    });
    it('should equal 1', () => {
      expect(calculateNumber(4, 3.7, 'DIVIDE')).to.equal(1);
    });
    it('should equal 0', () => {
      expect(calculateNumber(0, 3.5, 'DIVIDE')).to.equal(0);
    });
    it('should equal Error', () => {
      expect(calculateNumber(1.5, .4, 'DIVIDE')).to.equal('Error');
    });
    it('should equal Error', () => {
      expect(calculateNumber(1.5, -.4, 'DIVIDE')).to.equal('Error');
    });
    it('should equal -2', () => {
      expect(calculateNumber(1.5, -.6, 'DIVIDE')).to.equal(-2);
    });
    it('should equal Error', () => {
      expect(calculateNumber(1.5, .4, 'DIVIDE')).to.equal('Error');
    });
  });
});
