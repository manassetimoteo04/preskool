import styled from "styled-components";
import Row from "../../../ui/Row";
import Heading from "../../../ui/Heading";
import Spinner from "../../../ui/Spinner";
import ButtonBackTab from "./ButtonBackTab";
import RoleRow from "./RoleRow";
import { useRolesSettings } from "./useRolesSettings";

const StyledTabHeader = styled.header`
  gap: 0.5rem;
  display: flex;
  align-items: center;
`;
const StyledRolesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > ul {
    display: flex;
    flex-direction: column;
  }
`;

function ProfilesManagementTab() {
  const { data, isLoading } = useRolesSettings();
  if (isLoading) return <Spinner />;
  const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <Row>
      <StyledTabHeader>
        <ButtonBackTab />
        <Heading as="h2"> Gestão de Perfis (Roles)</Heading>
      </StyledTabHeader>
      <StyledRolesList>
        <span>
          Controle os perfis de usuário e defina funções para garantir acessos
          adequados e seguros à plataforma
        </span>
        <ul>
          {sorted.map((role) => {
            return (
              <RoleRow
                key={role.id}
                role={role.name}
                label={role.description}
              />
            );
          })}
        </ul>
      </StyledRolesList>
    </Row>
  );
}

export default ProfilesManagementTab;
