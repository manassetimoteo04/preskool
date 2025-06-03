import styled, { css } from "styled-components";
import SmallUserImg from "./SmallUserImg";
import { HiChevronDown } from "react-icons/hi2";
import { useUser } from "@clerk/clerk-react";
const StyledUserBox = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  &:hover {
    background-color: var(--color-grey-100);
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border: none;
  }
  gap: 1rem;
  & > div > p {
    font-weight: 600;
  }
  & > span > span {
    font-size: 1.4rem;
    opacity: 0.8;
  }
  & > span {
    display: flex;
    height: 100%;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  ${(props) =>
    props.isOpen &&
    css`
      background-color: var(--color-grey-100);
    `};
  & > svg {
    ${(props) =>
      props.isOpen &&
      css`
        transform: rotate(-180deg);
      `};
    transition: all 0.2s;
  }
`;

function UserBox({ isOpen, onClick }) {
  const { isLoaded, user } = useUser();
  return (
    <StyledUserBox onClick={onClick} isOpen={isOpen}>
      <SmallUserImg
        draggable="false"
        oncontextmenu="false"
        src={user?.imageUrl || `/default-user.jpg`}
      />
      <span>
        <p>{isLoaded ? "Manasse Timóteo" : "Carregando..."}</p>
        <span>
          {user?.publicMetadata?.role === "student"
            ? "Estudante"
            : user?.publicMetadata?.role === "teacher"
            ? "Professor"
            : "Admin"}
        </span>
      </span>
      <HiChevronDown />
    </StyledUserBox>
  );
}

export default UserBox;
