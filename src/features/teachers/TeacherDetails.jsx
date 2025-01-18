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

import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import Button from "../../ui/Button";
import DetailBox from "../../ui/DetailBox";
import DetailRow from "../../ui/DetailRow";
import Heading from "../../ui/Heading";
import Loader from "../../ui/Loader";
import Modal from "../../ui/Modal";
import ProfileImg from "../../ui/ProfileImg";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";
import TeacherDetailTab from "./TeacherDetailTab";
import TeacherMissingsTab from "./TeacherMissingsTab";
import TeacherPaymentTab from "./TeacherPaymentTab";
import TeacherNav from "./TeacherNav";

import { useGetTeacher } from "./useGetTeacher";
import { calcAge } from "../../utils/helpers";
import { useSubject } from "../classes/useSubject";
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

function TeacherDetails() {
  const navigate = useNavigate();
  const { teacherId: id } = useParams();
  const { data: teacher = {}, isLoading } = useGetTeacher(id);
  const {
    fullName,
    birthDate,
    idCardNumber,
    qualification,
    qualificationCourse,
    institutionAddress,
    institutionName,
    emailAddress,
    phoneNumber,
  } = teacher;

  const { data: subjects, isLoading: isLoadingSubject } = useSubject({
    filterField: "teacherId",
    filterId: id,
  });
  const [activeTab, setActiveTab] = useState("basic-details");

  if (isLoading) return <Spinner />;
  return (
    <Modal>
      <Row>
        <Row type="horizontal">
          <Heading as="h2">Detalhes do professor</Heading>
          <Button onClick={() => navigate("edit")}>
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
                    <span>
                      {isLoadingSubject && <Loader />}
                      {!subjects?.length && <span>indisponível</span>}
                      {subjects?.map((subj) => subj.subjectName).join(", ")}
                    </span>
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
                    <span>{emailAddress} </span>
                  </div>
                </DetailRow>
                <DetailRow>
                  <span>
                    <HiOutlinePhone />
                  </span>
                  <div>
                    <strong>Telefone</strong>
                    <span>{phoneNumber} </span>
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
            {activeTab === "payments" && (
              <TeacherPaymentTab teacher={teacher} />
            )}
            {activeTab === "missings" && (
              <TeacherMissingsTab teacher={teacher} />
            )}
          </Row>
        </StyledDetailsGrid>
      </Row>
    </Modal>
  );
}

export default TeacherDetails;
