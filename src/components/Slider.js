import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../images/food-image1.jpg'
import Image2 from '../images/food-image2.jpg'
import Image3 from '../images/food-image3.jpg'
import Image4 from '../images/food-image4.jpg'
const Slider = () => {
    return (
        <div className="carousel-wrapper">
            <Carousel
                showIndicators={false}
                showStatus={false}
            >
                    <div className="cards-wrapper">
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
                        
                    <div className="card-container">
                            <div className="card-image-container">
                                <img className="image mx-2" src={Image2} alt="project" />
                        </div>
                        <div className="card-body">
                            <div className="card-name">Restaurant Name 2</div>
                            <div className="card-item">description</div>
                            <div className="card-item">description 2</div>
                    </div>
                        </div>
                        
                    <div className="card-container">
                            <div className="card-image-container">
                                <img className="image mx-2" src={Image3} alt="project" />
                        </div>
                        <div className="card-body">
                            <div className="card-name">Restaurant Name 3</div>
                            <div className="card-item">description</div>
                            <div className="card-item">description 2</div>
                    </div>
                        </div>
                        
                    <div className="card-container">
                            <div className="card-image-container">
                                <img className="image mx-2" src={Image4} alt="project" />
                        </div>
                        <div className="card-body">
                            <div className="card-name">Restaurant Name 4</div>
                            <div className="card-item">description</div>
                            <div className="card-item">description 2</div>
                        </div>
                        </div>
                        
                </div>
                 <div className="cards-wrapper">
                        <div className="card-container">
                            <div className="card-image-container">
                                <img className="image mx-2" src={Image1} alt="project" />
                        </div>
                        <div className="card-body">
                            <div className="card-name">Restaurant Name 5</div>
                            <div className="card-item">description</div>
                            <div className="card-item">description 2</div>
                    </div>
                        </div>
                        
                    <div className="card-container">
                            <div className="card-image-container">
                                <img className="image mx-2" src={Image2} alt="project" />
                        </div>
                        <div className="card-body">
                            <div className="card-name">Restaurant Name 6</div>
                            <div className="card-item">description</div>
                            <div className="card-item">description 2</div>
                    </div>
                        </div>
                        
                    <div className="card-container">
                            <div className="card-image-container">
                                <img className="image mx-2" src={Image3} alt="project" />
                        </div>
                        <div className="card-body">
                            <div className="card-name">Restaurant Name 7</div>
                            <div className="card-item">description</div>
                            <div className="card-item">description 2</div>
                    </div>
                        </div>
                        
                    <div className="card-container">
                            <div className="card-image-container">
                                <img className="image mx-2" src={Image4} alt="project" />
                        </div>
                        <div className="card-body">
                            <div className="card-name">Restaurant Name 8</div>
                            <div className="card-item">description</div>
                            <div className="card-item">description 2</div>
                        </div>
                        </div>
                        
                    </div>
                </Carousel> 
            </div>
    )
}

export default Slider
