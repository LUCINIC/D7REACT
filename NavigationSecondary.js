import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap/'

const NavigationSecondary = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">M7-D8 📚</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationSecondary