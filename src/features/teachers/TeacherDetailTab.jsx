import styled from "styled-components";
import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import DetailRow from "../../ui/DetailRow";
import {
  HiOutlineAtSymbol,
  HiOutlineBriefcase,
  HiOutlineBuildingLibrary,
  HiOutlineBuildingOffice,
  HiOutlineCreditCard,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { FaRegFilePdf } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { useCallback } from "react";

const StyledTeacherDetailTab = styled.div`
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

function TeacherDetailTab({ teacher }) {
  const {
    lastInsitutionPhone,
    cvDocument,
    lastInsitutionName,
    experienceYears,
    actualResidence,
    biDocument,
    lastInsitutionEmail,
    lastInsitutionAddress,
  } = teacher || {};
  const openBlankLink = useCallback((link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <>
      <StyledTeacherDetailTab>
        <DetailBox>
          <header>
            <Heading as="h3">Endereços</Heading>
          </header>
          <Detail>
            <DetailRow>
              <span>
                <HiOutlineMapPin />
              </span>
              <div>
                <strong>Endereço actual</strong>
                <span>{actualResidence}</span>
              </div>
            </DetailRow>{" "}
            <DetailRow>
              <span>
                <HiOutlineMapPin />
              </span>
              <div>
                <strong>Endereço permanente</strong>
                <span>{actualResidence}</span>
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
              <button onClick={() => openBlankLink(biDocument)}>
                <FiDownload />
              </button>
            </DocumentBox>
            <DocumentBox>
              <span>
                <FaRegFilePdf />
              </span>
              <p>cv.pdf</p>
              <button onClick={() => openBlankLink(cvDocument)}>
                <FiDownload />
              </button>
            </DocumentBox>
          </Detail>
        </DetailBox>{" "}
        <SpreadCol>
          <DetailBox>
            <header>
              <Heading as="h3">Experiências</Heading>
            </header>
            <DetailBoxGrid>
              <DetailRow>
                <span>
                  <HiOutlineBriefcase />
                </span>
                <div>
                  <strong>Tempo de experiência</strong>
                  <span>{experienceYears} anos</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineBuildingOffice />
                </span>
                <div>
                  <strong>Insituição anterior</strong>
                  <span>{lastInsitutionName}</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineAtSymbol />
                </span>
                <div>
                  <strong>Email da intituição anterior</strong>
                  <span>{lastInsitutionEmail}</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineMapPin />
                </span>
                <div>
                  <strong>Localização</strong>
                  <span>{lastInsitutionAddress}</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlinePhone />
                </span>
                <div>
                  <strong>Telefone da Insituição</strong>
                  <span>{lastInsitutionPhone}</span>
                </div>
              </DetailRow>
            </DetailBoxGrid>
          </DetailBox>
        </SpreadCol>{" "}
        <SpreadCol>
          <DetailBox>
            <header>
              <Heading as="h3">Informações bancárias</Heading>
            </header>
            <DetailBoxGrid>
              <DetailRow>
                <span>
                  <HiOutlineBriefcase />
                </span>
                <div>
                  <strong>Nome da conta</strong>
                  <span>Manasse Timóteo</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineCreditCard />
                </span>
                <div>
                  <strong>Número da Conta</strong>
                  <span>000.3434.555.5.3</span>
                </div>
              </DetailRow>
              <DetailRow>
                <span>
                  <HiOutlineBuildingLibrary />
                </span>
                <div>
                  <strong>Nome do banco</strong>
                  <span>proglory@hotmail.com</span>
                </div>
              </DetailRow>
            </DetailBoxGrid>
          </DetailBox>
        </SpreadCol>
      </StyledTeacherDetailTab>
    </>
  );
}

export default TeacherDetailTab;
