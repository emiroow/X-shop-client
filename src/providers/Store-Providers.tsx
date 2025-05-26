import React, { Fragment } from "react";

const StoreProviders = ({ children }: { children: React.ReactNode }) => {
  return <Fragment>{children}</Fragment>;
};

export default StoreProviders;
