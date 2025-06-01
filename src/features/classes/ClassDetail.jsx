import { useParams } from "react-router-dom";
import { useClasse } from "./useClasse";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";
import styled from "styled-components";
import Button from "../../ui/Button";
import { HiOutlineBookOpen, HiOutlineUserGroup, HiPlus } from "react-icons/hi2";
import { useState } from "react";

import Modal from "../../ui/Modal";
import CreateEditSubjectForm from "./CreateEditSubjectForm";
import ClassStudentsTable from "./ClassStudentsTable";
import ClassSubjectsTable from "./ClassSubjectsTable";
import { useGrades } from "../settings/classesAndGrades/useGrades";
import { generateClasseCode } from "../../utils/helpers";
const StyledClassDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  gap: 2rem;
`;
const StyledDetailFlex = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  & > div {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
  & > header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
    border-bottom: 1px solid var(--color-grey-200);
  }
`;

const ClassNav = styled.nav`
  padding: 0;
`;
const ClassNavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

function ClassDetail() {
  const [activeTab, setActiveTab] = useState("students");

  const { classId: id } = useParams();
  const { classe = {}, isLoading } = useClasse({ id });
  const {
    students,
    variation,
    gradeId,
    capacity,
    description,
    period,
    subjects,
    room,
  } = classe;
  const { data, isLoading: isLoading2 } = useGrades(gradeId);
  if (isLoading || isLoading2) return <Spinner />;

  return (
    <Modal>
      <Row type="horizontal">
        <Heading as="h2">
          {data?.courseName} &mdash; {data.gradeYear} &mdash; {period}
        </Heading>
        <Modal.Open opens="subject-form">
          <Button>
            <HiPlus /> Disciplina
          </Button>
        </Modal.Open>
      </Row>
      <StyledClassDetailGrid>
        <Row>
          <StyledDetailFlex>
            <header>
              <Heading as="h2">Turma</Heading>
              <Tag type="active">activo</Tag>
            </header>
            <div>
              <strong>Turma </strong>
              <span>
                {generateClasseCode(
                  variation,
                  data.gradeYear,
                  data.courseName,
                  classe.period
                )}
              </span>
            </div>{" "}
            <div>
              <strong>Sala </strong>
              <span>{room}</span>
            </div>{" "}
            <div>
              <strong>Capacidade </strong>
              <span>{capacity}</span>
            </div>{" "}
            <div>
              <strong>Sala </strong>
              <span>{room}</span>
            </div>{" "}
            <div>
              <strong>Série </strong>
              <span>{data.gradeYear}</span>
            </div>
            <div>
              <strong>Total alunos </strong>
              <span>{students?.length}</span>
            </div>
            <div>
              <strong>Total professores </strong>
              <span>5</span>
            </div>
            <div>
              <strong>Total disciplinas </strong>
              <span>{subjects?.length}</span>
            </div>
          </StyledDetailFlex>
          <StyledDetailFlex>
            <header>
              <Heading as="h2">Breve descrição</Heading>
            </header>
            <div>
              <p>{description}</p>
            </div>
          </StyledDetailFlex>
        </Row>
        <Row>
          <ClassNav>
            <ClassNavList>
              <li>
                <Button
                  size="small"
                  variation={activeTab === "students" ? "primary" : "secondary"}
                  onClick={() => setActiveTab("students")}
                >
                  <HiOutlineUserGroup /> Estudantes
                </Button>
              </li>
              <li>
                <Button
                  size="small"
                  variation={activeTab === "subjects" ? "primary" : "secondary"}
                  onClick={() => setActiveTab("subjects")}
                >
                  <HiOutlineBookOpen /> Disciplinas
                </Button>
              </li>
            </ClassNavList>
          </ClassNav>
          {activeTab === "students" && <ClassStudentsTable classe={classe} />}
          {activeTab === "subjects" && <ClassSubjectsTable classId={id} />}
        </Row>
      </StyledClassDetailGrid>
      <Modal.Window name="subject-form" buttonClose={true}>
        <CreateEditSubjectForm classe={classe} course={data} />
      </Modal.Window>
    </Modal>
  );
}

export default ClassDetail;
