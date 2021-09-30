import React from 'react'
import Image9 from '../images/food-image9.jpg'

const CategoryCard = (props) => {
    return (
        <div className="category-card-container " key={props.id}>
            <div className="category-image-container">
                <img className="category-image mx-2" src={Image9} alt="project" />
            </div>
            <div className="category-body">
                <div className="category-name">{props.name}</div>
            </div>
        </div>
    )
}

export default CategoryCard
