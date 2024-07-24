// src/pages/Contact.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';

const Contact = () => (
    <Container>
        <Row className="my-5">
            <Col>
                <Typography variant="h2" gutterBottom>Contact Us</Typography>
                <Typography variant="body1">Get in touch with us.</Typography>
            </Col>
        </Row>
    </Container>
);

export default Contact;
