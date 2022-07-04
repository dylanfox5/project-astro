import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function CustomNavbar() {
    return (
        <Navbar sticky="top" variant="light" expand="lg" className="animate__animated animate__fadeInDown animate__delay-1s">
            <Container>
                <Navbar.Brand href="/">project astro</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav navbarScroll>
                        <Nav.Link className="nav-item" href="#">link</Nav.Link>
                        <Nav.Link className="nav-item" href="#">link</Nav.Link>
                        <Nav.Link className="nav-item" href="#">link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;