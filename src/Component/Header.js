import React from "react";
import { Navbar,Container,Nav } from "react-bootstrap";
import Menu from "./Menu";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Menu />
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;