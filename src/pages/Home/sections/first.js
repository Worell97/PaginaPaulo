import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imagem1 from '../../../assets/imagemFundo1-1080.jpg';
import Imagem2 from '../../../assets/imagemFundo2-1080.jpg';
import Imagem3 from '../../../assets/imagemFundo3-1080.jpg';

const FirstSection = props => {
    return(
        <section className='apresentacao'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Imagem1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Imagem2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Imagem3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>        
    );
} 

export default FirstSection;