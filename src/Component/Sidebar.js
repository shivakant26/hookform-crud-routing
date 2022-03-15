import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <Link to="/myform">MyForm</Link>
            <Link to="/table">TableList</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Sidebar;