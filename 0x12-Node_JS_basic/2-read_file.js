const fs = require('fs');

module.exports = function countStudents(path) {
  let csv = [];
  const msg1 = 'Number of students:';

  try {
    csv = fs.readFileSync(path, 'utf8')
      .toString()
      .split('\n')
      .map((e) => e.trim(e))
      .map((e) => e.split(',').map((e) => e.trim()))
      .map((e) => e.filter(Boolean))
      .filter((e) => e.length > 0);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const headers = csv[0];
  csv.shift();

  const result = csv.map((value) => (
    value.reduce((acc, data, index) => (
      { ...acc, [headers[index]]: data }), {})));

  console.log(`${msg1} ${result.length}`);
  // console.log(result);
  const arrStr = JSON.stringify(result);
  // console.log(JSON.stringify(result));
  const strJSON = JSON.parse(arrStr);
  // console.log(strJSON);
};
