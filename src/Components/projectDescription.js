import React from 'react';
import projects from '../Api/projects-list'
import '../css/projectDescription.css'
import {Card, ListGroup} from 'react-bootstrap'
import { Navigation } from '../Navigation/navigation';
import startupprojects from '../Api/startup-projects'
import todolist from "../images/todolist.jpg"
import '../css/portfolio.css'


export function ProjectDescription({prop}){
    return(
        <>
        <div style={{height:"300px"}} className="portfolio-background"></div>

        <h1 style={{textAlign:"center", padding: "20px"}}>Project Description</h1>
        
        <section className='project-card' style={{paddingBottom:"30px"}}>
            <section className="project-img">
               <img src={prop.img}/>
            </section>
            <section className="project-info">
                <div className="project-details">
                    <Card style={{border:"none"}}>
                          <Card.Header style={{fontWeight:"bold"}}>Project Information</Card.Header>
                          
                          <Card.Body>
                              <Card.Text>Name: {prop.title}</Card.Text>
                              <Card.Text>Category:  {prop.category}</Card.Text>
                              <Card.Text>URL:  <a href={prop.website} style={{textDecoration:"none", color:"black"}}>{prop.website}</a></Card.Text>
                              <Card.Text>Source Code:  {prop.gitlink}</Card.Text>
                          </Card.Body>
                    </Card>
                    
                </div>
                <div className="project-description">
                    <Card style={{border:"none"}}>
                        <Card.Header style={{fontWeight:"bold"}}>Description</Card.Header>
                        
                        <Card.Body>
                            <Card.Text>
                                {prop.description}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </div>
            </section>
        </section>
            
        </>
    )
}
