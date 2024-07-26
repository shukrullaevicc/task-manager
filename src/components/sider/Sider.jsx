import "./Sider.css";

import { Layout, Menu, Typography } from "antd";
import { UserOutlined, EditOutlined  } from "@ant-design/icons";

import { NavLink } from "react-router-dom";

const { Sider } = Layout;
const { Title } = Typography;

const SiderComponent = ({ collapsed }) => {
   return (
      <Sider trigger={null} collapsed={collapsed}>
         
         <div className="logo__sider">
            <EditOutlined />
            <Title 
            type="secondary"
            style={{ marginLeft: "10px", color: "#fff", fontSize: "20px", marginTop: "8px" }} level={3}>
               {collapsed ? <></> : "Task Manager"}
            </Title>
         </div>

         <Menu
         theme="dark"
         mode="inline"
         defaultSelectedKeys={["1"]}
         items={[
            {
               key: "1",
               icon: <UserOutlined />,
               label: <NavLink to="/">Users</NavLink>,
            }
         ]}
         />
      </Sider>
   );
};

export default SiderComponent;