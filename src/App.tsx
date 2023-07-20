import React, { useState, useCallback, useEffect } from "react";
import { styled } from "styled-components";
import Tab from "./components/Tab";
import { AppContext } from "./contexts";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({
    step1: false,
    step2: false,
  });

  const handleError = useCallback(
    (key: keyof typeof error) => (err: boolean) => {
      setError((prev) => ({ ...prev, [key]: err }));
    },
    []
  );

  const handleClick = useCallback(() => {
    setSubmitted(true);
    const err = Object.values(error).some((item) => item);
    if (err) {
      alert("Vui lòng điền đủ thông tin");
    } else {
      alert("Thành công");
    }
  }, [error]);

  return (
    <AppContext.Provider
      value={{
        submitted,
        handleError,
      }}
    >
      {" "}
      <S>
        <div className="app-top">
          <button onClick={handleClick}>submit</button>
        </div>

        <Tab />
      </S>
    </AppContext.Provider>
  );
};

export default App;

const S = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding-top: 100px;
  .app-top {
    padding-bottom: 5px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
`;
