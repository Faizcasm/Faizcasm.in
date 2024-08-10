import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Faizcasm",
    default:
      "",
  },
  description:
    "Faizan Hameed Tantray is a multifaceted professional with expertise as a full-stack developer, mobile app designer, and cybersecurity expert. With a deep understanding of both front-end and back-end technologies, Faizan creates seamless digital experiences across platforms. In addition to his technical skills, he is also a content creator, sharing insights and knowledge with the tech community. His passion for innovation and design drives him to continuously explore new trends and push the boundaries of what's possible in the digital world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
