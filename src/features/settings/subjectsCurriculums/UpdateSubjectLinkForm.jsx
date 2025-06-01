import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Tag from "../../../ui/Tag";
import SpinnerMini from "../../../ui/SpinnerMini";
import { useState } from "react";
import { HiOutlineTrash, HiPlus } from "react-icons/hi";
import SearchLinkForm from "./SearchLinkForm";
import { useUpdateSubject } from "../../classes/useUpdateSubject";
import { useGrades } from "../classesAndGrades/useGrades";
import { useCourse } from "../../classes/useCourse";
import { useGetTeacher } from "../../teachers/useGetTeacher";
import Spinner from "../../../ui/Spinner";
import { useClasse } from "../../classes/useClasse";
const StyledLinkForm = styled.div`
  max-width: 45rem;

  & > header {
    padding: 2rem;
    border-bottom: 1px solid var(--color-grey-200);
    min-width: 35rem;
  }
  & > div {
    & > button {
      margin-top: 2rem;
    }
    & > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    padding: 2rem;
    display: flex;
    flex-direction: column;
    & > div {
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-200);
      }
    }
  }
`;

const SelectBox = styled.div`
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;
function UpdateSubjectLinkForm({ subject, onCloseModal }) {
  const { classe, isLoading: isLoading1 } = useClasse({ id: subject?.classId });

  const { data: grade, isLoading: isLoading2 } = useGrades(classe?.gradeId);
  const { data: course, isLoading: isLoading3 } = useCourse(grade?.courseId);
  const { data, isLoading: isLoading4 } = useGetTeacher(subject?.teacherId);

  const [teacher, setTeacher] = useState({ name: data.fullName, id: data.id });
  const isLinked = subject.classId && subject.teacherId;
  const { updateSubject, isLoading } = useUpdateSubject();
  function handleDelete() {
    setTeacher("");
  }

  function handleUpdate() {
    const { id, ...rest } = subject;

    const updateData = {
      ...rest,
      teacherId: teacher.id,
    };
    updateSubject({ id, data: updateData }, { onSuccess: onCloseModal });
  }
  const disabled = subject.teacheId === teacher;
  if (isLoading1 || isLoading2 || isLoading3 || isLoading4) return <Spinner />;
  return (
    <StyledLinkForm>
      <header>
        <Heading as="h3">Actualizar Vínculo</Heading>
      </header>
      <div>
        <header>
          <span>
            {subject.name} &mdash; {subject.code}
          </span>
          <Tag type={isLinked ? "pending" : "inactive"}>
            {isLinked ? "Vinculado" : "Desvinculado"}
          </Tag>
        </header>
        <div>
          <strong>Turma</strong>
          <span>
            {course?.courseName} &mdash; {grade?.gradeYear} &mdash;{" "}
            {classe.period}
          </span>
        </div>
        <SelectBox>
          {teacher.id ? (
            <>
              <div>
                <strong>Professor</strong>
                <span>{teacher.name || "desconhecido"}</span>
              </div>
              <Button
                size="small"
                variation={!teacher ? "primary" : "danger"}
                onClick={handleDelete}
              >
                {teacher ? (
                  <HiOutlineTrash />
                ) : (
                  <>
                    Selecionar
                    <HiPlus />
                  </>
                )}
              </Button>
            </>
          ) : (
            <div>
              <strong>Professor</strong>

              <SearchLinkForm setTeacher={setTeacher} />
            </div>
          )}
        </SelectBox>

        <Button disabled={disabled || isLoading} onClick={handleUpdate}>
          {!isLoading && "Actualizar"}
          {isLoading && <SpinnerMini />}
        </Button>
      </div>
    </StyledLinkForm>
  );
}

export default UpdateSubjectLinkForm;
