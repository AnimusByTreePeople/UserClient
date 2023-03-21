import { AccountsContext } from "../context/accountContext";
import { useContext } from "react";

export const useAccountContext = () => {
  const context = useContext(AccountsContext);

  if (!context) {
    throw Error("context is required");
  }

  return context;
};
