import { TData, TTemplate } from "../types";

export const DEFAULT_VIEW: TData = {
  template: undefined,
  data: undefined,
  
};

export const optionsSelect: { text: string; value?: TTemplate | "" }[] = [
  {
    text: "None",
    value :''
  },
  {
    text: "Template1",
    value: "template_1",
  },
  {
    text: "Template2",
    value: "template_2",
  },
];
