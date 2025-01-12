import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapuring = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, listenCapuring);
    return () =>
      document.removeEventListener("click", handleClick, listenCapuring);
  }, [ref, listenCapuring, handler]);
  return ref;
}
