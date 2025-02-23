import { useParams } from "react-router-dom";
import CreateEditEmployeeForm from "./CreateEditEmployeeForm";
import { useEmployee } from "../humanResources/useEmployee";

function EditEmployeeForm() {
  const { employeeId: id } = useParams();
  const { data, isLoading } = useEmployee(id);
  console.log(data, isLoading);
  return <CreateEditEmployeeForm editId={id} editEmployee={data} />;
}

export default EditEmployeeForm;
