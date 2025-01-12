import styled from "styled-components";

const Input = styled.input`
  &:focus {
    outline: none;
  }
`;
const StyledRadioGroup = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 0rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
function RadioInputGroup({ setter: setValue, value }) {
  return (
    <StyledRadioGroup>
      <div>
        <Input
          type="radio"
          checked={value === "m"}
          id="m"
          name="m"
          onClick={() => setValue("m")}
        />
        <label htmlFor="m">Masculino</label>
      </div>
      <div>
        <Input
          type="radio"
          checked={value === "f"}
          id="f"
          name="f"
          onClick={() => setValue("f")}
        />
        <label htmlFor="f">Femenino</label>
      </div>
    </StyledRadioGroup>
  );
}

export default RadioInputGroup;
