import React from 'react'
import Image1 from '../images/food-image1.jpg'

const SingleCard = (props) => {
    return (
        <div className="card-container" key={props.id}>
            <div className="card-image-container">
                <img className="image mx-2" src={Image1} alt="project" />
            </div>
            <div className="card-body">
                <div className="card-name">{props.name}</div>
                <div className="card-item">{props.description}</div>
                <div className="card-item">{props.description}</div>
            </div>
        </div>
    )
}

export default SingleCard
