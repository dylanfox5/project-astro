import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CustomNavbar from '../Components/CustomNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

import { ps } from '../global';

function Feed() {
    const [posts, setPosts] = useState(ps);

    return (
        <div>
            <CustomNavbar />
            <div className="content">
                <Container className="feed">
                    <Row>
                        <Col sm={12} lg={12}>
                            {posts.map((post) => (
                                <Card className="post animate__animated animate__fadeIn animate__delay-2s" key={post.id}>
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