import { useContext } from "react";
import FormInput from "../../../../FormInput";
import { TProps } from "../Template1";
import { TTemp2 } from "../../../../../types";
import { AppContext } from "../../../../../contexts";

const Template2 = ({ item, handleChangeInput }: TProps) => {
  const data = item?.data as TTemp2;

  return (
    <>
      <FormInput label="Id" value_input={data?.id} error={item.error} required>
        <input
          onChange={(e) => handleChangeInput("id")(e.target.value)}
          value={data?.id}
        />
      </FormInput>
      <FormInput
        label="Username"
        value_input={data?.username}
        error={item.error}
        required
      >
        <input
          onChange={(e) => handleChangeInput("username")(e.target.value)}
          value={data?.username}
        />
      </FormInput>
      <FormInput label="Password">
        <input
          onChange={(e) => handleChangeInput("password")(e.target.value)}
          value={data?.password}
        />
      </FormInput>
    </>
  );
};

export default Template2;
