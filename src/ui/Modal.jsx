import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";
import styled, { keyframes } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
// eslint-disable-next-line no-unused-vars
const ScaleAnimation = keyframes`
    from{
        transform: scale(50%);
    }

    to{
        transform: scale(100%);
    }
`;

const OpacityAnimation = keyframes`
    from{
      background-color: transparent;

    }

    to{
      background-color: var(--backdrop-color);
    }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--backdrop-color);

  animation: ${OpacityAnimation} 0.5s ease;
`;
const StyledWindow = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  animation: ${ScaleAnimation} 0.15s ease-in-out;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-sm);
  position: relative;
`;
const StyledButtonClose = styled.button`
  background: none;
  border: none;
  align-self: self-end;
  position: absolute;
  right: 2rem;
  top: 2rem;
`;
const ModalContext = createContext();
function Modal({ children }) {
  const [name, setName] = useState("");
  const open = setName;
  const close = () => setName("");
  return (
    <ModalContext.Provider value={{ name, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}
function Window({ name: windowName, children, buttonClose }) {
  const { name, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  if (windowName === name)
    return createPortal(
      <Overlay>
        <StyledWindow ref={ref}>
          {buttonClose && (
            <StyledButtonClose onClick={close}>
              <HiX />
            </StyledButtonClose>
          )}
          {cloneElement(children, { onCloseModal: close })}
        </StyledWindow>
      </Overlay>,
      document.body
    );
}
function Open({ opens, children }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      open(opens);
    },
    onClose: open,
  });
}

function Close({ children }) {
  const { close } = useContext(ModalContext);

  return cloneElement(children, { onClose: () => close() });
}
Modal.Window = Window;
Modal.Open = Open;
Modal.Close = Close;

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);
export default Modal;
