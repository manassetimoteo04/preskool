import styled from "styled-components";
import Heading from "./Heading";
import ToggleButton from "./ToggleButton";
import Button from "./Button";
import DangerArea from "./DangerArea";
import ConfirmDelete from "./ConfirmDelete";
import { HiOutlineTrash } from "react-icons/hi2";
import { useDeleteEmployee } from "../features/humanResources/useDeleteEmployee";
import Modal from "./Modal";
import { usePermissions } from "../features/humanResources/usePermissions";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
const StyledPermissionBox = styled.div`
  & > header {
    padding: 0 2rem;
    margin-bottom: 2rem;
    & > h3 {
      line-height: 0;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
  }
`;

const PermissionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-grey-100);
  padding: 1rem 2rem;
  gap: 5rem;
  border-radius: 0.5rem;
`;

function UserPermissionsBox() {
  const { employeeId } = useParams();
  const { deleteEmployee, isLoading } = useDeleteEmployee();
  const { permissions = {}, isLoading: isGettingPermission } =
    usePermissions(employeeId);
  const {
    id,
    postGrades,
    AddStudent,
    addTeacher,
    manageMonthlyPayments,
    generateBillsCharges,
    systemsAccess,
    updateProfile,
    status,
    manageClassSubject,
  } = permissions;

  if (isGettingPermission) return <Spinner />;
  return (
    <StyledPermissionBox>
      <header>
        <Heading as="h3">Actualizar Permissões</Heading>
      </header>
      <div>
        <PermissionsBox>
          <span>Status</span>
          <ToggleButton
            updateId={id}
            defaultValue={status}
            updateField="status"
          />
        </PermissionsBox>
        <PermissionsBox>
          <span>Acessar o sistema</span>
          <ToggleButton
            updateId={id}
            defaultValue={systemsAccess}
            updateField="systemsAccess"
          />
        </PermissionsBox>
        <PermissionsBox>
          <span>Atualizar informações do próprio perfil</span>
          <ToggleButton
            updateId={id}
            defaultValue={updateProfile}
            updateField="updateProfile"
          />
        </PermissionsBox>
        <PermissionsBox>
          <span>Cadastrar/editar/remover alunos</span>
          <ToggleButton
            updateId={id}
            defaultValue={AddStudent}
            updateField="AddStudent"
          />
        </PermissionsBox>
        <PermissionsBox>
          <span>Cadastrar/editar/remover professores</span>
          <ToggleButton
            updateId={id}
            defaultValue={addTeacher}
            updateField="addTeacher"
          />
        </PermissionsBox>
        <PermissionsBox>
          <span>Gerenciar turmas e disciplinas</span>
          <ToggleButton
            updateId={id}
            defaultValue={manageClassSubject}
            updateField="manageClassSubject"
          />
        </PermissionsBox>
        <PermissionsBox>
          <span>Gerenciar mensalidades e faturas</span>
          <ToggleButton
            updateId={id}
            defaultValue={manageMonthlyPayments}
            updateField="manageMonthlyPayments"
          />
        </PermissionsBox>
        <PermissionsBox>
          <span>Gerar boletos e cobranças</span>
          <ToggleButton
            updateId={id}
            defaultValue={generateBillsCharges}
            updateField="generateBillsCharges"
          />
        </PermissionsBox>
        <PermissionsBox>
          <span>Lançar notas e avaliações</span>
          <ToggleButton
            updateId={id}
            defaultValue={postGrades}
            updateField="postGrades"
          />
        </PermissionsBox>
      </div>
      <DangerArea>
        <Modal.Open opens="delete-employee">
          <Button variation="danger">
            <HiOutlineTrash />
            Excluir Funcionário
          </Button>
        </Modal.Open>
      </DangerArea>
      <Modal.Window name="delete-employee">
        <ConfirmDelete
          onConfirm={() => deleteEmployee(employeeId)}
          isLoading={isLoading}
        >
          Tens a certeza de que deseja Excluir este funcionário?
        </ConfirmDelete>
      </Modal.Window>
    </StyledPermissionBox>
  );
}

export default UserPermissionsBox;
