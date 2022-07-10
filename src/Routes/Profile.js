import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../Components/CustomNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Profile() {

    return (
        <div>
            <CustomNavbar />
            <div className="content">
                <Container className="profile animate__animated animate__fadeIn animate__delay-2s">
                    <Row>
                        <Col sm={12} lg={12}>
                            <InputGroup>
                                <Form.Control
                                className="post-form"
                                as="textarea"
                                placeholder="How can we pray for you today?"
                                aria-label="With textarea"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm={12} lg={12}>
                            <Button variant="primary">Post</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Profile;