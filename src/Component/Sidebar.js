import React from "react";
import { Link } from "react-router-dom";
// import { MdOutlinePersonAddAlt1 } from 'react-icons/md';
// import { FaClipboardList } from 'react-icons/fa';
// import { RiLogoutBoxRLine } from 'react-icons/ri';

const Sidebar = () =>{

    const Logout = () =>{
        localStorage.removeItem("token")
        window.location("/login");
    }

    return(
        <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item pt-2">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="#"
                                aria-expanded="false">
                                <i className="far fa-clock" aria-hidden="true"></i>
                                <span className="hide-menu">Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="#"
                                aria-expanded="false">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span className="hide-menu">Profile</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <Link to="./myform" className="sidebar-link waves-effect waves-dark sidebar-link"
                                aria-expanded="false">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <span className="hide-menu">Add User</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="./table" className="sidebar-link waves-effect waves-dark sidebar-link"
                                aria-expanded="false">
                                <i class="fa fa-list" aria-hidden="true"></i>
                                <span className="hide-menu">User List</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="#"
                                aria-expanded="false">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                                <span className="hide-menu">Google Map</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="#"
                                aria-expanded="false">
                                <i className="fa fa-columns" aria-hidden="true"></i>
                                <span className="hide-menu">Blank Page</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/login"
                                aria-expanded="false" onClick={Logout}>
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                <span className="hide-menu">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
        // <div className="sidebar">   
        //     <Link to="./myform"><MdOutlinePersonAddAlt1 className="addusericon"/>Add User</Link>
        //     <Link to="./table"><FaClipboardList className="adduserlisticon"/>User List</Link>
        //     <a href="/login" onClick={Logout}><RiLogoutBoxRLine className="adduserlogouticon"/>Logout</a>
        // </div>
    )
}

export default Sidebar;