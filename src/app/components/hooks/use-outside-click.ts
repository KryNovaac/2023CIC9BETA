import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    if (!ref?.current) {
      console.warn("useOutsideClick: Ref is not assigned or null.");
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      // Check if click is outside the ref's current element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event); // Trigger the callback
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
