import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import insta from "../../assets/contact/insta.png";
import fb from "../../assets/contact/fb.png";
import Linkedin from "../../assets/contact/Li.png";

function Contact() {
    return (
        <div>
            <h1>Don't be a stranger</h1>
            <h1>Just say Hello!</h1>
        <Container>
        <Row className="justify-content-md-center contactRow">
            <Col>
            <h2>Feel free to get in touch with me! </h2>
            <p class="contactP">Since I'm graduating in the summer I would love to get in touch with you about a possible workplace!</p>
            <p className="info"><b>Nina Wiik</b></p>
            <p className="info"><b>Location:</b> Bergen or Sandefjord, Norway</p>
            <p className="info"><b>Email:</b> <a href="mailto:ninawiik1@outlook.com">ninawiik1@outlook.com</a></p>
            <p className="info"><b>Phone:</b> +47 920 83 323</p>
            </Col>
        </Row>

        <Row className="justify-content-md-center contactRow2">
            <Col className="SoMeCol">
            <h2>Follow me in Social Media </h2>
            <a href="https://www.instagram.com/ninawiik/" className="SOME"><img src={insta} className="SMIcon" /></a>
            <a href="https://www.facebook.com/NinaWiik07" className="SOME"><img src={fb} className="SMIcon" /></a>
            <a href="https://www.linkedin.com/in/nina-wiik-79703a57" className="SOME"><img src={Linkedin} className="SMIcon" /></a>
            </Col>
        </Row>

        </Container>
        </div>
    )
}

export default Contact;
