import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{
 return(
     <div className="menu">
         <Link to="/">Home</Link>
         <Link to="/myform">MyForm</Link>
         <Link to="/table">TableList</Link>
     </div>
 )
}

export default Menu;