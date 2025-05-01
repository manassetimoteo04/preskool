import { HiOutlinePencilSquare } from "react-icons/hi2";
import styled from "styled-components";
import Modal from "../../ui/Modal";
import EditSettingsForm from "./EditSettingsForm";
import React from "react";

const StyledSettingRow = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr 4rem;
  padding: 1.5rem 0;
  gap: 2rem;
  align-items: start;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const EditButton = styled.button`
  background: none;
  border: none;
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  &:hover {
    background-color: var(--color-grey-100);
  }
`;

function SettingRow({ name, children, ...rest }) {
  const label = React.Children.toArray(children).find(
    (child) => child.type === "strong"
  )?.props?.children;
  return (
    <StyledSettingRow>
      {children}
      <Modal.Open opens={name}>
        <EditButton>
          <HiOutlinePencilSquare />
        </EditButton>
      </Modal.Open>
      <Modal.Window name={name} buttonClose={true}>
        <EditSettingsForm name={name} label={label} {...rest} />
      </Modal.Window>
    </StyledSettingRow>
  );
}

export default SettingRow;
