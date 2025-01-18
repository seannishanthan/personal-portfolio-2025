import React from 'react'
import ExperienceCard from './ExperienceCard.jsx'

function Experience(){

    const img1 = "qoherent-logo.png"
    const desc1 = ["Developed a dynamic GUI app to train a spectrogram segmentation model using Python, PyTorch and Lightning", "Implemented augmentations + preprocessing functions for IQ sample datasets to increase model performance", "Developed functions with h5py for efficient HDF5 dataset manipulation", "Automated project build verification + unit test coverage in Github workflows using YAML to reduce pull request review time"]

    const img2 = "utfr-img.png"
    const desc2 = ["Attended weekly meetings to communicate concerns with team members and leads", "Wrote documentation for the car’s rear controller to help onboard new members", "Commented and Implemented C++ functions for the car's temperature library"]


    return (
        <section className="experience-section" id="experience">
            <h2>Experience</h2>

            <div className="cards-container">
                <ExperienceCard image={img1} role={"Applications Engineering Intern"} org={"Qoherent"} date={"May 2024 - Aug 2024"} description={desc1}/>
                <ExperienceCard image={img2} role={"Firmware Team Member"} org={"University of Toronto - Formula Racing Team"} date={"Sep 2023 - April 2024"} description={desc2}/>

            </div>
        </section>
    )
}

export default Experience