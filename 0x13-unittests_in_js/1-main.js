const calcul = require("./1-calcul.js");
console.log("1 + 3 = ", calcul(1, 3, 'SUM'));

console.log("1 + 3.7 = ", calcul(1, 3.7, 'SUBTRACT'));

console.log("1.2 + 3.7 = ", calcul(1.2, 3.7, 'DIVIDE'));

console.log("1.5 + 3.7 = ", calcul(1.4, 3.2, 'DIVIDE'));

console.log("1.5 + 3.7 = ", calcul(1.5, .4, 'DIVIDE'));
