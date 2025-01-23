import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Breadcrumb, Divider, Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { UseHeader } from "../../context/header-provider.tsx";

const { Header, Content, Sider } = Layout;

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { header } = UseHeader();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={250}
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
        className="bg-white p-5"
      >
        <img
          src="/images/logo/logo.svg"
          alt=""
          className="demo-logo-vertical max-w-[80%]"
        />
        <Menu
          className="mt-5 !border-none"
          selectedKeys={[
            location.pathname.includes("category")
              ? "1"
              : location.pathname.includes("order")
              ? "2"
              : "3",
          ]}
          items={[
            {
              key: "1",
              icon: (
                <img
                  src={`/icons/chart${
                    location.pathname.includes("category") ? "-active" : ""
                  }.svg`}
                  alt=""
                  width={20}
                />
              ),
              label: `Category`,
              className: "px-2 !flex items-center",
              onClick: () => navigate("/dashboard/category/list"),
            },
            {
              key: "2",
              icon: (
                <img
                  src={`/icons/order${
                    location.pathname.includes("order") ? "-active" : ""
                  }.svg`}
                  alt=""
                  width={20}
                />
              ),
              label: `Orders`,
              className: "px-2 !flex items-center",
              onClick: () => navigate("/dashboard/order/list"),
            },
            {
              key: "3",
              icon: (
                <img
                  src={`/icons/product${
                    location.pathname.includes("product") ? "-active" : ""
                  }.svg`}
                  alt=""
                  width={20}
                />
              ),
              label: `Prooducts`,
              className: "px-2 !flex items-center",
              onClick: () => navigate("/dashboard/product/list"),
            },
          ]}
        />

        <div className="absolute flex flex-col bottom-4 w-full p-4 left-0 right-0">
          <div className="border-t w-full"></div>
          <div className="flex items-center mt-4">
            {/* avatar */}
            <div className="rounded-full bg-[#f2f4f7] min-w-[40px] min-h-[40px] flex items-center justify-center">
              YB
            </div>

            <div className="flex flex-col px-4">
              <span>Yasin Bagheri</span>
              <span className="text-[#475467] text-sm">admin@gmail.com</span>
            </div>

            <img
              src="/icons/logout.svg"
              className="hover:fill-primary hover:cursor-pointer"
              alt=""
              onClick={() => {
                sessionStorage.removeItem("accessToken");
                window.location.reload();
              }}
            />
          </div>
        </div>
      </Sider>
      <Layout>
        <Header className="flex flex-col h-[100px] bg-background p-5">
          {header.content}

          <Breadcrumb
            items={[
              {
                href: "/dashboard",
                title: <HomeOutlined />,
              },
              ...header.breadCrumbs,
            ]}
            className="z-10 mt-4"
          />

          <Divider className="mt-2 z-20" />
        </Header>
        <Content>
          <div
            style={{
              paddingLeft: 24,
              paddingRight: 24,
              paddingBottom: 24,
              minHeight: 360,
            }}
            className="bg-background relative w-full h-[calc(100vh-100px)] pt-[60px]"
          >
            <Outlet />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }} className="h-[100px]">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}
