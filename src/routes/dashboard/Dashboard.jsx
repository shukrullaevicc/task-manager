import { Layout } from "antd";

import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";

import SiderComponent from "../../components/sider/Sider";
import HeaderComponent from "../../components/header/Header";
import TodoList from "../../components/todoList/TodoList";
import TaskForm from "../../components/taskForm/TaskForm";
import SortFilter from "../../components/sortFilter/SortFilter";

const { Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapsed = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <Layout style={{ minHeight: "100vh" }}>

      <SiderComponent collapsed={collapsed} />

      <Layout>
        <HeaderComponent collapsed={collapsed} handleToggleCollapsed={handleToggleCollapsed} />

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <TaskForm />
          <SortFilter />
          <TodoList />

          <Outlet />
        </Content>

      </Layout>
    </Layout>
  );
};

export default Dashboard;
