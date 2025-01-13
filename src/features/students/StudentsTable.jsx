import styled from "styled-components";
import StudentTableOperations from "./StudentTableOperations";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Pagination from "../../ui/Pagination";
import Menus from "../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { useStudents } from "./useStudents";
import { useNavigate, useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { usePagination } from "../../hooks/usePagination";
import { PAGE_SIZE } from "../../utils/constants";
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
  const [searchParams] = useSearchParams();

  const searchData = searchParams.get("search")
    ? students?.filter((item) =>
        item.fullName.startsWith(searchParams.get("search"))
      )
    : students;
  const filteredData = searchParams.get("filter")
    ? searchData?.filter((item) => item.status === searchParams.get("filter"))
    : searchData;

  const navigate = useNavigate();
  const {
    data: studentList,

    currentPage,
    totalPages,
  } = usePagination(filteredData);
  if (isLoading) return <Spinner />;
  return (
    <StyledStudentTable>
      <StudentTableOperations />
      {studentList?.length ? (
        <Menus>
          <Table columns="1.2fr 1.5fr 0.5fr 0.5fr 0.7fr 1fr 4rem">
            <Table.Header>
              <span>Código Interno</span>
              <span>Nome</span>
              <span>Status</span>
              <span>Gênero</span>
              <span>Classe</span>
              <span>Curso</span>
              <span></span>
            </Table.Header>

            <Table.Body
              data={studentList}
              render={(item) => (
                <Table.Row key={item.id}>
                  <span>{item.internNumber}</span>
                  <FlexBox>
                    <Img src={item.biUpload || "/default-user.jpg"} />
                    <span>
                      {item.fullName.split(" ")[0] +
                        " " +
                        item.fullName.split(" ").slice(-1)}
                    </span>
                  </FlexBox>
                  <Tag type={item.status}>{item.status}</Tag>
                  <span>{item.gender.toUpperCase()}</span>

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
                      <Menus.Button
                        icon={<HiPencil />}
                        onClick={() => navigate(`/students/${item.id}/edit`)}
                      >
                        Edit student
                      </Menus.Button>
                      <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                    </Menus.List>
                  </Menus.Menu>
                </Table.Row>
              )}
            />
            {totalPages > 1 && (
              <Table.Footer>
                <div>
                  <p>
                    {" "}
                    <strong>
                      {(currentPage - 1) * PAGE_SIZE + 1}
                    </strong> &mdash;{" "}
                    <strong>
                      {currentPage === PAGE_SIZE
                        ? filteredData.length
                        : currentPage * PAGE_SIZE}
                    </strong>{" "}
                    de <strong>{filteredData.length}</strong> resultados
                  </p>
                </div>
                <Pagination totalPages={totalPages} />
              </Table.Footer>
            )}
          </Table>
        </Menus>
      ) : (
        <Empty>Nenhum dados encontrado</Empty>
      )}
    </StyledStudentTable>
  );
}

export default StudentsTable;
