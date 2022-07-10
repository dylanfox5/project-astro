import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CustomNavbar from '../Components/CustomNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {

    return (
        <div>
            <CustomNavbar />
            <div className="content">
                <Container className="profile animate__animated animate__fadeInLeft animate__delay-1s">
                    <Row>
                        <Col sm={12} lg={12}>
                            <h1>profile</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Profile;