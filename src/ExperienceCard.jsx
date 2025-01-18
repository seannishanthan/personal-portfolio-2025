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
            
            {/* <p className="description">{props.description}</p> */}

            <ul className="description">
                {props.description.map((listItem, i) => (<li key={i}>{listItem}</li>))}
            </ul>
        </div>
    )
}

ExperienceCard.PropTypes = {
    image : PropTypes.string,
    role: PropTypes.string,
    org: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.array,
}

ExperienceCard.defaultProps = {
    image : "https://placehold.co/400",
    role: "Role",
    org: "Organization",
    date: "Jan. 2024 - Apr. 2024",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi adipisci non eaque incidunt quia illum rem porro voluptatem in provident cupiditate voluptas repellendus atque et est architecto praesentium, magnam nihil!"
}

export default ExperienceCard