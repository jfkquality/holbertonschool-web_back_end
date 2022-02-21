export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList, // {...employeesList} or employessList
    getNumberOfDepartments(employeesList) {
      return (Object.keys(employeesList).length);
    },
  };
}
