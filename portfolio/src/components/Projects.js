import React from 'react'
import "../styles/Projects.css"
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.jpg"
import p3 from "../images/p3.jpg"
import p4 from "../images/p4.jpg"
import p5 from "../images/p5.jpg"


function Projects() {
    return (
      <div className="container">
          <div className="header">
              <h2 className="header__name">featured <span>projects</span></h2>
          </div>
          <div className="projects">
              <div className='project'>
                  <div className="project__image">
                      <a href="https://cuberto.com/" alt="projectimage"><img src={p1} alt="imagebyproject" width="400px" height="500px" /></a>
                  </div>
                  <div className="project__content">
                      <h3 className="project__name">Flipa Clip</h3>
                      <p className="project__text">The best tool for frame by frame animation</p>
                      <p className="project__tags">Web,devolopment,Product</p>
                  </div>
              </div>
              <div className='project'>
                  <div className="project__image">
                      <a href="https://cuberto.com/" alt="projectimage"><img src={p1} alt="imagebyproject" width="400px" height="500px" /></a>
                  </div>
                  <div className="project__content">
                      <h3 className="project__name">Flipa Clip</h3>
                      <p className="project__text">The best tool for frame by frame animation</p>
                      <p className="project__tags">Web,devolopment,Product</p>
                  </div>
              </div>
              <div className='project'>
                  <div className="project__image">
                      <a href="https://cuberto.com/" alt="projectimage"><img src={p1} alt="imagebyproject" width="400px" height="500px" /></a>
                  </div>
                  <div className="project__content">
                      <h3 className="project__name">Flipa Clip</h3>
                      <p className="project__text">The best tool for frame by frame animation</p>
                      <p className="project__tags">Web,devolopment,Product</p>
                  </div>
              </div>
              <div className='project'>
                  <div className="project__image">
                      <a href="https://cuberto.com/" alt="projectimage"><img src={p1} alt="imagebyproject" width="400px" height="500px" /></a>
                  </div>
                  <div className="project__content">
                      <h3 className="project__name">Flipa Clip</h3>
                      <p className="project__text">The best tool for frame by frame animation</p>
                      <p className="project__tags">Web,devolopment,Product</p>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Projects
