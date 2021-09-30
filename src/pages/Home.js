import React from 'react'
import Hero from '../components/Hero'
import PopularRestaurants from '../components/PopularRestaurants'
import Section2 from '../components/Section2'


const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <PopularRestaurants/>
            <Section2/>
        </div>
    )
}

export default Home
