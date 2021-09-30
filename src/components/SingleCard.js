import React from 'react'
import Image1 from '../images/food-image1.jpg'

const SingleCard = () => {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img className="image mx-2" src={Image1} alt="project" />
            </div>
            <div className="card-body">
                <div className="card-name">Restaurant Name 1</div>
                <div className="card-item">description</div>
                <div className="card-item">description 2</div>
            </div>
        </div>
    )
}

export default SingleCard
