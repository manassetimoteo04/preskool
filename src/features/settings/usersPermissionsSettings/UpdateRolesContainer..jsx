import styled from "styled-components";
import Heading from "../../../ui/Heading";
import { useRolePermissions } from "./useRolePermissions";
import Spinner from "../../../ui/Spinner";
import RolePermissionRow from "./RolePermissionRow";
import Empty from "../../../ui/Empty";
import { HiFaceFrown } from "react-icons/hi2";

const StyledRolesContainer = styled.div`
  min-width: 40rem;
`;
const Role = styled.span`
  background-color: var(--color-grey-200);
  padding: 0.06rem 0.5rem;
  display: inline-block;
  border-radius: var(--border-radius-sm);
`;
const Header = styled.header`
  padding: 2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-200);
  & > div {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

function UpdateRolesContainer({ role, id }) {
  const { data, isLoading, error } = useRolePermissions(id);
  if (isLoading) return <Spinner />;
  const permissions = Object.entries(data || {})
    ?.filter(([key, role]) => {
      if (key === "id" || key === "roleId") return;
      else return [key, role];
    })
    ?.sort((a, b) => a[0].localeCompare(b[0]));

  console.log(data);

  return (
    <StyledRolesContainer>
      <Header>
        <div>
          <Heading as="h2">Actualizar roles</Heading>
          &mdash;
          <Role>{role}</Role>
        </div>
      </Header>
      {!error ? (
        <div>
          {permissions.map(([key, role]) => (
            <RolePermissionRow
              role={role}
              key={key}
              updateId={data?.id}
              updateField={key}
            />
          ))}
        </div>
      ) : (
        <Empty>
          <HiFaceFrown />
          {error?.message}
        </Empty>
      )}
    </StyledRolesContainer>
  );
}

export default UpdateRolesContainer;
