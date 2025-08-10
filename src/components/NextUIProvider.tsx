import { NextUIProvider as Provider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export function NextUIProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <Provider navigate={navigate}>
      {children}
    </Provider>
  );
}