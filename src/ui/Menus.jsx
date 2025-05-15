import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled, { css, keyframes } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const reveal = keyframes`
  
  from{
    transform: scale(70%);
    opacity: 0;
  }
  to{
    transform: scale(100%);
    opacity: 1;
  }
`;

const StyledMenu = styled.div`
  background-color: var(--color-grey-0);
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-100);
  position: fixed;
  transform: scale(100%);

  animation: ${reveal} 0.1s ease-in;
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;
const StyledToggle = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 1.5rem 1rem;
  display: flex;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: var(--color-grey-100);
  }
  & > svg {
    font-size: 3rem;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const StyledButton = styled.button`
  padding: 0.7rem 1rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  border: none;
  color: var(--color-grey-600);
  display: flex;
  align-items: center;
  width: 100%;
  &:hover {
    background-color: var(--color-grey-100);
  }
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-grey-200);
      color: var(--color-grey-700);
      &:hover {
        background-color: var(--color-grey-200);
      }
    `} ${(props) =>
    props.disabled &&
    css`
      background: none;
      color: var(--color-grey-600);

      &:hover {
        background-color: var(--color-grey-0);
        cursor: initial;
      }
    `}
  &:focus {
    outline: none;
  }
  gap: 1rem;
`;
const MenusContext = createContext();
function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const open = setOpenId;
  const close = () => setOpenId("");
  return (
    <MenusContext.Provider
      value={{ open, close, openId, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}
function Menu({ children, menuId }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);
  if (openId == menuId)
    return createPortal(
      <StyledMenu ref={ref} position={position}>
        {children}
      </StyledMenu>,
      document.body
    );
}

function Toggle({ menuId, showIcon = true, children }) {
  const ref = useRef();
  const { openId, close, open, setPosition } = useContext(MenusContext);

  useEffect(() => {
    if (openId === menuId)
      document.querySelector("main").style.overflowY = "hidden";
    else document.querySelector("main").style.overflowY = "scroll";
  }, [openId, menuId]);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    ref.current = e.target.closest("button");
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 6,
    });
    openId === "" || openId !== menuId ? open(menuId) : close();
  }
  return (
    <>
      {showIcon ? (
        <StyledToggle onClick={handleClick}>
          <HiEllipsisVertical />
        </StyledToggle>
      ) : (
        cloneElement(children, {
          onClick: handleClick,
          isOpen: Boolean(openId),
        })
      )}
    </>
  );
}
function List({ children }) {
  return <StyledList>{children}</StyledList>;
}
function Button({ children, icon, onClick, active, disabled = false }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    if (disabled) return;
    onClick?.();
    close();
    document.querySelector("main").style.overflowY = "scroll";
  }
  return (
    <li>
      {disabled ? (
        children
      ) : (
        <StyledButton disabled={disabled} onClick={handleClick} active={active}>
          {icon} <span>{children}</span>
        </StyledButton>
      )}
    </li>
  );
}
Menus.Toggle = Toggle;
Menus.Menu = Menu;
Menus.List = List;
Menus.Button = Button;

export default Menus;
