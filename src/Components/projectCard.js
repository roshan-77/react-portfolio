import React from "react";
import "../css/projectCard.css"
import {Button} from 'react-bootstrap'

function ProjectCard({project}){
    return(
        <>
            {/* <div className="project-card">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={project.img} alt="Avatar" style={{width:"400px", height:"300px"}} />
                    </div>
                    <div className="flip-card-back">
                        <p>{project.title}</p>
                        <button className=""><a href={project.title}>Description</a></button>
                    </div>
                  </div>
                </div>

            </div> */}

        <div className="containers align-items-center justify-content-center flex-wrap">
          <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src={project.img} alt=""/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">{project.title}</h3>
						<p>For more information, please click on the buttons below.</p>
                        <Button variant="info" href={`#/${project.title}`}>Description</Button>
                        <Button variant="success" href={project.website} target="_blank">Visit Website</Button>
                    </div>
                </div>
            </div>
          </div>
		  <div className="titleContainer"><h4>{project.title}</h4></div>
        </div>
		
        </>
    )
}

export default ProjectCard;