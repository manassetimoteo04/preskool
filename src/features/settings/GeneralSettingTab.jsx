import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import SettingRow from "./SettingRow";
import { useSettings } from "./useSettings";
import Modal from "../../ui/Modal";
import { HiFaceFrown } from "react-icons/hi2";

const StyledGeneralSetting = styled.div`
  display: flex;
  flex-direction: column;
`;
function GeneralSettingTab() {
  const { settings = {}, isLoading, error } = useSettings("generalSettings");
  if (isLoading) return <Spinner />;
  const { schoolName, currentQuarter, currentSchoolYear, description, id } =
    settings;

  return (
    <Modal>
      <StyledGeneralSetting>
        <Row>
          <Heading as="h2">Configurações Gerais</Heading>
          {!error ? (
            <div>
              <SettingRow
                name="schoolName"
                settingId={id}
                value={{ schoolName }}
              >
                <strong>Nome da Escola</strong>
                <p>{schoolName}</p>
              </SettingRow>{" "}
              <SettingRow
                name="currentSchoolYear"
                settingId={id}
                value={{ currentSchoolYear }}
              >
                <strong>Ano Lectivo Actual</strong>
                <p>{currentSchoolYear}</p>
              </SettingRow>{" "}
              <SettingRow
                name="currentQuarter"
                settingId={id}
                value={{ currentQuarter }}
              >
                <strong>Trimestre Actual</strong>
                <p>{currentQuarter} Trimestre</p>
              </SettingRow>{" "}
              <SettingRow
                name="description"
                settingId={id}
                value={{ description }}
              >
                <strong>Descrição</strong>
                <p>{description}</p>
              </SettingRow>
            </div>
          ) : (
            <Empty>
              <HiFaceFrown />
              {error?.message}
            </Empty>
          )}
        </Row>
      </StyledGeneralSetting>
    </Modal>
  );
}

export default GeneralSettingTab;
