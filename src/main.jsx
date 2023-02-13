import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./context";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* wrap */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
