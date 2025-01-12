import styled from "styled-components";

const StyledSelect = styled.div`
  padding: 0.3rem 1rem;
  background-color: var(--color-grey-0);
  font-size: inherit;
  border-radius: var(--border-radius-sm);
  border: none;
  border: 1px solid var(--color-grey-200);
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  & > svg {
    border-right: 2px solid var(--color-grey-300);
    font-size: 1.8rem;
    padding-right: 0.2rem;
  }
`;
const RealSelect = styled.select`
  padding: 0.7rem;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: var(--color-grey-0);
`;
function Select({ icon, value, options, setValue }) {
  return (
    <StyledSelect>
      {icon}
      <RealSelect value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </RealSelect>
    </StyledSelect>
  );
}

export default Select;
