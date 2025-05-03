import styled from "styled-components";
import ToggleButton from "../../../ui/ToggleButton";
import { useState } from "react";
import { useUpdateSettings } from "../useUpdateSettings";
const StyledRolePermission = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function RolePermissionRow({ role, updateField, updateId }) {
  const [active, setActive] = useState(role.status);
  const { updateSettings, isLoading } = useUpdateSettings();
  function handleClick() {
    updateSettings(
      {
        settingId: updateId,
        collectionName: "permissions",
        data: { [updateField]: { ...role, status: !active } },
      },
      { onError: () => setActive((s) => !s) }
    );
    setActive((s) => !s);
  }
  return (
    <StyledRolePermission>
      <span>{role?.description}</span>
      <ToggleButton
        active={active}
        isLoading={isLoading}
        handleClick={handleClick}
      />
    </StyledRolePermission>
  );
}

export default RolePermissionRow;
