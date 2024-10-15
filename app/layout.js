import "./globals.css";
import { ClientRootLayout } from "./client-layout";

export const metadata = {
  title: "Kenneth Docot | Portfolio",
  description:
    "My name is Kenneth Docot and this is my portfolio! I'm a dedicated and quick-learning BSIT graduate with a strong foundation in Fullstack Development. Known for my ability to deliver high-quality code across multiple languages and frameworks, I bring a strong work ethic, attention to detail, and a passion for programming to every project. Recognized as a Batch Valedictorian and Cum Laude, I am eager to apply my technical skills to challenging and innovative projects.",
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
