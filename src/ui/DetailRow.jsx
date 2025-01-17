import styled from "styled-components";

const DetailRow = styled.div`
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
export default DetailRow;
