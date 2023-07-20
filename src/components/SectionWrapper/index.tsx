import React from "react";
import { TTab } from "../../types";

type TProps = {
  children: React.ReactElement;
  is_tab: boolean;
};

const SectionWrapper = ({ children, is_tab }: TProps) => {
  return (
    <div
      style={{
        display: is_tab ? "block" : "none",
        marginTop: "15px",
      }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
