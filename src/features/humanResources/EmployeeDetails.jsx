import { useNavigate, useParams } from "react-router-dom";
import { useEmployee } from "./useEmployee";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import {
  HiCog6Tooth,
  HiOutlineAcademicCap,
  HiOutlineAtSymbol,
  HiOutlineBuildingOffice,
  HiOutlineFaceSmile,
  HiOutlineIdentification,
  HiOutlineMapPin,
  HiOutlinePencil,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineWallet,
} from "react-icons/hi2";
import styled from "styled-components";
import DetailBox from "../../ui/DetailBox";
import UserPermissionsBox from "../../ui/UserPermissionsBox";
import ProfileImg from "../../ui/ProfileImg";
import Tag from "../../ui/Tag";
import DetailRow from "../../ui/DetailRow";
import { calcAge } from "../../utils/helpers";
import EmployeeNav from "./EmployeeNav";
import EmployeeDetailTab from "./EmployeeDetailTab";
import EmployeePaymentTab from "./EmployeePaymentTab";
import EmployeeMissingsTab from "./EmployeeMissingsTab";
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
}`;
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
function EmployeeDetails() {
  const navigate = useNavigate();
  const { employeeId: id } = useParams();
  const { data: employee = {}, isLoading } = useEmployee(id);
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
  } = employee;

  const [activeTab, setActiveTab] = useState("basic-details");

  if (isLoading) return <Spinner />;
  return (
    <Modal>
      <Row>
        <Row type="horizontal">
          <Heading as="h2">Detalhes do Funcionário</Heading>
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
                    <Row type="horizontal">
                      <Tag type="active">Activo</Tag>
                    </Row>
                    <Heading as="h2">{fullName}</Heading>
                    <small>Aderido aos 12 de Jan de 2024</small>
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
            <Row type="horizontal">
              <EmployeeNav active={activeTab} setActive={setActiveTab} />

              <StyledConfigButton onClick={() => setActiveTab("permissions")}>
                <HiCog6Tooth />
              </StyledConfigButton>
              {/* <Modal.Window name="permissions" buttonClose={true}>
                <UserPermissionsBox />
              </Modal.Window> */}
            </Row>
            {activeTab === "basic-details" && (
              <EmployeeDetailTab employee={employee} />
            )}{" "}
            {activeTab === "payments" && (
              <EmployeePaymentTab employee={employee} />
            )}
            {activeTab === "missings" && (
              <EmployeeMissingsTab employee={employee} />
            )}{" "}
            {activeTab === "permissions" && <UserPermissionsBox />}
          </Row>
        </StyledDetailsGrid>
      </Row>
    </Modal>
  );
}

export default EmployeeDetails;
