import React from "react";
import { Col, Row } from "react-bootstrap";
import Menu from "./Menu";

const Footer = () =>{
 return(
     <div className="footer">
         <h1>Footer Section</h1>
         <Row>
             <Col>
             <p>@CopyRight Reserve under 2022</p>
             </Col>
             <Col>
             <Menu />
             </Col>
         </Row>
     </div>
 )
}

export default Footer;