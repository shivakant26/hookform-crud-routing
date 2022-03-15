import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RegisterUser } from "../Redux/Action/AdminAction";

const Registration = () =>{
    const { register,handleSubmit,formState: { errors }} = useForm();
    const dispatch = useDispatch();

    const Register = (formdata) =>{
        dispatch(RegisterUser(formdata));
    }

    return(
        <div className="registration">
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                    <div className="registration-form">
                        <div className="form-heading">
                            <h2>Register here...</h2>
                        </div>
                        <form>
                            <div className="form-field">
                                <input {...register("firstName",{
                                            required: true,
                                            pattern: /^[A-Za-z]+$/i})
                                        }
                                             placeholder="firstname"/>
                                {errors?.firstName?.type === "required" && <p className="err">FirstName is required</p>}
                                {errors?.firstName?.type === "pattern" && (<p className="err">Alphabetical characters only</p>)}             
                            </div>
                            <div className="form-field">
                            <input {...register("lastName",{
                                            required: true,
                                            pattern: /^[A-Za-z]+$/i})
                                        }
                                         placeholder="lastName"/>
                                    {errors?.lastName?.type === "required" && <p className="err">LastName is required</p>}
                                {errors?.lastName?.type === "pattern" && (<p className="err">Alphabetical characters only</p>)}
                            </div>
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
                            <input {...register("City",{
                                            required: true,
                                            pattern: /^[A-Za-z]+$/i})
                                            }
                                             placeholder="city"/>
                                {errors?.City?.type === "required" && <p className="err">City is required</p>}
                                {errors?.City?.type === "pattern" && (<p className="err">Alphabetical characters only</p>)}
                            </div>
                            <div className="form-field">
                            <div className="clearfix">
                                <div className="reg_button">
                                    <button onClick={handleSubmit(Register)}>Registration</button>
                                </div>
                                <div className="login_link">
                                    <p>If You Have Already Account Please <Link to="/login">Login Here...</Link> </p>
                                    
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


export default Registration;