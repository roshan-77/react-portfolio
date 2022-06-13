import React from "react"
import projects from "../Api/projects-list"
import '../css/portfolio.css'
import ProjectCard from './projectCard.js'
import startupprojects from "../Api/startup-projects"

export function Portfolio(){
    return(
        <>
            <div style={{height:"300px"}} className="portfolio-background"></div>
            <section className='portfolio'>
                <section className="container">
                    <div className="recent-projects">
                        <div className="portfolio-header">
                            <h1>My Recent Projects</h1>
                            <p>Please have a look at some of my recent projects that I have worked on.</p>
                        </div>
                        <div className="projects">
                            <div className="project-cards">
                            {
                                projects.map((project)=>{
                                    return (
                                        <ProjectCard project={project}/>
                                    )
                                })
                            }
                                
                            </div>
                        </div>
                    </div>
                  
                    <div className="startup-projects">
                        <div className="portfolio-header">
                            <h1>My Startup Projects</h1>
                            <p>Projects that I started my web development journey with.</p>
                        </div>
                        <div className="projects">
                            <div className="project-cards">
                            {
                                startupprojects.map((project)=>{
                                    return (
                                        <ProjectCard project={project}/>
                                    )
                                })
                            }
                                
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}