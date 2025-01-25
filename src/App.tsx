import React from "react";
import Router from "./routes/router.tsx";
import { ConfigProvider } from "antd";
import { HeaderProvider } from "./context/header-provider.tsx";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemBg: "transparent",
            itemActiveBg: "#f9fafb",
            colorText: "#475467",
            colorBorder: "black",
          },
          Modal: {
            // borderRadiusLG: 15
          },
          Button: {
            colorErrorBg: "#d92d20",
          },
        },
        token: {
          // Seed Token
          colorPrimary: "#004eeb",
          colorError: "#d92d20",
          borderRadius: 5,

          // Alias Token
          // colorBgContainer: "#",
        },
      }}
    >
      <HeaderProvider>
        <Router />
      </HeaderProvider>
    </ConfigProvider>
  );
}
