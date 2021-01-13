const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('Calculate', () => {
  // describe("round1", () => {
    it('should equal 5', () => {
      assert.equal(calculateNumber(1.4, 3.7), 5);
    });
    it('should equal 5', () => {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('should equal 4', () => {
      assert.equal(calculateNumber(1.4, 3.2), 4);
    });
    it('should equal 7', () => {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  // });
});
