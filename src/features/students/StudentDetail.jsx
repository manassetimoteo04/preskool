/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useStudent } from "./useStudent";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import {
  HiCog6Tooth,
  HiOutlineAcademicCap,
  HiOutlineAtSymbol,
  HiOutlineBuildingOffice,
  HiOutlineClock,
  HiOutlineFaceSmile,
  HiOutlineIdentification,
  HiOutlineMapPin,
  HiOutlinePencil,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineWallet,
  HiPlus,
} from "react-icons/hi2";
import Button from "../../ui/Button";
import DetailBox from "../../ui/DetailBox";
import ProfileImg from "../../ui/ProfileImg";
import Tag from "../../ui/Tag";
import DetailRow from "../../ui/DetailRow";
import { calcAge } from "../../utils/helpers";
import ConfirmDelete from "../../ui/ConfirmDelete";
import EmployeeNav from "../humanResources/EmployeeNav";
import StudentNav from "./StudentNav";
import { useState } from "react";
import StudentOthersInfo from "./StudentOthersInfo";
import StudentMarksDetail from "./StudentMarksDetail";

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
const StyledConfigButton = styled.button`
  background: none;
  border: none;
  transition: all 0.5s ease;
  & > svg {
    font-size: 2.4rem;
  }
  &:hover {
    transform: rotate(180deg);
  }
  &:focus {
    outline: none;
  }
`;
function StudentDetail() {
  const { data: student, isLoading } = useStudent();
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  const {
    biUpload,
    docUpload,
    fullName,
    status,
    birthDate,
    idNumber,
    emissionDate,
    residence,
    studentPhone,
    gender,
    course,
    grade,
    schoolPeriod,
    parent,
    province,
    id,
  } = student;
  const { name, phone, email, occupation, type } = parent;
  return (
    <Modal>
      <Row type="horizontal">
        <Heading as="h2">Estudante #{student?.internNumber}</Heading>
        <Button onClick={() => navigate("edit")}>
          <HiOutlinePencil /> Editar
        </Button>
      </Row>
      <StyledDetailsGrid>
        <Row>
          <DetailBox>
            <header>
              <FlexBox>
                <ProfileImg
                  src="/default-user.jpg"
                  type={status ? "active" : "inactive"}
                />
                <div>
                  <Row type="horizontal">
                    <Tag type={status ? "active" : "inactive"}>
                      {status ? "Activo" : "Inactivo"}
                    </Tag>
                  </Row>
                  <Heading as="h2">{fullName}</Heading>
                  <small>Aderido aos 12 de Jan de 2024</small>
                  <div>
                    <Modal.Open opens="license">
                      <Button size="small">
                        <HiPlus /> Criar licença
                      </Button>
                    </Modal.Open>
                  </div>
                </div>
              </FlexBox>
            </header>
            <Detail>
              <Heading as="h3">Informações básica</Heading>
              <DetailRow>
                <span>
                  <HiOutlineUser />
                </span>
                <div>
                  <strong>Gênero</strong>
                  <span>{gender === "m" ? "Masculino" : "Femenino"} </span>
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
                  <span>{idNumber}</span>
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
                  <HiOutlineWallet />
                </span>
                <div>
                  <strong>Área de Formação</strong>
                  <span>{course} </span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineBuildingOffice />
                </span>
                <div>
                  <strong>Classe</strong>
                  <span>{grade}ª Classe </span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineClock />
                </span>
                <div>
                  <strong>Período</strong>
                  <span>{schoolPeriod} </span>
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
                  <span> manassetimoteo4@gmail.com</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlinePhone />
                </span>
                <div>
                  <strong>Telefone</strong>
                  <span>{studentPhone} </span>
                </div>
              </DetailRow>{" "}
            </Detail>
          </DetailBox>{" "}
        </Row>
        <Row>
          <Row type="horizontal">
            <StudentNav active={activeTab} setActive={setActiveTab} />

            <StyledConfigButton>
              <HiCog6Tooth />
            </StyledConfigButton>
            {/* <Modal.Window name="permissions" buttonClose={true}>
                <UserPermissionsBox />
              </Modal.Window> */}
          </Row>
          {activeTab === "informations" && (
            <StudentOthersInfo student={student} />
          )}{" "}
          {activeTab === "marks" && <StudentMarksDetail />}
          {/* {activeTab === "missings" && (
            <EmployeeMissingsTab employee={employee} />
          )}{" "}
          {activeTab === "permissions" && <UserPermissionsBox />} */}
        </Row>
      </StyledDetailsGrid>
      <Modal.Window name="documents" buttonClose={true}>
        {/* <SeeStudentDocument images={[biUpload, docUpload]} /> */}
      </Modal.Window>{" "}
      <Modal.Window name="confirmDelete">
        {/* <ConfirmDelete
          onConfirm={() =>
            deleteStudent(id, {
              onSuccess: () => navigate("/students", { replace: true }),
            })
          }
          isLoading={isDeleting}
        >
          Tens certeza que deseja exluir esse estudante?
        </ConfirmDelete> */}
      </Modal.Window>
    </Modal>
  );
}

export default StudentDetail;
