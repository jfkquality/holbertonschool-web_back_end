const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('Calculate', () => {
  describe("sum", () => {
    it('should equal 5', () => {
      assert.equal(calculateNumber(1.4, 3.7, 'SUM'), 5);
    });
    it('should equal 5', () => {
      assert.equal(calculateNumber(1, 3.7, 'SUM'), 5);
    });
    it('should equal 6', () => {
      assert.equal(calculateNumber(1.5, 3.5, 'SUM'), 6);
    });
    it('should equal 5', () => {
      assert.equal(calculateNumber(1.5, 3.2, 'SUM'), 5);
    });
  });

  describe("subtract", () => {
    it('should equal -2', () => {
      assert.equal(calculateNumber(1.5, 3.7, 'SUBTRACT'), -2);
    });
    it('should equal -3', () => {
      assert.equal(calculateNumber(1, 3.7, 'SUBTRACT'), -3);
    });
    it('should equal 1', () => {
      assert.equal(calculateNumber(5.4, 3.5, 'SUBTRACT'), 1);
    });
    it('should equal 0', () => {
      assert.equal(calculateNumber(5.4, 5, 'SUBTRACT'), 0);
    });
    it('should equal 6', () => {
      assert.equal(calculateNumber(5.4, -.6, 'SUBTRACT'), 6);
    });
    it('should equal 5', () => {
      assert.equal(calculateNumber(5.4, .4, 'SUBTRACT'), 5);
    });
    it('should equal 0', () => {
      assert.equal(calculateNumber(5.4, 5, 'SUBTRACT'), 0);
    });
  });

  describe("divide", () => {
    it('should equal .25', () => {
      assert.equal(calculateNumber(1.4, 3.7, 'DIVIDE'), .25);
    });
    it('should equal 1', () => {
      assert.equal(calculateNumber(4, 3.7, 'DIVIDE'), 1);
    });
    it('should equal 0', () => {
      assert.equal(calculateNumber(0, 3.5, 'DIVIDE'), 0);
    });
    it('should equal Error', () => {
      assert.equal(calculateNumber(1.5, .4, 'DIVIDE'), 'Error');
    });
    it('should equal Error', () => {
      assert.equal(calculateNumber(1.5, -.4, 'DIVIDE'), 'Error');
    });
    it('should equal -2', () => {
      assert.equal(calculateNumber(1.5, -.6, 'DIVIDE'), -2);
    });
    it('should equal Error', () => {
      assert.equal(calculateNumber(1.5, .4, 'DIVIDE'), 'Error');
    });
  });
});
