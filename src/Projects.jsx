import React from 'react'
import ProjectCard from './ProjectCard.jsx'

function Projects(){

    const img1="/flpybird.jpg"
    const img2="/appstore.png"
    return (
        <section>
            <section className="projects-section">
                        <h2>Projects</h2>
                        <div className="cards-container">
                            <ProjectCard title={"Verilog Flappy Bird"} image={img1}></ProjectCard>
                            <ProjectCard title={"Java App Store"} image={img2}></ProjectCard>
                            <ProjectCard title={"Reversi"}></ProjectCard>
                        </div>
                    </section>
        </section>
    )
}

export default Projects