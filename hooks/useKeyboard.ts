import { useEffect } from "react";

export function useKeyboard(
  handlers: { key: string; handler: () => void }[],
  active = true
) {
  useEffect(() => {
    if (!active) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      for (const { key, handler } of handlers) {
        if (e.key === key) {
          e.preventDefault();
          handler();
          return;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlers, active]);
}
