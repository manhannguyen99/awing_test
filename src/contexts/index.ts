import { createContext } from "react";

export const AppContext = createContext<null | {
    submitted : boolean,
    handleError : (key: "step1" | "step2") => (err: boolean) => void
}>(null)