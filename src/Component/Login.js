import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../Redux/Action/AdminAction";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
toast.configure();


const Login = () =>{
    const navigate = useNavigate();
    const { register,handleSubmit,formState: { errors }} = useForm();
    const dispatch = useDispatch();
    // const getToken = useSelector((state)=>state.AdminReducer.isLogin)
    // console.log("Token is",getToken)

    const Login = (logindata) =>{
        dispatch(LoginUser(logindata))

        if(localStorage.getItem("test") === ""){
            toast('Please Register',
            {position: toast.POSITION.TOP_CENTER
        })
        }
        if(localStorage.getItem("token")){
            navigate("/dashboard")
            toast('Seccussfully Login',
            {   
                className:'success',
                position: toast.POSITION.TOP_CENTER
        })
            
        }else{
            navigate("/login");
            toast('UserId Or PassWord Incorrect',
            {position: toast.POSITION.TOP_CENTER
        })
        }
        
        
    }
    return(
        <div className="login">
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                    <div className="Login-form">
                        <div className="form-heading">
                            <h1>Login Here</h1>
                        </div>
                        <form>
                            <div className="form-field">
                            <input {...register("Email",{
                                            required: true,
                                            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        })
                                        }
                                            placeholder="Email"/>
                                {errors?.Email?.type === "required" && <p className="err">Email is required</p>}
                                {errors?.Email?.type === "pattern" && (<p className="err">Enter Valid Email</p>)}
                            </div>
                            <div className="form-field">
                            <input {...register("Password",{
                                            required: true})
                                            }
                                             placeholder="Password"/>
                                {errors?.Password?.type === "required" && <p className="err">Password is required</p>}
                            </div>
                            
                            <div className="form-field">
                            <div className="clearfix">
                                <div className="reg_button">
                                    <button onClick={handleSubmit(Login)}>Login</button>
                                </div>
                                <div className="login_link">
                                    <p>If You Have No Account Please <Link to="/registration">Register Here...</Link></p>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;