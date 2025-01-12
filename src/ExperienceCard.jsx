import React from 'react'
import PropTypes from 'prop-types';

function ExperienceCard(props){
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt="" />
            </div>
            <div className="info">
                <div className="role-info">
                    <h2>{props.role}</h2>
                    <h3>{props.org}</h3>
                </div>
                <div className="date-info">
                    <h4>{props.date}</h4>
                </div>
            </div>
            
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio dolor molestias libero, dolore, doloremque quo, perferendis nostrum maxime aliquid laboriosam atque labore rem laudantium nulla ut ad perspiciatis asperiores assumenda.</p>
        </div>
    )
}

ExperienceCard.PropTypes = {
    image : PropTypes.string,
    role: PropTypes.string,
    org: PropTypes.string,
    date: PropTypes.string,
}

ExperienceCard.defaultProps = {
    image : "https://via.placeholder.com/150",
    role: "Role",
    org: "Organization",
    date: "Jan. 2024 - Apr. 2024",
}

export default ExperienceCard