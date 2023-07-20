import { TData, TTemp1, TTemp2, TTemplate } from "../types";

export const handleCheckError  = (keys  : Pick<TData,'template' | "data">) => {
    const  {template,data} = keys
    console.log(keys)
    if(!template || !data) return true
    
    if(template === 'template_1') return !(data as TTemp1).email
    return !(data as TTemp2).id ||  !(data as TTemp2).username 
}