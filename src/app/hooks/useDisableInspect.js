"use client";

import { useEffect } from "react";

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

const useDisableInspect = () => {
  useEffect(() => {
    // Disable right-click
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    // Disable inspect element shortcuts
    const disableInspectShortcuts = (e) => {
      if (
        e.keyCode === 123 || // F12
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("keydown", disableInspectShortcuts);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableInspectShortcuts);
    };
  }, []);
};

export default useDisableInspect;
