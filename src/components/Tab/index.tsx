import React, { useState } from "react";
import { TTab } from "../../types";
import { styled } from "styled-components";
import Navtab from "../Navtab";
import SectionWrapper from "../SectionWrapper";
import Step1 from "./Step1";
import Step2 from "./Step2";

const Tab = () => {
  const [tab, setTab] = useState<TTab>(0);
  return (
    <S>
      <div className="nav-tabs">
        <Navtab text="0" is_checked={tab === 0} onClick={() => setTab(0)} />
        <Navtab text="1" is_checked={tab === 1} onClick={() => setTab(1)} />
      </div>
      <div className="tab-content">
        <SectionWrapper is_tab={tab === 0}>
          <Step1 />
        </SectionWrapper>
        <SectionWrapper is_tab={tab === 1}>
          <Step2 />
        </SectionWrapper>
      </div>
    </S>
  );
};

export default Tab;

const S = styled.div``;
