const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('Calculate', () => {
  describe("sum", () => {
    it('should equal 5', () => {
      assert.equal(5, calculateNumber(1.4, 3.7, 'SUM'));
    });
    it('should equal 5', () => {
      assert.equal(5, calculateNumber(1, 3.7, 'SUM'));
    });
    it('should equal 6', () => {
      assert.equal(6, calculateNumber(1.5, 3.5, 'SUM'));
    });
    it('should equal 5', () => {
      assert.equal(5, calculateNumber(1.5, 3.2, 'SUM'));
    });
  });

  describe("subtract", () => {
    it('should equal 5', () => {
      assert.equal(-2, calculateNumber(1.5, 3.7, 'SUBTRACT'));
    });
    it('should equal 5', () => {
      assert.equal(-3, calculateNumber(1, 3.7, 'SUBTRACT'));
    });
    it('should equal 1', () => {
      assert.equal(1, calculateNumber(5.4, 3.5, 'SUBTRACT'));
    });
    it('should equal 7', () => {
      assert.equal(0, calculateNumber(5.4, 5, 'SUBTRACT'));
    });
    it('should equal 6', () => {
      assert.equal(6, calculateNumber(5.4, -.6, 'SUBTRACT'));
    });
    it('should equal 5', () => {
      assert.equal(5, calculateNumber(5.4, .4, 'SUBTRACT'));
    });
    it('should equal 0', () => {
      assert.equal(0, calculateNumber(5.4, 5, 'SUBTRACT'));
    });
  });

  describe("divide", () => {
    it('should equal .25', () => {
      assert.equal(.25, calculateNumber(1.4, 3.7, 'DIVIDE'));
    });
    it('should equal 1', () => {
      assert.equal(1, calculateNumber(4, 3.7, 'DIVIDE'));
    });
    it('should equal 0', () => {
      assert.equal(0, calculateNumber(0, 3.5, 'DIVIDE'));
    });
    it('should equal Error', () => {
      assert.equal('Error', calculateNumber(1.5, .4, 'DIVIDE'));
    });
    it('should equal Error', () => {
      assert.equal('Error', calculateNumber(1.5, -.4, 'DIVIDE'));
    });
    it('should equal -2', () => {
      assert.equal(-2, calculateNumber(1.5, -.6, 'DIVIDE'));
    });
    it('should equal Error', () => {
      assert.equal('Error', calculateNumber(1.5, .4, 'DIVIDE'));
    });
  });
});
