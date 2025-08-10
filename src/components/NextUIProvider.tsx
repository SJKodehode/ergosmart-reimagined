import type { ReactNode } from "react";
import { NextUIProvider as Provider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export function NextUIProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <Provider navigate={navigate}>
      {children}
    </Provider>
  );
}