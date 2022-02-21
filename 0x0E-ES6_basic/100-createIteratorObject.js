export default function createIteratorObject(report) {
  let empList = [];
  for (const val of Object.values(report.allEmployees)) {
    empList = [...empList, ...val];
  }
  return empList;
}
