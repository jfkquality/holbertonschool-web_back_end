const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./1-calcul.js");

describe('Calculate', () => {
  describe("sum", () => {
    it('should equal 5', () => {
      expect(calculateNumber(1.4, 3.7, 'SUM')).to.equal(5);
    });
    it('should equal 5', () => {
      expect(5, calculateNumber(1, 3.7, 'SUM'));
    });
    it('should equal 6', () => {
      expect(6, calculateNumber(1.5, 3.5, 'SUM'));
    });
    it('should equal 5', () => {
      expect(5, calculateNumber(1.5, 3.2, 'SUM'));
    });
  });

  describe("subtract", () => {
    it('should equal 5', () => {
      expect(-2, calculateNumber(1.5, 3.7, 'SUBTRACT'));
    });
    it('should equal 5', () => {
      expect(-3, calculateNumber(1, 3.7, 'SUBTRACT'));
    });
    it('should equal 1', () => {
      expect(1, calculateNumber(5.4, 3.5, 'SUBTRACT'));
    });
    it('should equal 7', () => {
      expect(0, calculateNumber(5.4, 5, 'SUBTRACT'));
    });
    it('should equal 6', () => {
      expect(6, calculateNumber(5.4, -.6, 'SUBTRACT'));
    });
    it('should equal 5', () => {
      expect(5, calculateNumber(5.4, .4, 'SUBTRACT'));
    });
    it('should equal 0', () => {
      expect(0, calculateNumber(5.4, 5, 'SUBTRACT'));
    });
  });

  describe("divide", () => {
    it('should equal .25', () => {
      expect(.25, calculateNumber(1.4, 3.7, 'DIVIDE'));
    });
    it('should equal 1', () => {
      expect(1, calculateNumber(4, 3.7, 'DIVIDE'));
    });
    it('should equal 0', () => {
      expect(0, calculateNumber(0, 3.5, 'DIVIDE'));
    });
    it('should equal Error', () => {
      expect('Error', calculateNumber(1.5, .4, 'DIVIDE'));
    });
    it('should equal Error', () => {
      expect('Error', calculateNumber(1.5, -.4, 'DIVIDE'));
    });
    it('should equal -2', () => {
      expect(-2, calculateNumber(1.5, -.6, 'DIVIDE'));
    });
    it('should equal Error', () => {
      expect('Error', calculateNumber(1.5, .4, 'DIVIDE'));
    });
  });
});
