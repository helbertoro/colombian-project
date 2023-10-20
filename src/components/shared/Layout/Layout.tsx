import { ReactNode } from "react";
import { Barlow_Semi_Condensed, Cardo } from "next/font/google";
import { MainMenu, AuxiliarMenu, Footer } from "./";
import { Whatsapp } from "@/components";

type LayoutProps = {
  children: ReactNode;
};

const cardo = Cardo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cardo",
});

const barlow = Barlow_Semi_Condensed({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${cardo.variable} ${barlow.variable} font-sans`}>
      <AuxiliarMenu />
      <MainMenu />
      {children}
      <Whatsapp />
      <Footer />
    </div>
  );
};
