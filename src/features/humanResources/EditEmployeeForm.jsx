import { useParams } from "react-router-dom";
import CreateEditEmployeeForm from "./CreateEditEmployeeForm";
import { useEmployee } from "../humanResources/useEmployee";
import Spinner from "../../ui/Spinner";

function EditEmployeeForm() {
  const { employeeId: id } = useParams();
  const { data, isLoading } = useEmployee(id);
  if (isLoading) return <Spinner />;
  return <CreateEditEmployeeForm editId={id} editEmployee={data} />;
}

export default EditEmployeeForm;
