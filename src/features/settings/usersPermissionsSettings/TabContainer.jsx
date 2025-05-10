import { useCurrentTab } from "./TabContext";
import ProfilesManagementTab from "./ProfilesManagementTab";
import Modal from "../../../ui/Modal";
import CreateEditUsersTab from "./CreateEditUsersTab";
import UsersReportsTab from "./UsersReportsTab";

const disciplinas = {
  História: [],
  Geografia: [],
  Filosofia: ["História"],
  Sociologia: ["Filosofia", "Geografia", "Química II"],
  Matematica: ["Fisica", "Química"],
};
const concluidas = ["Geografia", "Filosofia", "História", "Química II"];

function podeCursar(
  disciplina,
  concluidas,
  disciplinasMap,
  verificadas = new Set()
) {
  // Verifica se já foi verificada para evitar loop infinito
  if (verificadas.has(disciplina)) return true;

  const preReq = disciplinasMap[disciplina];
  if (preReq.length === 0) return true;

  // Marca a disciplina como verificada
  verificadas.add(disciplina);

  // Verifica se todos os pré-requisitos podem ser cursados
  return preReq.every((req) => {
    return (
      concluidas.includes(req) ||
      podeCursar(req, concluidas, disciplinasMap, verificadas)
    );
  });
}

console.log(podeCursar("Filosofia", concluidas, disciplinas));
console.log(podeCursar("Sociologia", concluidas, disciplinas));
console.log(podeCursar("Sociologia", concluidas, disciplinas));

function TabContainer() {
  const { currentTab } = useCurrentTab();
  return (
    <Modal>
      {currentTab === "profile-roles" && <ProfilesManagementTab />}
      {currentTab === "create-edit-users" && <CreateEditUsersTab />}
      {currentTab === "users-reports" && <UsersReportsTab />}
    </Modal>
  );
}

export default TabContainer;
