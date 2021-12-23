import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/topbg1.jpg';
import banner2 from '../../../Images/topbg2.jpg';
import banner3 from '../../../Images/topbg3.png';


const Header = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Fentail</h3>
                        <p>American Red Fentail</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Homer</h3>
                        <p>Homer Racing Pigeons</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Frillback</h3>
                        <p>White Frillback</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Header;