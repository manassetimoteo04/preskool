import {
  HiOutlineAcademicCap,
  HiOutlineAtSymbol,
  HiOutlineBuildingOffice,
  HiOutlineClipboardDocumentCheck,
  HiOutlineFaceSmile,
  HiOutlineIdentification,
  HiOutlineMapPin,
  HiOutlinePencil,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineWallet,
} from "react-icons/hi2";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import { useGetTeacher } from "./useGetTeacher";
import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import ProfileImg from "../../ui/ProfileImg";
import Tag from "../../ui/Tag";
import TeacherNav from "./TeacherNav";
import { useState } from "react";
import TeacherDetailTab from "./TeacherDetailTab";
import DetailBox from "../../ui/DetailBox";
import { calcAge } from "../../utils/helpers";
import TeacherPaymentTab from "./TeacherPaymentTab";

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
export const DetailRow = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  & > span {
    width: 4rem;
    height: 4rem;
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
      font-size: 2rem;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    & > span {
      font-size: 1.4rem;
    }
  }
`;
const all = {
  qualification: "high-school",
  fullName: "Manasse Timóteo",
  institutionAddress: "213",
  lastInsitutionPhone: "34",
  fatherName: "123",
  qualificationCourse: "123",
  mainSubject: "345",
  cvDocument:
    "https://res.cloudinary.com/dt4fisw6m/raw/upload/v1737035616/emwqmapkojqnrk7hjrmf.jpg",
  institutionName: "123",
  lastInsitutionName: "123",
  birthDate: "2000-11-11",
  experienceYears: "2",
  motherName: "123",
  smallDescription: "345",
  actualResidence: "123",
  idCardNumber: "12",
  biDocument:
    "https://res.cloudinary.com/dt4fisw6m/raw/upload/v1737035613/sqrrctiyldjsipctdc3s.jpg",
  lastInsitutionEmail: "234@gmail.com",
  lastInsitutionAddress: "234",
  id: "xasICeGn2JfyFcgfZZvZ",
};
console.log(all);
function TeacherDetails() {
  const { teacherId: id } = useParams();
  const { data: teacher = {}, isLoading } = useGetTeacher(id);
  const {
    fullName,
    mainSubject,
    birthDate,
    idCardNumber,
    qualification,
    qualificationCourse,
    institutionAddress,
    institutionName,
  } = teacher;
  const [activeTab, setActiveTab] = useState("basic-details");
  if (isLoading) return <Spinner />;
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Detalhes do professor</Heading>
        <Button>
          <HiOutlinePencil /> Informações
        </Button>
      </Row>
      <StyledDetailsGrid>
        <Row>
          <DetailBox>
            <header>
              <FlexBox>
                <ProfileImg src="/default-user.jpg" type="active" />
                <div>
                  <Tag type="active">Activo</Tag>
                  <Heading as="h2">{fullName}</Heading>
                  <small>Aderido aos 12 de Jan de 2024</small>
                </div>
              </FlexBox>
            </header>
            <Detail>
              <Heading as="h3">Informações básica</Heading>
              <DetailRow>
                <span>
                  <HiOutlineClipboardDocumentCheck />
                </span>
                <div>
                  <strong>Disciplinas</strong>
                  <span>{mainSubject} </span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineUser />
                </span>
                <div>
                  <strong>Gênero</strong>
                  <span>Masculino </span>
                </div>
              </DetailRow>{" "}
              <DetailRow>
                <span>
                  <HiOutlineFaceSmile />
                </span>
                <div>
                  <strong>Idade</strong>
                  <span>{calcAge(birthDate)} anos </span>
                </div>
              </DetailRow>{" "}
              <DetailRow>
                <span>
                  <HiOutlineIdentification />
                </span>
                <div>
                  <strong>Número de Identificação</strong>
                  <span>{idCardNumber} </span>
                </div>
              </DetailRow>
            </Detail>
          </DetailBox>
          <DetailBox>
            <header>
              <Heading as="h3">Informações acadêmicas</Heading>
            </header>
            <Detail>
              <DetailRow>
                <span>
                  <HiOutlineAcademicCap />
                </span>
                <div>
                  <strong>Qualificação</strong>
                  <span>{qualification}</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineWallet />
                </span>
                <div>
                  <strong>Área de Formação</strong>
                  <span>{qualificationCourse} </span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineBuildingOffice />
                </span>
                <div>
                  <strong>Nome da Insituição</strong>
                  <span>{institutionName} </span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineMapPin />
                </span>
                <div>
                  <strong>Endereço da Insituição</strong>
                  <span>{institutionAddress} </span>
                </div>
              </DetailRow>
            </Detail>
          </DetailBox>
          <DetailBox>
            <header>
              <Heading as="h3">Contactos</Heading>
            </header>
            <Detail>
              <DetailRow>
                <span>
                  <HiOutlineAtSymbol />
                </span>
                <div>
                  <strong>Email</strong>
                  <span>manassetimoteo4@gmail.com </span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlinePhone />
                </span>
                <div>
                  <strong>Telefone</strong>
                  <span>940 407 979 </span>
                </div>
              </DetailRow>{" "}
            </Detail>
          </DetailBox>{" "}
        </Row>
        <Row>
          <TeacherNav active={activeTab} setActive={setActiveTab} />
          {activeTab === "basic-details" && (
            <TeacherDetailTab teacher={teacher} />
          )}{" "}
          {activeTab === "payments" && <TeacherPaymentTab teacher={teacher} />}
        </Row>
      </StyledDetailsGrid>
    </Row>
  );
}

export default TeacherDetails;
