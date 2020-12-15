export default function createIteratorObject(report) {
  const empList = [];
  for (const emp of Object.keys(report)) {
    empList.push(emp);
  }
  return empList;
  // const iter = {
  //   [Symbol.iterator]() {
  //     return { report.allEmployees }
  //   }
}
