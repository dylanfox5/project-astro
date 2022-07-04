import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
      <div className="content">
        <Container className="home">
        <Row>
          <Col sm={12} lg={8}>
            <div className="animate__animated animate__fadeInLeft animate__delay-1s">
              <h1>hello</h1>
            </div>
          </Col>
          <Col sm={12} lg={4}></Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;