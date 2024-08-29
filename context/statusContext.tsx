"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface StatusContextProps {
  status: boolean;
  setStatus: (value: boolean) => void;
}

const StatusContext = createContext<StatusContextProps | undefined>(undefined);

export function StatusProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState(true);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
}

export function useStatus() {
  const context = useContext(StatusContext);
  if (!context) {
    throw new Error("useStatus must be used within a StatusProvider");
  }
  return context;
}
