import React from 'react'
import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'


const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Section1/>
            <Section2/>
        </div>
    )
}

export default Home
