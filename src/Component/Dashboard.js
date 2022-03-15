import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import MyForm from "./MyForm";
import UserTable from "./UserTabel";
import Logout from "./Logout";
const Dashboard = () =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 side_bar">
                    <div className="sidebar_inner">
                        <h2>Dashboard</h2>
                        <Sidebar />
                    </div>
                </div>
                <div className="col-md-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;