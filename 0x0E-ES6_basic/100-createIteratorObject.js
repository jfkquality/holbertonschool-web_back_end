export default function createIteratorObject(report) {
  const empList = [];
  for (const emp of Object.keys(report.allEmployees)) {
    // console.log(emp);
    empList.push(emp);
  }
  return empList;
  // const iter = {
  //   [Symbol.iterator]() {
  //     return { report.allEmployees }
  //   }
}
