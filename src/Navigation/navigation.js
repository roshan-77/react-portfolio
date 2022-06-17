// http://www.emilyridge.ie/
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "../Components/home";
import { Portfolio } from "../Components/portfolio";
import { ProjectDescription } from "../Components/projectDescription";
import startupprojects from '../Api/startup-projects'
import projects from '../Api/projects-list'

export function Navigation(){
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="light" >
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" style={{fontSize:"20px"}}>
                  <Nav.Link href="#/" style={{color:"white"}}>Home</Nav.Link>
                  <Nav.Link href="#/portfolio" style={{color:"white"}}>Portfolio</Nav.Link>
                  <Nav.Link href="#contact-links" style={{color:"white"}}>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
             </Navbar>

             <Routes>
                <Route  path="/" element={<Home />}>Home</Route>
                <Route  path="/portfolio" element={<Portfolio/>}></Route>
                {startupprojects.map((project)=>{
                    return <Route  path={project.title} element={<ProjectDescription prop={project} />}></Route>                
                })}
                {projects.map((project)=>{
                    return <Route  path={project.title} element={<ProjectDescription prop={project} />}></Route>                
                })}
                {/* <Route exact path="/contact">Contact</Route> */}

             </Routes>
        </>
    )
};