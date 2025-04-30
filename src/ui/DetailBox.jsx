import styled from "styled-components";

const DetailBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  & > header {
    padding: 1.5rem 2rem;
    display: flex;
    border-bottom: 1px solid var(--color-grey-200);
    /* background-color: var(--color-grey-100); */
    & > a {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      gap: 0.5rem;
      &:hover {
        color: var(--color-brand-500);
      }
    }
  }
`;
export default DetailBox;
