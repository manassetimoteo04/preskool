import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import DetailBox from "../../../ui/DetailBox";
import DetailRow from "../../../ui/DetailRow";
import {
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import TeacherClassStudentsTable from "./TeacherClassStudentsTable";

const StyledDetails = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
`;

const Pad = styled.div`
  padding: 1rem;
`;
function TeacherClassDetails() {
  return (
    <Row>
      <Heading as="h2">Informações da Turma</Heading>
      <StyledDetails>
        <div>
          <DetailBox>
            <header>
              <strong>Turma #AMINFO2</strong>
            </header>
            <Pad>
              <DetailRow>
                <span>
                  <HiOutlineAcademicCap />
                </span>
                <div>
                  <strong>Curso</strong>
                  <span>Informática</span>
                </div>
              </DetailRow>
            </Pad>
            <Pad>
              <DetailRow>
                <span>
                  <HiOutlineHomeModern />
                </span>
                <div>
                  <strong>Turma</strong>
                  <span>A</span>
                </div>
              </DetailRow>
            </Pad>
            <Pad>
              <DetailRow>
                <span>
                  <HiOutlineHome />
                </span>
                <div>
                  <strong>Sala</strong>
                  <span>03</span>
                </div>
              </DetailRow>
            </Pad>
            <Pad>
              <DetailRow>
                <span>
                  <HiOutlineClock />
                </span>
                <div>
                  <strong>Período</strong>
                  <span>Tarde</span>
                </div>
              </DetailRow>
            </Pad>{" "}
            <Pad>
              <DetailRow>
                <span>
                  <HiOutlineUserGroup />
                </span>
                <div>
                  <strong>Estudantes</strong>
                  <span>45</span>
                </div>
              </DetailRow>
            </Pad>
          </DetailBox>
        </div>
        <TeacherClassStudentsTable />
      </StyledDetails>
    </Row>
  );
}

export default TeacherClassDetails;
