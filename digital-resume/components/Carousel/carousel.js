import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    
    return (
    <div>
        <p>Here some projects i have built in order to showcase my programming ability</p>
        <Slider {...settings}>
                <div>
                    <h3>Project 1</h3>
                    <img src="project1.jpg" alt="Project 1" />
                </div>
                <div>
                    <h3>Project 2</h3>
                    <img src="project2.jpg" alt="Project 2" />
                </div>
                {/* Add more slides as needed */}
            </Slider>
    </div>
    )
    
    
}
export default Carousel;