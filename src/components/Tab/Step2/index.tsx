import React, { useState, useCallback } from "react";
import { Styles } from "./styles";
import { TData, TTab, TTemplate } from "../../../types";
import Navtab from "../../Navtab";
import { DEFAULT_VIEW } from "../../../constants";
import View from "./View";
import SectionWrapper from "../../SectionWrapper";
import { handleCheckError } from "../../../utils/helpers";
import { AppContext } from "../../../contexts";

const Step2 = () => {
  const [store, setStore] = useState<TData[]>([]);
  const [tab, setTab] = useState<number>(0);
  const value = React.useContext(AppContext);

  const handleAddView = useCallback(
    (init?: boolean) => {
      if (init) {
        setStore((prev) => {
          return [
            ...prev,
            { ...DEFAULT_VIEW, id: prev.length, error: value?.submitted },
          ];
        });

        setTab(store.length);
      } else {
        const errorStore = store.map((item) => ({
          ...item,
          error: handleCheckError({
            template: item.template,
            data: item.data,
          }),
        }));

        if (errorStore.filter((item) => item.error).length > 0) {
          setStore(errorStore);
          return errorStore.filter((item) => item.error).length > 0;
        } else {
          handleAddView(true);
        }
      }
    },
    [store, value?.submitted]
  );

  const handleChangeValue = useCallback(
    (key: keyof TData, id: Pick<TData, "id">) =>
      (value: (typeof store)[number][keyof TData]) => {
        setStore((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, [key]: value } : item
          )
        );
      },
    []
  );

  React.useEffect(() => {
    if (store.length === 0) {
      handleAddView(true);
    }
  }, [store, handleAddView]);

  React.useEffect(() => {
    const errorStore = store.map((item) => ({
      ...item,
      error: handleCheckError({
        template: item.template,
        data: item.data,
      }),
    }));

    value?.handleError("step2")(
      Object.values(errorStore).some((item) => item.error)
    );
  }, [store, value?.handleError]);

  return (
    <Styles>
      <div className="tab-view">
        {store.map((item, index) => (
          <Navtab
            key={`nav-${index}`}
            text={`View${index}`}
            is_checked={tab === item.id}
            onClick={() => setTab(item.id ?? 0)}
          />
        ))}
        <Navtab text={"+"} onClick={() => handleAddView()} />
      </div>
      <div className="tab-content">
        {store.map((el) => (
          <SectionWrapper is_tab={el.id === tab} key={el.id}>
            <View item={el} handleChangeValue={handleChangeValue} />
          </SectionWrapper>
        ))}
      </div>
    </Styles>
  );
};

export default Step2;
