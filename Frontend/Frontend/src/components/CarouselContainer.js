import React from 'react';
import { Carousel } from 'react-bootstrap';


// import image1 from './../assets/images/1.jpg';
// import image2 from './../assets/images/2.jpg';
// import image3 from './../assets/images/3.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={"1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sunburn Arena ft YELLOW CLAW</h3>
          <p>Pune</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={"2.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Rambo Circus</h3>
          <p>Mumbai</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={"3.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Madhur Sharma Live</h3>
          <p>Pune</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;