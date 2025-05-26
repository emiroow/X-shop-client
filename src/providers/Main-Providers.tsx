import { ThemeProvider } from "next-themes";
import { Fragment } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const MainProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </Fragment>
  );
};

export default MainProviders;
