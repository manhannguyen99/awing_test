import { useContext } from "react";
import FormInput from "../../../../FormInput";
import { TProps } from "../Template1";
import { TTemp2 } from "../../../../../types";
import { AppContext } from "../../../../../contexts";

const Template2 = ({ item, handleChangeInput }: TProps) => {
  const data = item?.data as TTemp2;
  const value = useContext(AppContext);

  return (
    <>
      <FormInput
        label="Id"
        name_key="id"
        error={(item.error || value?.submitted) && !data?.id}
      >
        <input
          onChange={(e) => handleChangeInput("id")(e.target.value)}
          value={data?.id}
        />
      </FormInput>
      <FormInput
        label="Username"
        name_key="username"
        error={(item.error || value?.submitted) && !data?.username}
      >
        <input
          onChange={(e) => handleChangeInput("username")(e.target.value)}
          value={data?.username}
        />
      </FormInput>
      <FormInput label="Password " name_key="Password">
        <input
          onChange={(e) => handleChangeInput("password")(e.target.value)}
          value={data?.password}
        />
      </FormInput>
    </>
  );
};

export default Template2;
