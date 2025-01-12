import styled from "styled-components";
import StudentTableOperations from "./StudentTableOperations";
import Table from "../../pages/Table";
import Tag from "../../ui/Tag";
import Pagination from "../../ui/Pagination";
import Menus from "../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { useStudents } from "./useStudents";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";
const StyledStudentTable = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
// const data = Array.from({ length: 10 }, (_, i) => {
//   return {
//     id: i,
//     image: `/avatars/avatar${1 + i}.jpg`,
//     grade: "12ª Classe",
//     fullName: "Manasse Timóteo",
//     status: i % 2 === 0 ? "active" : "inactive",
//     genre: i % 2 === 0 ? "male" : "female",

//     internNumber: Math.ceil(Math.random() * 99999999999999 + 1),
//     course: "Informática " + i,
//   };
// });
function StudentsTable() {
  const { students, isLoading } = useStudents();
  const navigate = useNavigate();
  if (isLoading) return <SpinnerMini />;
  return (
    <StyledStudentTable>
      <StudentTableOperations />
      <Menus>
        <Table columns="1.2fr 1.5fr 0.5fr 0.5fr 0.7fr 1fr 4rem">
          <Table.Header>
            <span>N. interno</span>
            <span>Nome</span>
            <span>Status</span>
            <span>Genre</span>
            <span>Class</span>
            <span>Course</span>
            <span></span>
          </Table.Header>

          <Table.Body
            data={students}
            render={(item) => (
              <Table.Row key={item.id}>
                <span>{item.internNumber}</span>
                <FlexBox>
                  <Img src={item.biUpload || "/default-user.jpg"} />
                  <span>{item.fullName}</span>
                </FlexBox>
                <Tag type={item.status}>{item.status}</Tag>
                <span>{item.genre}</span>

                <span>{item.grade} </span>
                <span>{item.course}</span>

                <Menus.Toggle menuId={item.internNumber} />
                <Menus.Menu menuId={item.internNumber}>
                  <Menus.List>
                    <Menus.Button
                      icon={<HiEye />}
                      onClick={() => navigate(`/students/${item.id}`)}
                    >
                      See details
                    </Menus.Button>
                    <Menus.Button icon={<HiPencil />}>
                      Edit student
                    </Menus.Button>
                    <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                  </Menus.List>
                </Menus.Menu>
              </Table.Row>
            )}
          />
          <Table.Footer>
            <div>
              <p>
                {" "}
                <strong>1</strong> &mdash; <strong>13</strong> de{" "}
                <strong>130</strong> resultados
              </p>
            </div>
            <Pagination />
          </Table.Footer>
        </Table>
      </Menus>
    </StyledStudentTable>
  );
}

export default StudentsTable;
