import styled from "styled-components";
import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import DetailRow from "../../ui/DetailRow";
import {
  HiOutlineAtSymbol,
  HiOutlineBriefcase,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi2";
import { FaRegFilePdf } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { useCallback } from "react";

const StyledEmployeeDetailTab = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
const Detail = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DocumentBox = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr 4rem;
  align-items: center;

  gap: 1rem;
  background-color: var(--color-grey-100);
  padding: 0.5rem;
  border-radius: var(--border-radius-md);
  & > span {
    background-color: var(--color-grey-0);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: var(--border-radius-sm);
  }
  & > button {
    background-color: var(--color-brand-600);
    border: none;
    color: var(--color-brand-0);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: var(--border-radius-sm);
    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

const SpreadCol = styled.div`
  grid-column: 1/-1;
`;

const DetailBoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
`;
function StudentOthersInfo({ student }) {
  const {
    residence,
    biUpload,
    docUpload,
    parent: {
      phone: parentPhone,
      occupation: parentOccupation,
      email: parentEmail,
      name: parentName,
      type: parentType,
    } = {},
  } = student || {};

  const openBlankLink = useCallback((link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <>
      <StyledEmployeeDetailTab>
        <DetailBox>
          <header>
            <Heading as="h3">Endereços e Residência</Heading>
          </header>
          <Detail>
            <DetailRow>
              <span>
                <HiOutlineMapPin />
              </span>
              <div>
                <strong>Endereço actual</strong>
                <span>{residence}</span>
              </div>
            </DetailRow>{" "}
            <DetailRow>
              <span>
                <HiOutlineMapPin />
              </span>
              <div>
                <strong>Endereço permanente</strong>
                <span>{residence}</span>
              </div>
            </DetailRow>
          </Detail>
        </DetailBox>
        <DetailBox>
          <header>
            <Heading as="h3">Documentos</Heading>
          </header>
          <Detail>
            <DocumentBox>
              <span>
                <FaRegFilePdf />
              </span>
              <p>bilhete.pdf</p>
              <button onClick={() => openBlankLink(biUpload)}>
                <FiDownload />
              </button>
            </DocumentBox>
            <DocumentBox>
              <span>
                <FaRegFilePdf />
              </span>
              <p>certificado/transferencia.pdf</p>
              <button onClick={() => openBlankLink(docUpload)}>
                <FiDownload />
              </button>
            </DocumentBox>
          </Detail>
        </DetailBox>{" "}
        <SpreadCol>
          <DetailBox>
            <header>
              <Heading as="h3">
                Informações do {parentType === "father" ? "pai" : "mãe"}
              </Heading>
            </header>
            <DetailBoxGrid>
              <DetailRow>
                <span>
                  <HiOutlineUser />
                </span>
                <div>
                  <strong>Nome Completo</strong>
                  <span>{parentName}</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineAtSymbol />
                </span>
                <div>
                  <strong>Endereço de Email</strong>
                  <span>{parentEmail}</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineBriefcase />
                </span>
                <div>
                  <strong>Ocupação</strong>
                  <span>{parentOccupation}</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlinePhone />
                </span>
                <div>
                  <strong>Telefone</strong>
                  <span>{parentPhone}</span>
                </div>
              </DetailRow>
            </DetailBoxGrid>
          </DetailBox>
        </SpreadCol>{" "}
      </StyledEmployeeDetailTab>
    </>
  );
}

export default StudentOthersInfo;
