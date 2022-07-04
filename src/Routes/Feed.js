import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import CustomNavbar from '../Components/CustomNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    const [posts, setPosts] = useState([
        { title: 'Lorem ipsum dolor', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim lectus, porttitor nec orci ornare, posuere porta leo. Praesent aliquam nibh eget porta vehicula.", author: "Luigi", id: 1 },
        { title: 'Lorem ipsum dolor', body: "lorem ipsum...", author: "Yoshi", id: 2 },
        { title: 'Lorem ipsum dolor', body: "lorem ipsum...", author: "Mario", id: 3 },
        { title: 'Lorem ipsum dolor', body: "lorem ipsum...", author: "Koopa", id: 4 },
        { title: 'Lorem ipsum dolor', body: "lorem ipsum...", author: "Peach", id: 4 },
    ]);

    return (
        <div className="App">
            <CustomNavbar />
            <div className="content">
                <Container className="feed">
                    <Row>
                        <Col sm={12} lg={12}>
                            <div className="animate__animated animate__fadeIn animate__delay-1s">
                                {posts.map((post) => (
                                    <div className="post" key={post.id}>
                                        <h2>{post.title}</h2>
                                        <p>{post.author}</p>
                                        <p>{post.body}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;