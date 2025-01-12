import React from 'react'
import PropTypes from 'prop-types';

function ProjectCard(props){
    return (
        <div className='card'>
            <div className='info'>
                <div className='project-title'>
                    <h2>{props.title}</h2>
                </div>
                <div className='project-description'>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className='img-container'>
                <img src={props.image} alt="" />
            </div>
            
        </div>
    )
}

ProjectCard.PropTypes = {
    image : PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

ProjectCard.defaultProps = {
    image : "https://placehold.co/400",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing eliteeee Cum quis alias sapiente vitae! Eum ex tempora sequi quibusdam est, porro quaerat ea doloremque culpa expedita quae quidem rem aliquid. Architecto.",
}

export default ProjectCard