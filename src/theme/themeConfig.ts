import type { ThemeConfig } from "antd";

const AntdCustomTheme: ThemeConfig = {
  token: {
    fontFamily: "'Public Sans', sans-serif",
    colorPrimaryHover: "#212b36",
  },
  components: {
    Button: {
      colorPrimary: "#212b36",
      colorPrimaryActive: "#212b36",
      colorPrimaryHover: "#454f5b",
      colorPrimaryText: "white",
    },
  },
};

export default AntdCustomTheme;
