import React from 'react'
import Hero from '../components/Hero'
import PopularRestaurants from '../components/PopularRestaurants'
import Category from '../components/Category'


const Home = () => {
    return (
        <div className="home-page">
                <Hero />
                <PopularRestaurants />
                <Category/>
        </div>
    )
}

export default Home
