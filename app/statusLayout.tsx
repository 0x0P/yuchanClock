"use client";

import { ReactNode } from "react";
import { useStatus, StatusProvider } from "../context/statusContext";

export default function StatusLayout({ children }: { children: ReactNode }) {
  const { status } = useStatus();

  return <body data-status={status}>{children}</body>;
}
