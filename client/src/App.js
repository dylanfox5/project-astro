import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/CustomNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api").then((res) => res.json()).then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <CustomNavbar />
      <div className="content">
        <Container className="home">
        <Row>
          <Col sm={12} lg={8}>
            <div className="animate__animated animate__fadeInLeft animate__delay-1s">
              <h1>Welcome to Project Astro</h1>
              <p>{!data ? "Loading..." : data}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim lectus, porttitor nec orci ornare, posuere porta leo. Praesent aliquam nibh eget porta vehicula. In hendrerit tristique purus quis viverra. Aliquam est dolor, molestie et est sit amet, pulvinar tristique odio. Suspendisse nisi ipsum, porttitor id diam placerat, bibendum dictum ipsum.</p>
            </div>
            <InputGroup className="mb-3 animate__animated animate__fadeIn animate__delay-3s">
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