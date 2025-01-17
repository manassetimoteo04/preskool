import styled from "styled-components";

const DetailBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  & > header {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid var(--color-grey-200);
    background-color: var(--color-grey-100);
  }
`;
export default DetailBox;
