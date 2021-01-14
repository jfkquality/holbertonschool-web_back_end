const Utils = require('./utils.js');
const calcul = Utils.calculateNumber;

// console.log(tils);
// console.log(calcul);

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  // const totAmt = tils.calculateNumber('SUM', totalAmount, totalShipping);
  const totAmt = calcul('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${ totAmt }`);
  return (totAmt);
}
