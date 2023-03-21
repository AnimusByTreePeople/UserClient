import { createContext, useReducer } from "react";

export const AccountsContext = createContext();
export const accountReducer = (state, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case "LOGIN_ACC":
      return {
        account: action.payload,
      };
    case "CREATE_ACC":
      return { account: action.payload };
    case "LOGOUT_ACC":
      return { account: null };
    default:
      return state;
  }
};
export const AccountsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, {
    account: null,
  });

  return (
    <AccountsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AccountsContext.Provider>
  );
};
