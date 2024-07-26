import { Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderComponent = ({ collapsed, handleToggleCollapsed }) => {

  return (
    <Header style={{ padding: 0, display: "flex", alignItems: "center", gap: "20px" }}>

      <Button
        type="text"
        onClick={handleToggleCollapsed}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        style={{ fontSize: "16px", width: 64, height: 64, color: "#fff" }}/>
    </Header>
  )
}

export default HeaderComponent