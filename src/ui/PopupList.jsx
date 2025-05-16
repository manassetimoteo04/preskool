import styled from "styled-components";

const PopupList = styled.div`
  position: absolute;
  background-color: var(--color-grey-0);
  padding: 1rem;
  width: 100%;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-grey-100);
  max-height: 20rem;
  overflow: auto;
  z-index: 9999999999;
  border-radius: var(--border-radius-sm);
  & > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.5rem;
    &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-200);
    }
    &:hover {
      background-color: var(--color-grey-100);
      cursor: pointer;
    }
  }
`;
export default PopupList;
