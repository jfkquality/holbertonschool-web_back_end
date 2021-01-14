const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('Calculate', () => {
  describe("sum", () => {
    it('should equal 5', () => {
      assert.equal(calculateNumber('SUM', 1.4, 3.7), 5);
    });
    it('should equal 5', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should equal 6', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.5), 6);
    });
    it('should equal 5', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.2), 5);
    });
  });

  describe("subtract", () => {
    it('should equal -2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('should equal -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('should equal 1', () => {
      assert.equal(calculateNumber('SUBTRACT', 5.4, 3.5), 1);
    });
    it('should equal 0', () => {
      assert.equal(calculateNumber('SUBTRACT', 5.4, 5), 0);
    });
    it('should equal 6', () => {
      assert.equal(calculateNumber('SUBTRACT', 5.4, -.6), 6);
    });
    it('should equal 5', () => {
      assert.equal(calculateNumber('SUBTRACT', 5.4, .4), 5);
    });
    it('should equal 0', () => {
      assert.equal(calculateNumber('SUBTRACT', 5.4, 5), 0);
    });
  });

  describe("divide", () => {
    it('should equal .25', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 3.7), .25);
    });
    it('should equal 1', () => {
      assert.equal(calculateNumber('DIVIDE',4, 3.7), 1);
    });
    it('should equal 0', () => {
      assert.equal(calculateNumber('DIVIDE', 0, 3.5), 0);
    });
    it('should equal Error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.5, .4), 'Error');
    });
    it('should equal Error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.5, -.4), 'Error');
    });
    it('should equal -2', () => {
      assert.equal(calculateNumber('DIVIDE', 1.5, -.6), -2);
    });
    it('should equal Error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.5, .4), 'Error');
    });
  });
});
