import { useUser } from "@clerk/clerk-react";
import styled from "styled-components";
import DetailBox from "../../../ui/DetailBox";
import ProfileImg from "../../../ui/ProfileImg";
import Row from "../../../ui/Row";
import Tag from "../../../ui/Tag";
import Heading from "../../../ui/Heading";
import DetailRow from "../../../ui/DetailRow";
import {
  HiOutlineAcademicCap,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import {
  HiOutlineCalendar,
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { useStudent } from "../../students/useStudent";
import { useClasse } from "../../classes/useClasse";
import { useCourse } from "../../classes/useCourse";
import { useGrades } from "../../settings/classesAndGrades/useGrades";
import Spinner from "../../../ui/Spinner";
import PersonalInfo from "./PersonalInfo";
import StudentTabNav from "./StudentTabNav";
import { useState } from "react";
import PaymentsInfo from "./PaymentsInfo";
const StyledDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
`;
const FlexBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
const Detail = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function ProfileDetails() {
  const { user } = useUser();
  const [active, setActive] = useState("informations");
  const { data: student, isLoading } = useStudent(user?.id);

  const { classe, isLoading: classeLoading } = useClasse({
    id: student?.classId,
  });
  const { data: grade, isLoading: gradeLoading } = useGrades(classe?.gradeId);
  const { data: course, isLoading: courseLoading } = useCourse(grade?.courseId);
  if (isLoading) return <Spinner />;
  return (
    <StyledDetailsGrid>
      <DetailBox>
        <header>
          <FlexBox>
            <ProfileImg
              src={user?.imageUrl || "/default-user.jpg"}
              type={"inactive"}
            />
            <div>
              <Row type="horizontal">
                <Tag type="inactive">Inactivo</Tag>
              </Row>
              <Heading as="h2">{student?.fullName}</Heading>
              <small>{user?.username?.toLocaleUpperCase()}</small>
              <div></div>
            </div>
          </FlexBox>
        </header>
        <Detail>
          <Heading as="h3">Informações básica</Heading>
          <DetailRow>
            <span>
              <HiOutlinePhone />
            </span>
            <div>
              <strong>Telefone</strong>
              <span> {student?.studentPhone}</span>
            </div>
          </DetailRow>{" "}
          <DetailRow>
            <span>
              <HiOutlineMail />
            </span>
            <div>
              <strong>Email</strong>
              <span> desconhecido</span>
            </div>
          </DetailRow>{" "}
          <DetailRow>
            <span>
              <HiOutlineCalendar />
            </span>
            <div>
              <strong>Aderido aos</strong>
              <span> 19 Setempbro 2024 | 2024/2025</span>
            </div>
          </DetailRow>
        </Detail>{" "}
        <Detail>
          <Heading as="h3">Informações da Turma</Heading>
          <DetailRow>
            <span>
              <HiOutlineAcademicCap />
            </span>
            <div>
              <strong>Curso/Ensino</strong>
              <span> {courseLoading ? "Carregando" : course?.courseName}</span>
            </div>
          </DetailRow>{" "}
          <DetailRow>
            <span>
              <HiOutlineCalendarDays />
            </span>
            <div>
              <strong>Ano Corrente</strong>
              <span> {gradeLoading ? "Carregando" : grade?.gradeYear}</span>
            </div>
          </DetailRow>{" "}
          <DetailRow>
            <span>
              <HiOutlineHomeModern />
            </span>
            <div>
              <strong>Turma</strong>
              <span>
                {" "}
                {`Turma - ${classeLoading ? "Carregando" : classe?.variation}`}
              </span>
            </div>
          </DetailRow>
          <DetailRow>
            <span>
              <HiOutlineClock />
            </span>
            <div>
              <strong>Período</strong>
              <span> {`${classeLoading ? "Carregando" : classe?.period}`}</span>
            </div>
          </DetailRow>
        </Detail>
      </DetailBox>
      <Row>
        <StudentTabNav active={active} setActive={setActive} />
        <DetailBox>
          {active === "informations" && <PersonalInfo />}
          {active === "payments" && <PaymentsInfo />}
        </DetailBox>
      </Row>
    </StyledDetailsGrid>
  );
}

export default ProfileDetails;
