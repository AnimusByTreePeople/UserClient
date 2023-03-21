import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AccountsContextProvider } from "./context/accountContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AccountsContextProvider>
        <App />
      </AccountsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
