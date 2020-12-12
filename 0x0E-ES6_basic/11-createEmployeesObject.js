export default function createEmployeesObject(departmentName, employees) {
  console.log(departmentName);
  const emplee = {
    [departmentName]: employees,
  };
  return emplee;
}
