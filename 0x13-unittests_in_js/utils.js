const Utils = (() => {
  calculateNumber: function calculateNumber(type, a, b) {
    if (type == "SUM")
      return Math.round(a) + Math.round(b);
    if (type == "SUBTRACT")
      return Math.round(a) - Math.round(b);
    if (type == "DIVIDE") {
      if (Math.round(b) == 0)
	return "Error";
      else
	return Math.round(a) / Math.round(b);
    }
  }
  return { calculateNumber };
})();
module.exports = Utils;

// console.log(Utils.calculateNumber('SUBTRACT', -3.7, 5));
