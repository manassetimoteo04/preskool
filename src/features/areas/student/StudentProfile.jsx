import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import ProfileDetails from "./ProfileDetails";

function StudentProfile() {
  return (
    <Row>
      <Heading as="h2">Bem-vindo Estudante</Heading>
      <ProfileDetails />
    </Row>
  );
}

export default StudentProfile;
