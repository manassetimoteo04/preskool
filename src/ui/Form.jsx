import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledGroup = styled.section`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
`;
const StyledRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  gap: 2rem;
  padding: 2rem;
  position: relative;
  & > div {
    display: flex;
    flex-direction: column;
  }
  & > h4 {
    grid-column: 1/-1;
  }
`;

const StyledHeader = styled.header`
  padding: 1.5rem;
  background-color: var(--color-brand-100);
  display: flex;
  align-items: center;
  gap: 1rem;
  & > span {
    background-color: var(--color-grey-0);
    padding: 0.5rem;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius-tiny);
    & > svg {
      font-size: 2rem;
      color: var(--color-brand-700);
    }
  }
`;
const FormGroupContext = createContext();
function Form({ children, onSubmit }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}

function Header({ children, icon }) {
  return (
    <StyledHeader>
      <span>{icon}</span>
      {children}
    </StyledHeader>
  );
}
function Group({ children, columns }) {
  return (
    <FormGroupContext.Provider value={{ columns }}>
      <StyledGroup>{children}</StyledGroup>
    </FormGroupContext.Provider>
  );
}
function Row({ children }) {
  const { columns } = useContext(FormGroupContext);
  return <StyledRow columns={columns}>{children}</StyledRow>;
}

Form.Header = Header;
Form.Group = Group;
Form.Row = Row;
export default Form;
