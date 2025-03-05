"use Client";
import { ThemeProvider } from "next-themes";
import { Fragment } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <ThemeProvider attribute={"class"}>{children}</ThemeProvider>
    </Fragment>
  );
};

export default Providers;
