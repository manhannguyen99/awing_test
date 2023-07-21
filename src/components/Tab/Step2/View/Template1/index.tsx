import FormInput from "@/components/FormInput";
import { TData, TTemp1, TTemp2 } from "@/types";

export type TProps = {
  item: TData;
  handleChangeInput: (key: keyof (TTemp1 & TTemp2)) => (value: string) => void;
};

const Template1 = ({ handleChangeInput, item }: TProps) => {
  const data = item?.data as TTemp1;
  return (
    <>
      <FormInput
        label="Email"
        value_input={data?.email}
        error={item.error}
        required
      >
        <input
          onChange={(e) => handleChangeInput("email")(e.target.value)}
          value={data?.email}
        />
      </FormInput>
      <FormInput label="Age">
        <input
          onChange={(e) => handleChangeInput("age")(e.target.value)}
          value={data?.age}
        />
      </FormInput>
      <FormInput label="Gender">
        <input
          onChange={(e) => handleChangeInput("gender")(e.target.value)}
          value={data?.gender}
        />
      </FormInput>
    </>
  );
};

export default Template1;
