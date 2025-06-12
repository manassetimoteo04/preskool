import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import SettingRow from "./SettingRow";
import { useSettings } from "./useSettings";
import Modal from "../../ui/Modal";
import DotLoader from "../../ui/DotLoader";
import { HiFaceFrown } from "react-icons/hi2";
import { useAcademicYear } from "./useAcademicYear";
import { useTrimester } from "./useTrimester";

const StyledGeneralSetting = styled.div`
  display: flex;
  flex-direction: column;
`;
function GeneralSettingTab() {
  const { settings = {}, isLoading, error } = useSettings("generalSettings");

  const { schoolName, currentTrimester, currentSchoolYear, description, id } =
    settings;
  const { academicYear, isLoading: isLoadingYear } =
    useAcademicYear(currentSchoolYear);
  const { trimester, isLoading: isLoadingTrimester } =
    useTrimester(currentTrimester);
  if (isLoading) return <Spinner />;

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
                {!isLoadingYear && <p>{academicYear?.year}</p>}
                {isLoadingYear && <DotLoader />}
              </SettingRow>{" "}
              <SettingRow
                name="currentQuarter"
                settingId={id}
                value={{ trimester }}
              >
                <strong>Trimestre Actual</strong>
                {!isLoadingTrimester && (
                  <p>{trimester?.trimester}º Trimestre</p>
                )}
                {isLoadingTrimester && <DotLoader />}
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
