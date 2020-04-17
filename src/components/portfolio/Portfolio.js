import React from 'react';
import HoverImage from "react-hover-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Semester1 from "../../assets/projects/semesterproject1/main.jpg";
import Semester12 from "../../assets/projects/semesterproject1/main12.jpg";
import Exam1 from "../../assets/projects/Exam1/exam1-1.jpg";
import Exam12 from "../../assets/projects/Exam1/exam2.jpg";
import Semester21 from "../../assets/projects/semesterproject2/main1.jpg";
import Semester22 from "../../assets/projects/semesterproject2/main2.jpg";
import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <div>
            <Container fluid>
            <h1>Portfolio</h1>
            <Row className="justify-content-md-center">

            <div class="project"><Link to="/Semester2018"><HoverImage 
            src={Semester1} 
            hoverSrc={Semester12}
            className="main-image"/>
            </Link></div>

            <div class="project"><Link to="/Exam1"><HoverImage 
            src={Exam1} 
            hoverSrc={Exam12}
            className="main-image"/>
            </Link> </div>

            <div class="project"><Link to="/Semester2019"><HoverImage 
            src={Semester21} 
            hoverSrc={Semester22}
            className="main-image"/>
            </Link> </div>

            </Row>
            </Container>
        </div>
    )
}

export default Portfolio;


