import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import About from "../about/About";
import Semester2018 from "../portfolio/Semester2018";
import Exam1 from "../portfolio/Exam1";
import Semester2019 from "../portfolio/Semester2019";

function Layout() {
    return (
        <Router>
            <Navbar variant="dark" expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand>PORTFOLIO</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ml-auto">
                        <NavLink to="/" exact className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/Semester2018" component={Semester2018} />
                    <Route path="/Exam1" component={Exam1} />
                    <Route path="/Semester2019" component={Semester2019} />
                </Switch>
        </Router>
    )
}

export default Layout;
