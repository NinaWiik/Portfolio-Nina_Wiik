import React from 'react'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nina from "../../assets/pictures/nina.jpg"

function About() {
    return (
        <div>
            <h1>Hello!</h1>
            <h1>I'm Nina.</h1>
        <Container>
        <Row className="justify-content-md-center aboutRow">
            <Col className="aboutCol">
            <h2>About me</h2>
            <p className="aboutParagraph">I'm a 28 year old girl who loves the outdoor as well as sitting inside and nerding on my
                computer. For as long as I can remember, I've always been interested in computers, and making
                websites. I made simple websites when I was younger, and when I was wondering which education
                I wanted to pursue, front-end development was my number one choice!  </p>
            <p className="aboutParagraph">
                I have also a bachelor degree in Marketing, from the Norwegian business School. I think this 
                is two great educations to have combined! When I'm not studying, I love to hike and train my 
                dog, io, a two year old Australian Shepherd. 
            </p>
            <p className="aboutParagraph"> I also love to photograph, and to edit the pictures afterwards. This started out as an hobby, 
                but after I while, wanted to try to make something out of it. I then made a instagram account, 
                where I post pictures from my life and of my dog. I have managed to get a lot of followers, and 
                got great beneficial sponsor deals out of it. 
            </p>
            </Col>
            <Col>
            <img src={Nina} className="aboutImg" alt="me and my dog, io!"/>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default About
