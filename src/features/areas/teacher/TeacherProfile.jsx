import styled from "styled-components";
import DetailBox from "../../../ui/DetailBox";
import ProfileImg from "../../../ui/ProfileImg";
import Spinner from "../../../ui/Spinner";
import { useGetTeacher } from "../../teachers/useGetTeacher";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import Row from "../../../ui/Row";
import Tag from "../../../ui/Tag";
import Heading from "../../../ui/Heading";
import DetailRow from "../../../ui/DetailRow";
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineHomeModern,
  HiOutlinePhone,
} from "react-icons/hi2";
import TeacherTabNav from "./TeacherTabNav";
import { HiOutlineMail } from "react-icons/hi";
import TeacherPersonalInfo from "./TeacherPersonalInfo";

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
function TeacherProfile() {
  const { user } = useUser();
  const [active, setActive] = useState("informations");
  const { data: teacher, isLoading } = useGetTeacher(user?.id);

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
              <Heading as="h2">{teacher?.fullName}</Heading>
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
              <span> {teacher?.phoneNumber}</span>
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
          <Heading as="h3">Informações Acadêmica</Heading>
          <DetailRow>
            <span>
              <HiOutlineAcademicCap />
            </span>
            <div>
              <strong>Qualificação</strong>
              <span>{teacher.qualification}</span>
            </div>
          </DetailRow>
          <DetailRow>
            <span>
              <HiOutlineBookOpen />
            </span>
            <div>
              <strong>Área de Formação</strong>
              <span>{teacher.qualificationCourse}</span>
            </div>
          </DetailRow>
          <DetailRow>
            <span>
              <HiOutlineHomeModern />
            </span>
            <div>
              <strong>Instituição</strong>
              <span>{teacher.institutionName}</span>
            </div>
          </DetailRow>
        </Detail>
      </DetailBox>
      <Row>
        <TeacherTabNav active={active} setActive={setActive} />
        <DetailBox>
          {active === "informations" && (
            <TeacherPersonalInfo teacher={teacher} />
          )}
        </DetailBox>
      </Row>
    </StyledDetailsGrid>
  );
}

export default TeacherProfile;
