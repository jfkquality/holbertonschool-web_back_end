const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('Calculate', () => {
  // describe("round1", () => {
    it('should equal 5', () => {
      assert.equal(5, calculateNumber(1.4, 3.7));
    });
    it('should equal 5', () => {
      assert.equal(5, calculateNumber(1, 3.7));
    });
    it('should equal 4', () => {
      assert.equal(4, calculateNumber(1.4, 3.2));
    });
    it('should equal 7', () => {
      assert.equal(6, calculateNumber(1.5, 3.7));
    });
  // });
});
