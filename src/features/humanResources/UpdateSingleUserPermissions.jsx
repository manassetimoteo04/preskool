import { useState } from "react";
import { useUpdatePermissions } from "./useUpdatePermissions";
import ToggleButton from "../../ui/ToggleButton";

function UpdateSingleUserPermissions({ defaultValue, updateField, updateId }) {
  const { updatePermission, isLoading } = useUpdatePermissions();
  const [active, setActive] = useState(defaultValue);
  function handleClick() {
    updatePermission({ field: updateField, value: !active, updateId });
    setActive((a) => !a);
  }
  return (
    <ToggleButton
      active={active}
      isLoading={isLoading}
      handleClick={handleClick}
    />
  );
}

export default UpdateSingleUserPermissions;
