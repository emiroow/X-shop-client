"use Client";
import { ThemeProvider } from "next-themes";
import { Fragment } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <ThemeProvider>{children}</ThemeProvider>
    </Fragment>
  );
};

export default Providers;
