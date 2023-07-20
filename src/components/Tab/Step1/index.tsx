import React, { useState, useEffect } from "react";
import FormInput from "../../FormInput";
import { AppContext } from "../../../contexts";
import { TStep0, TTab } from "../../../types";

const Step1 = () => {
  const value = React.useContext(AppContext);
  const [info, setInfo] = useState<TStep0>({
    name: "",
    title: "",
  });

  useEffect(() => {
    const err = !Object.values(info).every((item) => !!item);

    value?.handleError("step1")(err);
  }, [info, value?.handleError]);

  if (!value) return <></>;
  return (
    <>
      <FormInput
        label="Name"
        name_key="name"
        error={value.submitted && !info.name}
      >
        <input
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
      </FormInput>
      <FormInput
        label="Title"
        name_key="title"
        error={value.submitted && !info.title}
      >
        <input
          value={info.title}
          onChange={(e) => setInfo({ ...info, title: e.target.value })}
        />
      </FormInput>
    </>
  );
};

export default Step1;
