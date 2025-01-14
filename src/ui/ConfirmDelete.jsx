import { HiOutlineTrash } from "react-icons/hi2";
import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

const StyledConfirmDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 45rem;
  & > div {
    display: flex;
    gap: 2rem;
    align-items: center;
    & > span {
      padding: 2rem;
      background-color: var(--color-red-100);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      & > svg {
        font-size: 2.4rem;
      }
    }
  }
`;
const FlexBox = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: end;
  align-items: center;
`;
function ConfirmDelete({ children, onConfirm, isLoading, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <div>
        <span>
          <HiOutlineTrash />
        </span>
        <Heading as="h1">Excluir</Heading>
      </div>
      <p>{children} Está operação não pode ser cancelada</p>
      <FlexBox>
        <Button type="secondary" onClick={onCloseModal}>
          Cancelar
        </Button>
        <Button type="danger" onClick={onConfirm} disabled={isLoading}>
          {isLoading && <SpinnerMini />}
          Confirmar
        </Button>
      </FlexBox>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
