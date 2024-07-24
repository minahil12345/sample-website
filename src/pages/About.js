// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';

const About = () => (
    <Container>
        <Row className="my-5">
            <Col>
                <Typography variant="h2" gutterBottom>About Us</Typography>
                <Typography variant="body1">Learn more about us here.</Typography>
            </Col>
        </Row>
    </Container>
);

export default About;
