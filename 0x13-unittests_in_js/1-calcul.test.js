const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('Calculate', () => {
  // describe("round1", () => {
    it('should equal 5', () => {
      assert.equal(5, calculateNumber(1.4, 3.7, 'SUM'));
    });
    it('should equal 5', () => {
      assert.equal(-3, calculateNumber(1, 3.7, 'SUBTRACT'));
    });
    it('should equal 4', () => {
      assert.equal(.25, calculateNumber(1.4, 3.5, 'DIVIDE'));
    });
    it('should equal 7', () => {
      assert.equal('Error', calculateNumber(1.5, .4, 'DIVIDE'));
    });
  // });
});
