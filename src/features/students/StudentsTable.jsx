import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { HiEye, HiPencil, HiPlus, HiTrash } from "react-icons/hi2";

import StudentTableOperations from "./StudentTableOperations";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Pagination from "../../ui/Pagination";
import Menus from "../../ui/Menus";
import { useStudents } from "./useStudents";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { usePagination } from "../../hooks/usePagination";
import { useDeleteStudent } from "./useDeleteStudent";
import Button from "../../ui/Button";
import { normalizeText } from "../../utils/helpers";
import { VscEmptyWindow } from "react-icons/vsc";
import { HiSearch } from "react-icons/hi";

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

function StudentsTable() {
  const { students, isLoading } = useStudents();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { deleteStudent, isLoading: isDeleting } = useDeleteStudent();

  const searchData = students?.filter((item) =>
    normalizeText(item.fullName).startsWith(normalizeText(searchQuery))
  );

  const filteredData = searchParams.get("filter")
    ? searchData?.filter((item) => item.status === searchParams.get("filter"))
    : searchData;

  const sortValue = searchParams.get("sortBy");
  const [sortBy, direction] = (sortValue || "createdAt-asc").split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedData = sortValue
    ? filteredData?.sort((a, b) => {
        if (sortBy === "fullName")
          return a[sortBy].localeCompare(b[sortBy]) * modifier;
        else return (a[sortBy] - b[sortBy]) * modifier;
      })
    : filteredData;

  const {
    data: studentList,

    totalPages,
  } = usePagination(sortedData);
  if (isLoading) return <Spinner />;
  return (
    <StyledStudentTable>
      <StudentTableOperations query={searchQuery} setQuery={setSearchQuery} />
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
                      <Menus.Button
                        onClick={() => deleteStudent(item.id)}
                        disabled={isDeleting}
                        icon={<HiTrash />}
                      >
                        Delete
                      </Menus.Button>
                    </Menus.List>
                  </Menus.Menu>
                </Table.Row>
              )}
            />
            {totalPages > 1 && (
              <Table.Footer>
                <Pagination
                  totalPages={totalPages}
                  count={filteredData.length}
                />
              </Table.Footer>
            )}
          </Table>
        </Menus>
      ) : (
        <Empty>
          {!searchQuery ? <VscEmptyWindow /> : <HiSearch />}

          <span>
            {!searchQuery
              ? "Nenhum estudante foi encontrado"
              : `Nenhum resultado para ${searchQuery}`}
          </span>
          {!searchQuery && (
            <Button onClick={() => navigate("add-student")}>
              <HiPlus />
            </Button>
          )}
        </Empty>
      )}
    </StyledStudentTable>
  );
}

export default StudentsTable;
