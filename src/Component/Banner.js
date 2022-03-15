import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
    return (
        <div className="container-fluid">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.propseva.com/wp-content/uploads/2018/02/revolution-slider-background-blue.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="caption">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.propseva.com/wp-content/uploads/2018/02/revolution-slider-background-blue.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <div className="caption">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.propseva.com/wp-content/uploads/2018/02/revolution-slider-background-blue.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <div className="caption">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default Banner;