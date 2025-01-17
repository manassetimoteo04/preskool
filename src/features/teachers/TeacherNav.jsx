import {
  HiOutlineArchiveBoxArrowDown,
  HiOutlineCurrencyDollar,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import styled, { css } from "styled-components";

const StyledTeacherNav = styled.nav`
  & > ul {
    display: flex;
    gap: 1rem;
    list-style: none;
  }
`;
const StyledNavButton = styled.button`
  background: none;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  &:focus {
    outline: none;
  }
  & > svg {
    font-size: 2.2rem;
  }
  &:hover {
    background-color: var(--color-grey-100);
  }
  ${(props) =>
    props.activetab === "true" &&
    css`
      border-bottom-color: var(--color-brand-700);
      background-color: var(--color-grey-100);
    `}
`;
function TeacherNav({ active, setActive }) {
  return (
    <StyledTeacherNav>
      <ul>
        <li>
          <StyledNavButton
            activetab={(active === "basic-details").toString()}
            onClick={() => setActive("basic-details")}
          >
            <HiOutlineExclamationCircle />
            Detalhes
          </StyledNavButton>
        </li>{" "}
        <li>
          <StyledNavButton
            activetab={(active === "payments").toString()}
            onClick={() => setActive("payments")}
          >
            <HiOutlineCurrencyDollar />
            Pagamentos
          </StyledNavButton>
        </li>{" "}
        <li>
          <StyledNavButton
            activetab={(active === "missings").toString()}
            onClick={() => setActive("missings")}
          >
            <HiOutlineArchiveBoxArrowDown />
            Faltas
          </StyledNavButton>
        </li>
      </ul>
    </StyledTeacherNav>
  );
}

export default TeacherNav;
