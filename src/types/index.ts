export type TTab = 0 | 1;
export type TTemplate = "template_1" | "template_2";
export type TStep0 = {
  name: string;
  title: string;
};
export type TTemp1 = {
  email: string;
  age?: string;
  gender?: string;
};
export type TTemp2 = {
  id: string;
  username: string;
  password?: string;
};


export type TData = {
    template? : TTemplate,
    data? : TTemp1 |  TTemp2,
    id? : number,
    error?:boolean
}