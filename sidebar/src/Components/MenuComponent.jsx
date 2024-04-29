import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const MenuComponent = ({ darkTheme, collapsed }) => {
  return (
    <div className="container">
      <Menu
        theme={darkTheme ? "dark" : "light"}
        mode="inline"
        className="menu-bar"
        // style={{ padding: collapsed ? 0 : "0 34px" }} // Set padding to 0 to remove gap
      >
        <Menu.Item
          key="home"
          icon={<HomeOutlined />}
          onClick={() => collapsed(false)}
          style={{ marginLeft: 0 }}
        >
          Home
        </Menu.Item>
        <Menu.Item key="activity" icon={<AppstoreOutlined />}>
          Activity
        </Menu.Item>
        {/* Submenu */}
        <Menu.SubMenu
          key="tasks"
          icon={<BarsOutlined />}
          style={{ marginLeft: 0 }}
          title="Tasks"
        >
          <Menu.Item key="task-1">Task-1</Menu.Item>
          <Menu.Item key="task-2">Task-2</Menu.Item>
          <Menu.SubMenu key="subtask" icon={<BarsOutlined />} title="subtasks">
            <Menu.Item key="subtask-1" icon={<HomeOutlined />}>
              Task-1
            </Menu.Item>
            <Menu.Item key="subtask-2" icon={<HomeOutlined />}>
              Task-2
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key="progress" icon={<AreaChartOutlined />}>
          Progress
        </Menu.Item>
        <Menu.Item key="payment" icon={<PayCircleOutlined />}>
          Payment
        </Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined />}>
          Setting
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuComponent;
