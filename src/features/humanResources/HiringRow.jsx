import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import styled from "styled-components";

const StyledHiringRow = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
  &:hover {
    background-color: var(--color-grey-50);
  }
  & > span {
    width: 4rem;
    height: 4rem;
    background-color: var(--color-brand-700);
    border-radius: var(--border-radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
      font-size: 2rem;
    }
  }
  & > div {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    width: 100%;
    justify-content: center;
    & > span {
      font-size: 1.4rem;
    }
  }
`;
function HiringRow() {
  return (
    <StyledHiringRow>
      <span>
        <HiOutlineArrowUpOnSquare />
      </span>
      <div>
        <Heading as="h3">Manasse Timóteo</Heading>
        <span>12 Jan 2024</span>
        <span>Professor</span>
        <Tag type="pending">Contratado</Tag>
      </div>
    </StyledHiringRow>
  );
}

export default HiringRow;
