import React from "react";
import AdminSidebar from "../components/Admin/AdminSidebar";
import { Outlet } from "react-router-dom";
import HeaderLogin from "../components/Login/HeaderLogin";
import Header from "../components/Header";

function AdminLayout() {
  return (
    <div>
      <HeaderLogin />
      <div className="flex">
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
