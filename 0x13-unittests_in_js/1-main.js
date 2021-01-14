const calcul = require("./1-calcul.js");
console.log("1 + 3 = ", calcul('SUM', 1, 3));

console.log("1 + 3.7 = ", calcul('SUBTRACT', 1, 3.7));

console.log("1.2 + 3.7 = ", calcul('DIVIDE', 1.2, 3.7));

console.log("1.5 + 3.7 = ", calcul('DIVIDE', 1.4, 3.2));

console.log("1.5 + 3.7 = ", calcul('DIVIDE', 1.5, .4));
