import { useQuery } from "@tanstack/react-query";
import { getEmployeesLeaves } from "../../services/apiEmployees";
import { useGetEmployees } from "./useGetEmployees";

export function useEmployeeLeaves(daysRange = 0) {
  const { data, isLoading } = useQuery({
    queryKey: ["employeeLeaves", daysRange],
    queryFn: () => getEmployeesLeaves(daysRange),
  });
  const employeesId = !isLoading && data?.map((d) => d.employeeId);

  const { employees, isLoading: isLoadingEmployees } = useGetEmployees(
    Array.from(new Set(employeesId || []))
  );
  const results = data?.map((leave) => {
    const employee = employees?.find((e) => e.id === leave.employeeId);
    return { ...leave, employee: employee, isLoading: isLoadingEmployees };
  });
  return { data: results, isLoading };
}
