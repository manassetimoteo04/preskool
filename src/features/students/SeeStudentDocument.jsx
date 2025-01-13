import styled, { keyframes } from "styled-components";
import Heading from "../../ui/Heading";
import { HiOutlineDocument } from "react-icons/hi2";
import { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const StyledSeeDocument = styled.div`
  padding: 1rem;
  max-width: 80rem;
`;

const StyledDocumentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem 0;
`;
const StyledDocBox = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 2rem;
    background-color: var(--color-brand-100);
  }
`;
const ImageBox = styled.div`
  min-height: 40rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  & > img {
    transition: 0.5s;
    transform: scale(150%);

    object-fit: cover;
  }
  &:hover > img {
    transition: 0.5s;

    filter: blur(1rem) grayscale(1);
  }
  &:hover::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "Clique para ver";
    position: absolute;
    background-color: var(--backdrop-color);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-brand-0);
  }
  &:hover > img {
    transform: scale(160%);
  }
`;
const Image = styled.img`
width:100%
  height: auto;
`;

const DocumentOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  overflow: scroll;
  backdrop-filter: blur(2rem);
  background-color: var(--backdrop-color);
`;

const reveal = keyframes`
from{
    transform: scale(70%)
}
 to{ transform: scale(100%)}`;
const DocContainer = styled.div`
  max-width: 40rem;
  margin: 10rem auto;
  animation: ${reveal} 0.2s ease;
`;
function SeeStudentDocument({ images }) {
  const [currentDoc, setCurrentDoc] = useState("");
  const ref = useOutsideClick(() => setCurrentDoc(""));
  function handleClick(url) {
    setCurrentDoc(url);
  }
  return (
    <>
      {currentDoc && (
        <DocumentOverlay>
          <DocContainer ref={ref}>
            <Image src={currentDoc} />
          </DocContainer>
        </DocumentOverlay>
      )}
      <StyledSeeDocument>
        <Heading as="h2">Documentos</Heading>
        <StyledDocumentGrid>
          <StyledDocBox>
            <span>
              <HiOutlineDocument />
              Bilhete de Identidade
            </span>
            <ImageBox onClick={() => handleClick(images.at(0))}>
              <Image src={images.at(0)} />
            </ImageBox>
          </StyledDocBox>
          <StyledDocBox>
            <span>
              <HiOutlineDocument />
              Certificado/Transferência
            </span>
            <ImageBox onClick={() => handleClick(images.at(1))}>
              <Image src={images.at(1)} />
            </ImageBox>
          </StyledDocBox>
        </StyledDocumentGrid>
      </StyledSeeDocument>
    </>
  );
}

export default SeeStudentDocument;
