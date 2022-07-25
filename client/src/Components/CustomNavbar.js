import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../global.js';

function CustomNavbar() {

    const Profile = (props) => {
        const isLoggedIn = props.isLoggedIn;

        if (isLoggedIn) {
            return <Nav.Link className="nav-item" href="#">
                <Link to="/profile" className="link">Profile</Link>
            </Nav.Link>
        }
    }

    const Feed = (props) => {
        const isLoggedIn = props.isLoggedIn;

        if (isLoggedIn) {
            return <Nav.Link className="nav-item" href="#">
                <Link to="/feed" className="link">Feed</Link>
            </Nav.Link>
        }
    }

    const Account = (props) => {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <Nav.Link className="nav-item">
                <Link to="/" className="link">Account</Link>
            </Nav.Link>
        } else {
            return <Nav.Link className="nav-item">
                <Link to="/" className="link">Login</Link>
            </Nav.Link>
        }
    }

    return (
        <Navbar sticky="top" variant="light" expand="lg" className="animate__animated animate__fadeInDown animate__delay-1s">
            <Container>
                <Navbar.Brand href="/">Project Astro</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav navbarScroll>
                        <Profile isLoggedIn={isLoggedIn} />
                        <Feed isLoggedIn={isLoggedIn} />
                        <Account isLoggedIn={isLoggedIn} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;