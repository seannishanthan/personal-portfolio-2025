import React from 'react'
import ExperienceCard from './ExperienceCard.jsx'

function Experience(){

    const img1 = "qoherent-logo.png"
    const img2 = "utfr-img.png"

    return (
        <section className="experience-section">
            <h2>Experience</h2>

            <div className="cards-container">
                <ExperienceCard image={img1} role={"Applications Engineering Intern"} org={"Qoherent"} date={"May 2024 - Aug 2024"}/>
                <ExperienceCard image={img2} role={"Firmware Team Member"} org={"University of Toronto - Formula Racing Team"} date={"Sep 2023 - April 2024"}/>

            </div>
        </section>
    )
}

export default Experience