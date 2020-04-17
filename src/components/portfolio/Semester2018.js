import React, { useRef } from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SS1 from "../../assets/projects/semesterproject1/screenshot1.jpg";
import SS2 from "../../assets/projects/semesterproject1/screenshot2.jpg";
import SS3 from "../../assets/projects/semesterproject1/screenshot3.jpg";
import SS4 from "../../assets/projects/semesterproject1/screenshot4.jpg";


const BackToTop = function ({ elementRef }) {
    function ScrollToTop() {
        elementRef.current.scrollTo({ behavior: "smooth", top: 0 });
    }

    return <Button onClick={ScrollToTop}>Go to Top</Button>;
};

function Semester2018() {
    const refApp = useRef(null);
    const refB = useRef(null);
    const refC = useRef(null);

    function scrollToSection(appRef, sectionRef) {
        appRef.current.scrollTo({ behavior: "smooth", top: sectionRef.current.offsetTop });
    }

    return (
        <div className="scroll" ref={refApp}>
            <Container fluid>
            <h1>Semester Project 2019</h1>
            <Button onClick={() => scrollToSection(refApp, refB)}>Screenshots</Button>
            <Button onClick={() => scrollToSection(refApp, refC)}>Feedback</Button>
            <a href="http://www.piinkydesigns.com/semesterproject1/index.html"><Button>Link to Website</Button></a>
            <section className="scrollRow">
            <Row className="md-4">
            <Col>
            <h3>Project Description</h3>
            <p>This was my first big assignment to deliver at Noroff. We were to make an website
                for an interactive science museum, which were to open in our town. The core target
                audience was primary and middle school children (7-15) and families with young children.
                The museum wanted a website that was informative and appealing, that would attract 
                both middle school pupils and their parents. The site should also appeal to youngsters
                without pandering; it should take for granted that the audience is inquisitive and 
                intelligent. The website should be informative and engaging, but it should also encourage
                viewers to visit the museum itself. The website should be responsive, and be easity to use
                on various devices. 
            </p>
            <p> This project exam should reflect on the student's creative and technical knowledge
                and skills based  on the first semesters curriculum. This includes design principles,
                project management, communication technology, and developing with HTML/CSS. We were given
                4 weeks to finish this project. During the process, we were to make a detailed work 
                schedule and complete it with milestones for design, coding and testing. In the end, we
                were asked to deliver an reflective report on 2000-5000 words, explaining our thoughts
                and the process.
            </p>
            </Col>
            <Col>
            <h3>Project Screenshot</h3>
            <img src={SS1} className="mainImg"/>
            <h3>Selv Evaluation</h3>
            <p> This project was a really fun project to "start off" the development career. I see back
                at it now, and see how simple the whole project was. But it was challenging at the time, 
                in it's own way. It is a lot I would love to change if I were to make this assignment again,
                but it is great to see how much my skills have evolved over this amount of period. 
            </p>
            </Col>
            </Row>
            </section>


            <section className="scrollRowA" ref={refB}>
                <h4>Screenshots</h4>
                <BackToTop elementRef={refApp} />
                <Row>
                <Col><img src={SS2} className="screenshot"/></Col>
                <Col><img src={SS3} className="screenshot2"/><img src={SS4} className="screenshot2"/></Col>
                </Row>
            </section>

            <section className="ScrollRowB" ref={refC}>
                <h5>Teachers Feedback and Grade</h5>
                <BackToTop elementRef={refApp} />
                <Row className="RowB">
                <Col>
                <p>A great effort that does what it decides to do well! The playful colours and fonts, 
                    whilst perhaps a little too “cutesy”, work well, as do the transparent sections on a fixed background. 
                    You’ve included a nice, solid footer and the site as a whole is pretty flawlessly responsive (apart 
                    from the odd minor contact form break on certain screens). Your solution of using different versions
                    of the logo so it doesn’t appear too big on a mobile screen is also a clever one and, like 
                    good coding practice. The nitpicks are minor: the Location column on the “Visit Us” page does feel a 
                    little bit tacked on on a desktop screen, as that section of screen space hasn’t been used elsewhere on the 
                    site. Perhaps each “Explore” column could’ve had a separate call-to-action and the site as a whole is a little 
                    light on images. Also, some of your H2 text risks spilling beyond the borders on certain desktop screens.
                </p>
                <p><b>Grade:</b> A</p>
                </Col>
                <Col>
                <p>
                Layouts are responsive scales very well from mobile to desktop. CSS is well written mobile first approach well done. 
                Mobile layout is well designed and readable. The code is semantic and HTML5 tags are used. Code is neat and indented. 
                The visit page has a horizontal scrollbar between 1247px and 960px wide
                </p>
                <p>
                Navigationally, the site is clear and easy to explore, with a good menu active state (and a cool extra menu for the 
                “Exhibitions” page). You’ve included all the relevant keywords. Meta descriptions etc. which is great. 
                </p>
                <p>
                Well written report with good insights into the decisions made and the process the student went through. It’s clear in 
                your report that you were keen to take past feedback on board and learn from it, which is excellent. Glad to see a style 
                tile used as well as mockups.
                </p>
                </Col>
                </Row>
            </section>
            </Container>
        </div>
    );
}

export default Semester2018;
