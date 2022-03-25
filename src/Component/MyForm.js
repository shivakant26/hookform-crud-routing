import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Add, UpdateData } from "../Redux/Action/Action";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { Button } from "react-bootstrap";


const MyForm = () => {

    const navigate = useNavigate();
    const { register,setValue,handleSubmit,formState: { errors }} = useForm();
    const dispatch = useDispatch();
    const test = useSelector((state)=> state.reducer.isEdit);
    const id = useSelector((state)=> state.reducer.id);
    
    let result = test;
    
    const onSubmit = (data) => {
        if(result){
            dispatch(UpdateData(data,id))
        }else{
            dispatch(Add(data))
        }
        navigate("/dashboard/table");
    }
    useEffect(()=>{
        console.log(13213213,test);
        if(result){
            setValue('firstName',result.firstName)
            setValue('lastName',result.lastName)
        }
    },[test])
    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <div className="form-heading">
                            <h2>Add User</h2>
                        </div>
                        <div className="form-section">
                            <form>
                                <div className="form-field">
                                    <input
                                        {...register("firstName",{
                                            required: true,pattern: /^[A-Za-z]+$/i})}
                                        placeholder="firstName"
                                     
                                        
                                    />
                                    {errors?.firstName?.type === "required" && <p className="err">FirstName is required</p>}
                                    {errors?.firstName?.type === "pattern" && (<p className="err">Alphabetical characters only</p>)}
                                </div>

                                <div className="form-field">
                                    <input 
                                        {...register("lastName",{
                                            required: true,pattern: /^[A-Za-z]+$/i})}
                                        placeholder="lastName"
                                    
                                    />
                                    {errors?.lastName?.type === "required" && <p className="err">LastName is required</p>}
                                    {errors?.lastName?.type === "pattern" && (<p className="err">Alphabetical characters only</p>)}
                                </div>

                                <div className="form-field">
                                    
                                        <Button className="submit"
                                        onClick={handleSubmit(onSubmit)}>
                                            {
                                                result ? "Update" : "Submit"
                                            }
                                        </Button>
                                    
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

export default MyForm;

// onSubmit={handleSubmit(onSubmit)}