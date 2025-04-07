import { useQuery } from "@tanstack/react-query";
import { getEmployeesLeaves } from "../../services/apiEmployees";
import { useGetEmployees } from "./useGetEmployees";

export function useEmployeeLeaves() {
  const { data, isLoading } = useQuery({
    queryKey: ["employeeLeaves"],
    queryFn: getEmployeesLeaves,
  });
  const employeesId = !isLoading && data?.map((d) => d.employeeId);

  const { employees } = useGetEmployees(Array.from(new Set(employeesId || [])));
  console.log(employees);
  const results = data.map((leave) => {
    const employee = employees.find((e) => e.id === leave.employeeId);
    return { ...leave, employee: employee };
  });
  console.log(results);
  return { data: results, isLoading };
}
