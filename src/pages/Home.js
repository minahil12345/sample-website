import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';

const Home = () => (
    <Container>
        <Row className="my-5">
            <Col>
                <Typography variant="h2" gutterBottom>Home</Typography>
                <Typography variant="body1">Welcome to our website!</Typography>
            </Col>
        </Row>
    </Container>
);

export default Home;
