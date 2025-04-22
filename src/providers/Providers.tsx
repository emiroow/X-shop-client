"use Client";
import TopAlert from "@/components/ui/TopAlert";
import { ThemeProvider } from "next-themes";
import { Fragment } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <ThemeProvider attribute={"class"}>
        <TopAlert />
        {children}
      </ThemeProvider>
    </Fragment>
  );
};

export default Providers;
