import React from 'react'
import SingleCard from './SingleCard'

const CardGroup = () => {
    return (
        <div className="cards-wrapper">
            <SingleCard />
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
        </div>
    )
}

export default CardGroup
