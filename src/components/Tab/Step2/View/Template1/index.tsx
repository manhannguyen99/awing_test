import React, { useContext } from "react";
import FormInput from "../../../../FormInput";
import { TData, TTemp1, TTemp2 } from "../../../../../types";
import { AppContext } from "../../../../../contexts";

export type TProps = {
  item: TData;
  handleChangeInput: (key: keyof (TTemp1 & TTemp2)) => (value: string) => void;
};

const Template1 = ({ handleChangeInput, item }: TProps) => {
  const data = item?.data as TTemp1;
  const value = useContext(AppContext);
  return (
    <>
      <FormInput
        label="Email"
        name_key="email"
        error={(item.error || value?.submitted) && !data?.email}
      >
        <input
          onChange={(e) => handleChangeInput("email")(e.target.value)}
          value={data?.email}
        />
      </FormInput>
      <FormInput label="Age" name_key="age">
        <input
          onChange={(e) => handleChangeInput("age")(e.target.value)}
          value={data?.age}
        />
      </FormInput>
      <FormInput label="Gender " name_key="gender">
        <input
          onChange={(e) => handleChangeInput("gender")(e.target.value)}
          value={data?.gender}
        />
      </FormInput>
    </>
  );
};

export default Template1;
