import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CustomNavbar from '../Components/CustomNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

function Feed() {
    const [posts, setPosts] = useState([
        { title: 'Lorem ipsum dolor', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim lectus, porttitor nec orci ornare, posuere porta leo. Praesent aliquam nibh eget porta vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim lectus, porttitor nec orci ornare, posuere porta leo.", author: "Luigi", id: 1 },
        { title: 'Lorem ipsum dolor', body: "lorem ipsum...", author: "Yoshi", id: 2 },
        { title: 'Lorem ipsum dolor', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim lectus, porttitor nec orci ornare, posuere porta leo.", author: "Mario", id: 3 },
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
                            {/* <div className="animate__animated animate__fadeIn animate__delay-1s">
                                {posts.map((post) => (
                                    <div className="post" key={post.id}>
                                        <h2>{post.title}</h2>
                                        <p>{post.author}</p>
                                        <p>{post.body}</p>
                                    </div>
                                ))}
                            </div> */}
                            {posts.map((post) => (
                                <Card className="post animate__animated animate__fadeIn animate__delay-1s" key={post.id}>
                                    <Card.Body>
                                        <Card.Title>
                                            {post.title}
                                        </Card.Title>
                                        <Card.Subtitle>
                                            {post.author}
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {post.body}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="post-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Feed;