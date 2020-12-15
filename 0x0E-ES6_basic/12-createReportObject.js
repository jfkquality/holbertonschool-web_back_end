export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList, // or  {...employeesList},
    getNumberOfDepartments(employeesList) {
      return (Object.keys(employeesList).length);
    },
  };
}
