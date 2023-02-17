import React from "react";
import ReactDOM from "react-dom/client";
import "typeface-roboto";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux/es/exports";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { store } from "./features/store";
import { reduxApi } from "./features/apiSlice";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ApiProvider api={reduxApi}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApiProvider>
  </Provider>
);
