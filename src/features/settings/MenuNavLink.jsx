import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const StyledNavLink = styled.a`
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  border-radius: var(--border-radius-sm);
  align-items: center;
  &:hover {
    background-color: var(--color-grey-200);
  }
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-700);
      &:hover {
        background-color: var(--color-brand-800);
      }
    `}
  & > svg {
    font-size: 2rem;
  }
`;
function MenuNavLink({ children, href }) {
  const [hash, setHash] = useState("#general");
  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash);
    });
  }, [hash, setHash]);
  return (
    <StyledNavLink active={hash === href} href={href}>
      {children}
    </StyledNavLink>
  );
}

export default MenuNavLink;
