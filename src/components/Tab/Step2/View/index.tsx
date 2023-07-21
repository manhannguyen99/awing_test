import React, { useContext } from "react";
import { Styles } from "./styles";
import FormInput from "../../../FormInput";
import { optionsSelect } from "../../../../constants";
import Template1 from "./Template1";
import { TData, TTemp1, TTemp2, TTemplate } from "../../../../types";
import Template2 from "./Template2";
import { AppContext } from "../../../../contexts";

type TProps = {
  item: TData;
  handleChangeValue: (
    key: keyof TData,
    id: Pick<TData, "id">
  ) => (value: number | TTemplate | TTemp1 | TTemp2 | undefined) => void;
};

const View = ({ item, handleChangeValue }: TProps) => {
  const value = useContext(AppContext);
  const handleChangeInput = React.useCallback(
    (key: keyof (TTemp1 & TTemp2)) => (value: string) => {
      handleChangeValue(
        "data",
        item.id as any
      )({ ...(item.data ?? {}), [key]: value } as any);
    },
    [handleChangeValue, item]
  );

  return (
    <Styles>
      <div className="select-temp">
        {" "}
        <FormInput
          label="Template"
          value_input={item?.template ?? ""}
          error={item.error}
          required
        >
          <select
            value={item?.template}
            onChange={(e) => {
              handleChangeValue(
                "template",
                item.id as any
              )(e.target.value as any);
            }}
          >
            {optionsSelect.map((el, index) => (
              <option value={el.value} key={index}>
                {el.text}
              </option>
            ))}
          </select>
        </FormInput>
      </div>
      <div className="view-content">
        {item.template === "template_1" ? (
          <Template1 handleChangeInput={handleChangeInput} item={item} />
        ) : item.template === "template_2" ? (
          <Template2 handleChangeInput={handleChangeInput} item={item} />
        ) : (
          <></>
        )}
      </div>
    </Styles>
  );
};

export default View;
