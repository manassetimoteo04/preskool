import styled from "styled-components";
import { useDeleteStudent } from "./useDeleteStudent";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import { calcAge } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import SmallUserImg from "../../ui/SmallUserImg";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useClasse } from "../classes/useClasse";
import { useGrades } from "../settings/classesAndGrades/useGrades";

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StyledConcatedBox = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-weight: 500;
  }
  & > span {
    font-size: 1.2rem;
  }
`;
function StudentTableRow({ student }) {
  const { deleteStudent, isLoading: isDeleting } = useDeleteStudent();
  const navigate = useNavigate();
  const { classe, isLoading: isLoadingClasse } = useClasse({
    id: student.grade,
  });
  const { data: gradeData, isLoading: isLoadingGrade } = useGrades(
    classe?.gradeId
  );
  return (
    <Table.Row key={student.id}>
      <FlexBox>
        <SmallUserImg
          src={
            student.avatar ||
            "https://lh3.googleusercontent.com/ogw/AF2bZygwiKS2CstmzEuOEbGSSGFjLYvfKxLgHiqu8FTOla_4lA=s32-c-mo" ||
            "/default-user.jpg"
          }
        />
        <StyledConcatedBox>
          <p>
            {student.fullName.split(" ")[0] +
              " " +
              student.fullName.split(" ").slice(-1)}
          </p>
          {isLoadingClasse || isLoadingGrade ? (
            <span>Carregando...</span>
          ) : (
            <span>
              {gradeData.courseName || "Fundamental"} &mdash;{" "}
              {gradeData.gradeYear}
            </span>
          )}
        </StyledConcatedBox>
      </FlexBox>
      <span>{student.internNumber.toUpperCase()}</span>

      <Tag type={student.status}>{student.status}</Tag>
      <span>{student.gender === "m" ? "Masculino" : "Femenino"}</span>
      <span>{calcAge(new Date(student.birthDate))} Anos</span>
      <span>{student.idNumber} </span>

      <Menus.Toggle menuId={student.internNumber} />
      <Menus.Menu menuId={student.internNumber}>
        <Menus.List>
          <Menus.Button
            icon={<HiEye />}
            onClick={() => navigate(`/area/admin/students/${student.id}`)}
          >
            See details
          </Menus.Button>
          <Menus.Button
            icon={<HiPencil />}
            onClick={() => navigate(`/area/admin//students/${student.id}/edit`)}
          >
            Edit student
          </Menus.Button>
          <Menus.Button
            onClick={() => deleteStudent(student.id)}
            disabled={isDeleting}
            icon={<HiTrash />}
          >
            Delete
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default StudentTableRow;
