import React, { useRef } from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Main from "../../assets/projects/Exam1/Main.jpg";
import SS1 from "../../assets/projects/Exam1/ss1.jpg";
import SS2 from "../../assets/projects/Exam1/ss2.jpg";
import SS3 from "../../assets/projects/Exam1/ss3.jpg";
import SS4 from "../../assets/projects/Exam1/ss4.jpg";


const BackToTop = function ({ elementRef }) {
    function ScrollToTop() {
        elementRef.current.scrollTo({ behavior: "smooth", top: 0 });
    }

    return <Button onClick={ScrollToTop}>Go to Top</Button>;
};

function Exam1() {
    const refApp = useRef(null);
    const refB = useRef(null);
    const refC = useRef(null);

    function scrollToSection(appRef, sectionRef) {
        appRef.current.scrollTo({ behavior: "smooth", top: sectionRef.current.offsetTop });
    }

    return (
        <div className="scroll" ref={refApp}>
            <Container fluid>
            <h1>Project Exam 1</h1>
            <Button onClick={() => scrollToSection(refApp, refB)}>Screenshots</Button>
            <Button onClick={() => scrollToSection(refApp, refC)}>Feedback</Button>
            <a href="https://piinkydesigns.com/ProjectExam/index.html"><Button className="weblink">Link to Website</Button></a>
            <section className="scrollRow">
            <Row className="md-4">
            <Col>
            <h3>Project Description</h3>
            <p>This was our first exam at Noroff and was our final exam before the summer of 2019. We were to build a microsite for either SpaceX or 
                Nasa, which would focus on space technology. We were to raise awareness about the space program
                activity around the world. The site should appeal to a specific target audience and provide
                links to more information, livefeeds of launches and so forth.The page should be minimun 4 pages
                and responsive. 
            </p>
            <p> The project should employ JavaScript/JSON API for dynamic data and construction and styling
                of HTML/CSS. We would also make a schedule or timeline of information. We were also to make an 
                HTML5 contact form with JS validation. We were not able to use Bootstrap or other frameworks. 
                We were also going to deliver a functional spec document, a project planning document, and a 
                Gantt chart for this project.
            </p>
            <p>
                I chose to make the microsite about SpaceX, and I wanted the site to be filled with great pictures. 
                The page included live spacefacts and the ISS current position, which is updated through Live API's.
                All the pages of the Rockets, Dragons and Launches are also made out of API, and are changing as 
                we speak. Because it is made out of API, it was a bit harder to make it look really estethical pleasing. 
            </p>
            </Col>
            <Col>
            <h3>Project Screenshot</h3>
            <img src={Main} className="mainImg"/>
            <h3>Selv Evaluation</h3>
            <p> I was pleased at the time, how this project turned out. When I look back at it now, I would try to 
                challenge myself to make it even more interactive, and also challenge myself more on the JavaScript part.
                This was the first semester we were introduced to Javascript, so it was our first attempt to make 
                something spectacular from it. It was a fun project to make, and it was an interesting site to learn 
                more about. It was cool to play around with all the different API's and, to select out which one
                who would fit the website the best. 
            </p>
            </Col>
            </Row>
            </section>


            <section className="scrollRowA" ref={refB}>
                <h4>Screenshots</h4>
                <BackToTop elementRef={refApp} />
                <Row>
                <Col><img src={SS1} className="screenshot"/><img src={SS2} className="screenshot"/></Col>
                <Col><img src={SS4} className="screenshot2"/><img src={SS3} className="screenshot2"/></Col>
                </Row>
            </section>

            <section className="ScrollRowB" ref={refC}>
                <h5>Teachers Feedback and Grade</h5>
                <BackToTop elementRef={refApp} />
                <Row className="RowB">
                <Col>
                <p>Professional and clean. Landing page is striking and enticing, but does add an additional click for the user. 
                    A little annoying that you are taken to the landing page when clicking the logo instead of the frontpage. 
                    Images are great. As with the colour and font choices. Instead of using just text for the social media platforms, 
                    consider icons. Would be more recognizable. The SpaceX logo should be in its original colour. Changing the colour 
                    might be against company rules. CTA buttons can be orange, just to make them stand out more. Links aren’t as clear 
                    as they could be. Scales ok, but I would like more consistency in how the menu breaks. Hamburger menu?
                </p>
                <p><b>Grade:</b> C</p>
                </Col>
                <Col>
                <p>
                No confirmation message after signing up for updates and upcoming events. The SpaceX logo should take you to “home” 
                page rather than landing page. Some very big images which slow load time.
                </p>
                <p>
                The email sign up, should be at the top of the website. Seems a bit lost at the bottom. Images are slow to download. 
                Huge images some places (up to 1.7mb and some almost a mb). Meta tags and alt text is good. Meta description could 
                have been more descriptive. Great use of alt tags. Website is responsive.
                </p>
                <p>
                Great report! Explained the process well. Loved the mood boards, story boards and colour palette.
                </p>
                </Col>
                </Row>
            </section>
            </Container>
        </div>
    );
}
export default Exam1
