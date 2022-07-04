import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './CustomNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <div className="content">
        <Container className="Home" id="home">
        <Row>
          <Col sm={12} lg={8} className="animate__animated animate__fadeInLeft animate__delay-1s">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="How can we pray for you today?"
                aria-label="How can we pray for you today?"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col sm={12} lg={4}></Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;