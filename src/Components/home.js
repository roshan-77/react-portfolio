import React from 'react'
import '../css/home.css'
import profile from '../images/profile.jpg'
import {FontAwesomeIcon, }  from '@fortawesome/react-fontawesome'
import { faCode, faMagnifyingGlass, faCheck } from '@fortawesome/free-solid-svg-icons'
import projects from '../Api/projects-list'
import startupprojects from '../Api/startup-projects'
import ProjectCard from './projectCard'

export function Home({prop}){
    return(
        <section className="whole-body">
        <section className="containers">
            <section className="title-section">
                <section className="container ">
                <div className="title"><h1>Web Developer and Software Tester</h1></div>
                <div className='tagline'>I design and code things to look amazing, and I love what I do</div>
                <div className="img" ><img src={profile} alt="my avatar" style={{width:"300px", borderRadius:"50%"}}/></div>
                </section>
                
            </section>
            <section className="about-me" id="about-me">
                <section className="container">
                    <h1>Hi! I'm Roshan. Nice to have you here</h1>
                    <p>Frontend developer with a proven ability to collaborate effectively within a team while 
                        devoting extra time to be mentored. Enjoy working closely with team members to ensure
                        workloads are effectively redirected. With a passion for both personal growth and for 
                        software development, I attended 1000+ hour coding bootcamp to learn new languages while
                        sharpening existing skills. Ready to put my coding skills to work with a talented engineering 
                        team to create high-quality solutions.</p>
                </section>
            </section>
            <section className="my-work">
                <section className="container">
                    <div className="work">
                        <FontAwesomeIcon icon={faCode} className="work-fontAwesome"/>
                        <div className="work-header">
                            <h1>Front-end Developer</h1>
                            <p>I like to code things from scratch and bring ideas to life</p>
                        </div>
                        
                        <div className="languages">
                            <h2 className="language">Programming Language</h2>
                            <ul className='programming-language'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>React</li>
                                <li>Redux</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2>Experience</h2>
                            <p>Currently working as a part-time front-end developer in a remote position.</p>
                            <p><a href="#experience2">Click me for more info!</a></p>
                        </div>
                    </div>
                    <div className="work">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="work-fontAwesome"/>
                        <div className="work-header">
                            <h1>Software Tester</h1>
                            <p>Testing and maintaining the quality of software</p>
                        </div>
                        
                        <div className="languages">
                            <h2 className="language">Programming Language</h2>
                            <ul className='programming-language'> 
                                <li>JavaScript</li>
                                <li>WebDriver.io</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Experience</h2>
                            <p>Currently working as a full-time software tester in an IT company.</p>
                            <p><a href="#experience1">Click me for more info!</a></p>
                        </div>
                      
                    </div>
                </section>         
            </section>

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

            <section className="experiences">
                <section className="container">
                    <h1>Experience</h1>
                    <div className = "experience" id="experience1">
                        <div><b> Rotor Studios (July 2021 - Present)</b></div>
                        <div><b> Automation QA Analyst</b></div>
                        <ol>
                            <li><FontAwesomeIcon icon={faCheck}/> Testing the functionality of software.</li>
                            <li><FontAwesomeIcon icon={faCheck}/> Using the Jira Software to keep track of tickets and resolve them as soon as possible.</li>
                            <li><FontAwesomeIcon icon={faCheck}/> Developing and running the automation scripts on different tasks to minimize the manual testing and errors.</li>
                            <li><FontAwesomeIcon icon={faCheck}/> Working closely with Project managers and Developers to make sure the open issues are fixed and the assets are ready for delivery to clients.</li>
                            <li><FontAwesomeIcon icon={faCheck}/> Undertaking different types of testing like sanity, smoke and so on.</li>
                            <li><FontAwesomeIcon icon={faCheck}/> Performing Regression on the release candidate to ensure that all the functionalities are working fine.</li>
                            <li><FontAwesomeIcon icon={faCheck}/> Using tools like Jenkins, Figma, GitHub, BrowserStack on daily basis.</li>
                        </ol>
                    </div>
                    <div className = "experience" id="experience2">
                        <div><b> Nakshatra Techno Hub (March 2022 - Present)</b></div>
                        <div><b> FrontEnd Developer</b></div>
                        <ol>
                            <li><FontAwesomeIcon icon={faCheck}/> Beinging UX/UI design into life.</li>
                        </ol>
                    </div>
                </section>
            </section>
            <section className="education">
                <section className="container" style={{width: "600px", textAlign:"left"}}>
                    <h1 style={{textAlign:"center"}}>Education</h1>
                    <div className="academic">
                        <div><FontAwesomeIcon icon={faCheck}/><b> Bachelor's in Information Technology (2018-2021)</b></div>
                        <div>Australian Catholic University</div>
                    </div>
                    <div className="professional-year">
                        <div><FontAwesomeIcon icon={faCheck}/><b> Professional Year Program (2022 - Present)</b></div>
                        <div>Performance Education</div>
                    </div>
                </section>
            </section>
            
        </section>
       
        </section>
    )
}