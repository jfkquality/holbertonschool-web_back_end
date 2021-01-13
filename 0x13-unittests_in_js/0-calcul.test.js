const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('Calculate', () => {
  describe("round1", () => {
    it('should return 5', () => {
      assert.equal(calculateNumber(1.4, 3.7), 5);
    });
  });
});
