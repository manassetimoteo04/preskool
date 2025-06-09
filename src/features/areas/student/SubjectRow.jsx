import Table from "../../../ui/Table";
import { useGetTeacher } from "../../teachers/useGetTeacher";

function SubjectRow({ subject }) {
  const { data, isLoading } = useGetTeacher(subject.teacherId);
  return (
    <Table.Row>
      <span>{subject.name}</span>
      <span>{isLoading ? "Carregando" : data.fullName}</span>
      <span>{isLoading ? "Carregando" : data.emailAddress}</span>
      <span>{isLoading ? "Carregando" : data.phoneNumber}</span>
    </Table.Row>
  );
}
export default SubjectRow;
