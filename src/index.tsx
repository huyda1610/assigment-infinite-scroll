import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import viVN from "antd/locale/vi_VN";
import AntdCustomTheme from "./theme/themeConfig";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

dayjs.locale("vi");

root.render(
  <React.StrictMode>
    <ConfigProvider locale={viVN} theme={{ ...AntdCustomTheme }}>
      <App />
    </ConfigProvider>{" "}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
