const fs = require('fs');

module.exports = function countStudents(path) {
  let csv = [];

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
  console.log(csv);

  // ATTEMPT #4:
  // // const titles = csv.slice(0, csv.indexOf('\n')).split(',');
  // // console.log(titles, Array.isArray(titles));
  // // const rows = csv.slice(csv.indexOf('\n')).split('\n')

  // // console.log(rows);
  // const titles = csv[0];
  // csv.shift()
  // const values = csv;
  // // const result = rows.map((row) => {
  // const result = values.map((row) => {
  //   // console.log('ROW', row);
  //   // const values = row
  //   // 	  .split(',').map((e) => e.trim())
  //   // 	  .filter((e) => e.length > 0)
  //   // .map((e) => e.filter(Boolean)) //filter(e));
  //   // values.map((e) => e.length > 0) //filter(Boolean))
  //   // const values = csv;
  //   // console.log('VALUES', values, "ARRAY?", Array.isArray(values));
  //   return titles.reduce((object, curr, i) => {
  // // result = titles.reduce((object, curr, i) => {
  //     object[curr] = values[i];
  //     return object;
  //   }, {})
  // });

  // console.log(result);

  // ATTEMPT #3;
  // const toJSON = (csv) => {
  //   const lines = csv.split('\n')
  //   const result = []

  const headers = csv[0];
  csv.shift()

  const result = csv.map((value) =>
    value.reduce((acc, data, index) =>
      ({...acc, [headers[index]]: data}), {}));

    // lines.map((l) => {
    //   const obj = {}
    //   const line = l.split(',')

    //   headers.map((h, i) => {
    // 	obj[h] = line[i];
    //   })

    //   result.push(obj)
    // })
// }
  console.log(result);


  // ATTEMPT #1:
  // csv = csv.split('\n').map((line) => line.trim());
  // for (const row in csv) {
  //   if (csv[row].length > 0) {
  //     csv[row] = csv[row].split(',').map((line) => line.trim());
  //   }
  // }
  // console.log(csv);
  // csv = csv.filter(Boolean);
  // console.log(csv, typeof csv);
  // console.log(csv.toString(), typeof csv.toString());
  // console.log(result);
  // const lines = csv.length - 1;
  // console.log(`Number of students: ${lines}`);
};
