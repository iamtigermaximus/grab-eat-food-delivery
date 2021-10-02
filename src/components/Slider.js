import React from 'react'
import Carousel from 'react-elastic-carousel'
import data from '../data/db.json'
import SingleCard from './SingleCard'


const Slider = () => {
    const breakPoints = [
        
        { width: 480, itemsToShow: 2},
        { width: 576, itemsToShow: 4 },
        
      ]
    
    return (
        <Carousel breakPoints={breakPoints} showArrows={false} pagination={false}>
            {data.popular.map((pop) => (
                <SingleCard
                    id={pop.id}
                    name={pop.name}
                    description={pop.description}
                />
            ))}
       </Carousel>
        
    )
}

export default Slider

