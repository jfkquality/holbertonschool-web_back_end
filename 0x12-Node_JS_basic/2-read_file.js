const fs = require('fs');

module.exports = function countStudents(path) {
  let csv = [];

  try {
    csv = fs.readFileSync(path, 'utf8');
    // console.log(csv);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  csv = csv.split('\n').map((line) => line.trim());
  for (const row in csv) {
    if (csv[row].length > 0) {
      csv[row] = csv[row].split(',').map((line) => line.trim());
    }
  }
  csv = csv.filter(Boolean);
  const lines = csv.length - 1;
  console.log(`Number of students: ${lines}`);
};
