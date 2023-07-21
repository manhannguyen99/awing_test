import React, { useState, useEffect } from "react";

import FormInput from "@/components/FormInput";
import { AppContext } from "@/contexts";
import { TStep0 } from "@/types";

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
      <FormInput label="Name" value_input={info.name} required>
        <input
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
      </FormInput>
      <FormInput label="Title" value_input={info.title} required>
        <input
          value={info.title}
          onChange={(e) => setInfo({ ...info, title: e.target.value })}
        />
      </FormInput>
    </>
  );
};

export default Step1;
