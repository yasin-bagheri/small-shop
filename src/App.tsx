import React from "react";
import Router from "./routes/router.tsx";
import { ConfigProvider } from "antd";
import { HeaderProvider } from "./context/header-provider.tsx";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#004eeb",
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
