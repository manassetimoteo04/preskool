import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import SettingRow from "./SettingRow";
import { useSettings } from "./useSettings";

const StyledGeneralSetting = styled.div`
  display: flex;
  flex-direction: column;
`;
function GeneralSettingTab() {
  const { settings = {}, isLoading } = useSettings("generalSettings");
  if (isLoading) return <Spinner />;
  const { schoolName, currentQuarter, currentSchoolYear, description } =
    settings;
  return (
    <StyledGeneralSetting>
      <Row>
        <Heading as="h2">Configurações Gerais</Heading>
        <div>
          <SettingRow>
            <strong>Nome da Escola</strong>
            <p>{schoolName}</p>
            <span>Update</span>
          </SettingRow>{" "}
          <SettingRow>
            <strong>Ano Lectivo Actual</strong>
            <p>{currentSchoolYear}</p>
            <span>Update</span>
          </SettingRow>{" "}
          <SettingRow>
            <strong>Trimestre Actual</strong>
            <p>{currentQuarter} Trimestre</p>
            <span>Update</span>
          </SettingRow>{" "}
          <SettingRow>
            <strong>Descrição</strong>
            <p>{description}</p>
            <span>Update</span>
          </SettingRow>
        </div>
      </Row>
    </StyledGeneralSetting>
  );
}

export default GeneralSettingTab;
