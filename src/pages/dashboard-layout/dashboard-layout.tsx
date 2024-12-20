import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { USERS_PATHS } from "./users/users-routes";
import { ARTICLES_PATHS } from "./articles/article-routes";

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));



const DashboardLayout: React.FC = () => {
  const {t} = useTranslation()
  const items2: MenuProps["items"] = [
    {
      key: "users",
      label: <Link to={`${USERS_PATHS.USERS}/${USERS_PATHS.USERS_LIST}`}>{t("dashboard.users.title")}</Link>,
    },
    {
      key: "articles",
      label: <Link to={`${ARTICLES_PATHS.ARTICLES}/${ARTICLES_PATHS.ARTICLES_LIST}`}>{t("dashboard.articles.title")}</Link>,
    },
  ];
 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content className="m-10">
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default DashboardLayout;
