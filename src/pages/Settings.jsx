import Row from "../ui/Row";
import Heading from "../ui/Heading";
import SettingsLayout from "../features/settings/SettingsLayout";

function Settings() {
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Configurações</Heading>
      </Row>
      <SettingsLayout />
    </Row>
  );
}

export default Settings;
