import type { Metadata } from "next";
import "./globals.css";
import { StatusProvider } from "@/context/statusContext";
import StatusLayout from "./statusLayout";

export const metadata: Metadata = {
  title: "유찬시계",
  description: "유찬이의 상쾌한 아침을 만들어주세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <StatusProvider>
        <StatusLayout>{children}</StatusLayout>
      </StatusProvider>
    </html>
  );
}
