import React from 'react'
import ProjectCard from './ProjectCard.jsx'

function Projects(){
    return (
        <section>
            <section className="projects-section">
                        <h2>Projects</h2>
                            <ProjectCard></ProjectCard>
                        <div className="cards-container">
                        </div>
                    </section>
        </section>
    )
}

export default Projects