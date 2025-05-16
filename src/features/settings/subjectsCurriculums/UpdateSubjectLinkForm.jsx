import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Tag from "../../../ui/Tag";
import SpinnerMini from "../../../ui/SpinnerMini";
import { useState } from "react";
import { HiOutlineTrash, HiPlus } from "react-icons/hi";
import SearchLinkForm from "./SearchLinkForm";
import { useUpdateSubject } from "../../classes/useUpdateSubject";
const StyledLinkForm = styled.div`
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
  const [teacher, setTeacher] = useState(subject.teacher);
  const isLinked = subject.class.id && subject.teacher.id;
  const { updateSubject, isLoading } = useUpdateSubject();
  function handleDelete() {
    setTeacher("");
  }

  function handleUpdate() {
    const { id, ...rest } = subject;

    const updateData = {
      ...rest,
      teacher: { id: teacher.id || null, name: teacher.name || null },
    };
    updateSubject({ id, data: updateData }, { onSuccess: onCloseModal });
  }
  const disabled = subject.teacher.id === teacher.id;
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
            {subject.class.course} &mdash; {subject.class.grade}ª &mdash;{" "}
            {subject.class.period}
          </span>
        </div>
        <SelectBox>
          {teacher ? (
            <>
              <div>
                <strong>Professor</strong>
                <span>{teacher.name || "desconhecido"}</span>
              </div>
              <Button
                size="small"
                variation={!teacher.id ? "primary" : "danger"}
                onClick={handleDelete}
              >
                {teacher.id ? (
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
