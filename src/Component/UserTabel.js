import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";

import { useEffect } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from 'react-icons/fi';  
import { FaTrash } from 'react-icons/fa';
import { DeleteData, EditData } from "../Redux/Action/Action";
import { useNavigate } from 'react-router-dom';

const UserTable = () => {
    const navigate = useNavigate();
    const data = useSelector((state) => state.reducer.data);
    const [ list , setList ] = useState(data); 
    const dispatch = useDispatch();
    console.log("data",data)

    useEffect(()=>{
        setList(data)
    },[data])

    const Delete = (id) =>{
        dispatch(DeleteData(id))
    }

    const Edit = (id) =>{
        dispatch(EditData(id));
        navigate(`/myform/${id}`);
    }

    return (
        <div className="Table">
            <h2>User Table</h2>
            <Container>
                <Row>
                    {
                        data ? 
                    
                    <Table className="table" striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item,id)=>
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>
                                        <Button  variant="success"
                                        onClick={()=>Edit(id)}
                                        >
                                            <FiEdit />
                                        </Button>
                                        <Button className="del" variant="danger"
                                        onClick={()=>Delete(id)}
                                        ><FaTrash/></Button>
                                    </td>
                                </tr>
                                )
                            }
                            
                        </tbody>
                    </Table>
                    :<p>Record Not Found</p>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default UserTable;