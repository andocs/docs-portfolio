import "./globals.css";
import { ClientRootLayout } from "./client-layout";

export const metadata = {
  title: "Kenneth Docot | Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
