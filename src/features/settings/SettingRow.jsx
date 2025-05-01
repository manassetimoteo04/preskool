import styled from "styled-components";

const StyledSettingRow = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr 4rem;
  padding: 2rem 0;
  gap: 2rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function SettingRow({ children }) {
  return <StyledSettingRow>{children}</StyledSettingRow>;
}

export default SettingRow;
