import React, { useRef } from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Main from "../../assets/projects/semesterproject2/main11.jpg";
import SS1 from "../../assets/projects/semesterproject2/ss1.jpg";
import SS2 from "../../assets/projects/semesterproject2/ss2.jpg";
import SS3 from "../../assets/projects/semesterproject2/ss3.jpg";
import SS4 from "../../assets/projects/semesterproject2/ss4.jpg";


const BackToTop = function ({ elementRef }) {
    function ScrollToTop() {
        elementRef.current.scrollTo({ behavior: "smooth", top: 0 });
    }

    return <Button onClick={ScrollToTop}>Go to Top</Button>;
};

function Semester2019() {
    const refApp = useRef(null);
    const refB = useRef(null);
    const refC = useRef(null);

    function scrollToSection(appRef, sectionRef) {
        appRef.current.scrollTo({ behavior: "smooth", top: sectionRef.current.offsetTop });
    }

    return (
        <div className="scroll" ref={refApp}>
            <Container fluid>
            <h1>Semester Project 2</h1>
            <Button onClick={() => scrollToSection(refApp, refB)}>Screenshots</Button>
            <Button onClick={() => scrollToSection(refApp, refC)}>Feedback</Button>
            <a href="http://piinkydesigns.com/Semester-Project-2/index.html"><Button className="weblink">Link to Website</Button></a>
            <section className="scrollRow">
            <Row className="md-4">
            <Col className="GOT">
            <h3>Project Description</h3>
            <p>For this Semester Project we were to build an online Board Game game for Game of Thrones. The boardgame
                is built from HTML, CSS and JavaScript. The board should have three main pages. The first page you come 
                to is the Character Select page, where the player will select an character. We used an array of characters 
                using data from an JSON File. We were to create 10 characters of our choice, and they should show up in cards 
                displaying all relevant information. Once the character was selected, the chosen character should move to 
                the board where they would be represented by tokens. 
            </p>
            <p>
                The next page was the board game page, and this page didn't have to be responsive. We were to create a dice, 
                which could be rolled, and that would only produce a number between 1 and 6. Then the token would advance the 
                number shown on the dice. It should be at least 30 tiles for the tokens to move on. We were also going to make 
                some traps to slow down the player. The token should then move back three spaces, if the player landed on 
                this trap. There should be a minimun of 5 traps on the board. The application should also swap out turns 
                between each token depending on whose turn it is to roll the dice. 
            </p>
            <p>
                The last page is the final page, or the "winning page". A token will eventually react the end of the game, 
                and then we had to make a page to congratulate the winner. This page needed to be aesthetically pleasing. 
                It would also be appreciated if we were to include some JavaScript animations on this page to make it interactive. 
            </p>
            </Col>
            <Col className="GOT">
            <h3>Project Screenshot</h3>
            <img src={Main} className="mainImgGOT"/>
            <h3>Selv Evaluation</h3>
            <p>
                This is by far the hardest assignment we have had, and it was a real challenge to make this game. It were 
                supposed to be a two-player game, but because it was really hard to figure out all the details behind the 
                JavaScript, we were to make it a one-player game. Not very optimal game, but it was a really big learning 
                process to do it. I really learned a lot, especially JavaScript, on this assignment. In the future, I would 
                really like to work on it, and make it a two-player game. 
            </p>
            <p>All the characters are made by myself, in a combination of Adobe Illustrator and Photoshop. I really wanted 
                more time to make them even better, but had to limit it because of the time. I also made all the different tokens, for the different shields. The logo is also 
                made in Photoshop, with all the drawing and coloring that came with it. It was a project that was really fun 
                to work on, because we could be so creative - and not only in our code. 
            </p>
            </Col>
            </Row>
            </section>


            <section className="scrollRowA" ref={refB}>
                <h4>Screenshots</h4>
                <BackToTop elementRef={refApp} />
                <Row>
                <Col><img src={SS1} className="screenshot"/><img src={SS2} className="screenshot"/></Col>
                <Col><img src={SS3} className="screenshot2"/><img src={SS4} className="screenshot2"/></Col>
                </Row>
            </section>

            <section  className="ScrollRowB" ref={refC}>
                <h5>Teachers Feedback and Grade</h5>
                <BackToTop elementRef={refApp} />
                <Row className="RowB">
                <Col>
                <p>Excellent job in creating unique avatars for each character. They are well designed and consist of individual 
                    characteristics that make them recognisable. The same with the logo, it is clear to what it represents and 
                    illustrated in a unique way, which will make it memorable to the user. The way the page was laid out is easy 
                    to navigate and effortless to understand and follow. The colours and fonts chosen are relevant to the genre of 
                    the site and various design elements. The "board game" page is aesthetically pleasing and easy to comprehend,
                     which is great for the user of the website. It's also good to see instruction on how to use the game; these 
                     are vital for any first-time player. The "finale" page is well designed and brings a feeling of achievement to the player.
                </p>
                <p><b>Grade:</b> B</p>
                </Col>
                <Col>
                <p>
                The code for one player works well and so do the traps. An obvious improvement would be to make it work for two players. 
                The simplest way to do that would be to duplicate the one player code, though storing whose turn it is in a variable and 
                reusing the existing code is preferable. The first page responsiveness is good. The code is for the most part well-formatted 
                and the Sass files are well-arranged. Nice use of innerHTML after the API calls and snow effect on the winner’s page is cool. 
                The modals on the traps are nice, but could be aligned at the top of the page to lessen their chances of being cut off and making 
                the user scroll. On a lot of resolutions you have to scroll to see the dice. Maybe it would be better higher up on the page.
                </p>
                <p>
                <b>Report:</b> Can explain his/her own vocational choices for tools, methods and techniques for planning, developing and design of 
                digital solutions: Very thorough</p>
                </Col>
                </Row>
            </section>
            </Container>
        </div>
    );
}

export default Semester2019
/*

<p>For this Semester Project we were to build an online Board Game game for Game of Thrones. The boardgame
    is built from HTML, CSS and JavaScript. The board should have three main pages. The first page you come 
    to is the Character Select page, where the player will select an character. We used an array of characters 
    using data from an JSON File. We were to create 10 characters of our choice, and they should show up in cards 
    displaying all relevant information. Once the character was selected, the chosen character should move to 
    the board where they would be represented by tokens. 
</p>
<p>
    The next page was the board game page, and this page didn't have to be responsive. We were to create a dice, 
    which could be rolled, and that would only produce a number between 1 and 6. Then the token would advance the 
    number shown on the dice. It should be at least 30 tiles for the tokens to move on. We were also going to make 
    some traps to slow down the player. The token should then move back three spaces, if the player landed on 
    this trap. There should be a minimun of 5 traps on the board. The application should also swap out turns 
    between each token depending on whose turn it is to roll the dice. 
</p>
<p>
    The last page is the final page, or the "winning page". A token will eventually react the end of the game, 
    and then we had to make a page to congratulate the winner. This page needed to be aesthetically pleasing. 
    It would also be appreciated if we were to include some JavaScript animations on this page to make it interactive. 
</p>

<h4>Thoughts</h4>
<p>
    This is by far the hardest assignment we have had, and it was a real challenge to make this game. It were 
    supposed to be a two-player game, but because it was really hard to figure out all the details behind the 
    JavaScript, we were to make it a one-player game. Not very optimal game, but it was a really big learning 
    process to do it. I really learned a lot, especially JavaScript, on this assignment. In the future, I would 
    really like to work on it, and make it a two-player game. 
</p>
<p>All the characters are made by myself, in a combination of Adobe Illustrator and Photoshop. I really wanted 
    more time to make them even better, but because of the time limit and since we had to make so many players, 
    I had to manage my time. I also made all the different tokens, for the different shields. The logo is also 
    made in Photoshop, with all the drawing and coloring that came with it. It was a project that was really fun 
    to work on, because we could be so creative - and not only in our code. 
</p>*/