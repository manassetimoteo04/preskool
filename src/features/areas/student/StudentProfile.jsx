import { useUser } from "@clerk/clerk-react";
import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import ProfileDetails from "./ProfileDetails";

function StudentProfile() {
  const { user } = useUser();
  console.log(user);
  return (
    <Row>
      <Heading as="h2">Bem-vindo Estudante</Heading>
      <ProfileDetails />
    </Row>
  );
}

export default StudentProfile;
