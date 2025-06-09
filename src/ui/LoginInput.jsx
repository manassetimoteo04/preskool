import { useState } from "react";
import { HiOutlineEyeOff } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi2";
import styled, { css } from "styled-components";

const StyledLoginInput = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  position: relative;
  background-color: var(--color-grey-0);
  overflow: hidden;
  height: 4.5rem;
  ${(props) =>
    props.isFocus &&
    css`
      border: 1px solid var(--color-brand-500);
    `}
  & > span {
    border-right: 1px solid var(--color-grey-200);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
  }
  & > div {
    & > input {
      background: none;
      border: none;
      padding: 0 1.5rem;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 4rem;
      padding-top: 1rem;
      &:focus {
        outline: none;
      }
    }
    & > label {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.1s ease;
      ${(props) =>
        props.focus &&
        css`
          top: 1.2rem;
          font-size: 1rem;
          transform: translateY(-50%);
          z-index: 999;
        `}
      left: 5.5rem;
    }
    & > button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1rem;
      background: none;
      border: none;
      width: 2rem;
      font-size: 2rem;
      &:focus {
        outline: none;
      }
    }
  }

  display: grid !important;
  grid-template-columns: 4.5rem 1fr !important;
`;

function LoginInput({
  value,
  setValue,
  type = "text",
  label = "",
  placeholder = "",
  icon,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  function handleIsVisible(e) {
    e.preventDefault();
    setIsVisible((v) => !v);
  }
  return (
    <StyledLoginInput focus={isFocus || value} isFocus={isFocus}>
      <span>{icon}</span>
      <div>
        <label htmlFor="">{label}</label>
        <input
          type={isVisible ? "text" : type}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button onClick={handleIsVisible}>
            {isVisible ? <HiOutlineEyeOff /> : <HiOutlineEye />}
          </button>
        )}
      </div>
    </StyledLoginInput>
  );
}

export default LoginInput;
