import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "./Banner";
import Footer from "./Footer";

const Home = () =>{
 return(
     <div className="container-fluid">
         <Banner />
         <Container>
             <Row className="heading">
                <h1>Home</h1>
             </Row>
             <Row className="row-wr">
                 <Col></Col>
                 <Col>
                 <h2>Hook</h2>
                 <p>+</p>
                 <h2>HookForm</h2>
                 <p>+</p>
                 <h2>Router</h2>
                 </Col>
                 <Col></Col>
             </Row>
         </Container>
         <Footer />
         
     </div>
 )
}

export default Home;