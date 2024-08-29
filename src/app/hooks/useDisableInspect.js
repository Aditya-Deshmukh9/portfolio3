"use client";

import { useEffect } from "react";

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.key === keyCode;
}

export const useDisableInspect = () => {
  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    const disableInspectShortcuts = (e) => {
      if (
        e.key === "F12" ||
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        (e.ctrlKey && e.key === "U")
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
