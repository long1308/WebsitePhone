import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../partials/Admin/Header";
import Sideber from "../../../partials/Admin/Sideber";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div>
      <header className="bg-[#00B0D7]">
        <Header />
      </header>
      <Sideber />
    </div>
  );
};

export default AdminLayout;
