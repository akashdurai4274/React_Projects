import "./App.css";
import { Button, Layout, theme } from "antd";
import Logo from "./Components/Logo";
import MenuComponent from "./Components/MenuComponent";
import { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import TogglethemeButton from "./Components/TogglethemeButton";
import Footer from "./Components/Footer";
const { Header, Sider } = Layout;
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger:null
        className="sidebar"
        theme={darkTheme ? "dark" : "light"}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
      >
        <Logo collapsed={collapsed} />
        <MenuComponent darkTheme={darkTheme} collapsed={collapsed} />
        <TogglethemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          ></Button>
        </Header>
        <Footer darkTheme={darkTheme} />
      </Layout>
    </Layout>
  );
}
export default App;
