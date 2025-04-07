import Table from "../../ui/Table";

function EmployeeLeaveTableRow() {
  return (
    <Table.Row>
      <span>img</span>
      <StyledConcatedBox>
        <p>{employee.fullName}</p>
        <span>{employee.emailAddress}</span>
      </StyledConcatedBox>
      <StyledConcatedBox>
        <p>{employee?.qualification}</p>
        <span>{employee?.qualificationCourse}</span>
      </StyledConcatedBox>
      <span>{employee?.sectorId}</span>
      <span>12 Jan 2025</span>
      {isLoading ? (
        <span>Buscando...</span>
      ) : (
        <Tag type={status ? "active" : "inactive"}>
          {status ? "Ativo" : "Inactivo"}
        </Tag>
      )}
      <Menus.Toggle menuId={employee.id} />
      <Menus.Menu menuId={employee.id}>
        <Menus.List>
          <Menus.Button
            onClick={() => navigate(`employee/${employee.id}`)}
            icon={<HiEye />}
          >
            Ver Detalhes
          </Menus.Button>
          <Menus.Button
            onClick={() => navigate(`employee/${employee.id}/edit`)}
            icon={<HiPencil />}
          >
            Editar
          </Menus.Button>
          <Menus.Button icon={<HiTrash />}>Deletar </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default EmployeeLeaveTableRow;
