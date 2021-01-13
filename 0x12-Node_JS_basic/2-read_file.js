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

  // Get count of students by field, list firstname in each field.
  // Use array.reduce().
  // See https://learnwithparam.com/blog/how-to-group-by-array-of-objects-using-a-key/

  // Sone fooling around before finding above reduce()
  // console.log(result);
  // for (const row of result) {
  //   console.log(row.field);
  // }
  // console.log(result[1].field, result[1].firstname);
};
