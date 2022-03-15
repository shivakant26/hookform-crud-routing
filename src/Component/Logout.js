import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Logout = () =>{
    const navigate = useNavigate();
    const Logout = ()=>{
       localStorage.removeItem("token")
        navigate("/login");
        // navigate("/dashboard");
        
    }
    useEffect(()=>{
        Logout();
    })
    return(
        <div className="logout">
            {/* <h1>Logout</h1> */}
       </div>
    )
}

export default Logout;