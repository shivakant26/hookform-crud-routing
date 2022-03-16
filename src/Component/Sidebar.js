import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePersonAddAlt1 } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const Sidebar = () =>{

    const Logout = () =>{
        localStorage.removeItem("token")
        window.location("/login");
    }

    return(
        <div className="sidebar">
            <Link to="./myform"><MdOutlinePersonAddAlt1 className="addusericon"/>Add User</Link>
            <Link to="./table"><FaClipboardList className="adduserlisticon"/>User List</Link>
            <a href="/login" onClick={Logout}><RiLogoutBoxRLine className="adduserlogouticon"/>Logout</a>
        </div>
    )
}

export default Sidebar;