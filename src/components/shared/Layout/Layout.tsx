import { ReactNode } from "react";
import { MainMenu, AuxiliarMenu, Footer } from "./";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <AuxiliarMenu />
      <MainMenu />
      {children}
      <Footer />
    </div>
  );
};
