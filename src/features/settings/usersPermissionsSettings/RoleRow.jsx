import styled from "styled-components";
import ButtonIcon from "../../../ui/ButtonIcon";
import { HiOutlinePencil } from "react-icons/hi";
import Modal from "../../../ui/Modal";
import UpdateRolesContainer from "./UpdateRolesContainer.";

const StyledRoleRow = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  &:hover > button {
    opacity: 1;
  }
  & > button {
    opacity: 0;
  }
`;
const Role = styled.span`
  background-color: var(--color-grey-200);
  display: flex;
  padding: 0.06rem 0.5rem;
  border-radius: var(--border-radius-sm);
`;
function RoleRow({ role, label }) {
  return (
    <StyledRoleRow>
      <div>
        <Role>{role}</Role> &mdash; <span>{label}</span>
      </div>
      <Modal.Open opens={role + label}>
        <ButtonIcon>
          <HiOutlinePencil />
        </ButtonIcon>
      </Modal.Open>
      <Modal.Window buttonClose={true} name={role + label}>
        <UpdateRolesContainer label={label} role={role} />
      </Modal.Window>
    </StyledRoleRow>
  );
}

export default RoleRow;
