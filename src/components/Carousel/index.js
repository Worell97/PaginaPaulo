import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imagem1 from '../../assets/imagemFundo1-1080.jpg';
import Imagem2 from '../../assets/imagemFundo2-1080.jpg';
import Imagem3 from '../../assets/imagemFundo3-1080.jpg';
import './styles.css';

function CarouselCustom (){
    return(
        <Carousel style={{maxHeight: 'calc(95vh - var(--bodyPaddingTop))', padding: '0.5rem'}}>
            <Carousel.Item style={{maxHeight: 'calc(95vh - var(--bodyPaddingTop))', padding: '0.5rem'}}>
                <img 
                className="ImgCarousel"
                src={Imagem1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{maxHeight: 'calc(95vh - var(--bodyPaddingTop))', padding: '0.5rem'}}>
                <img
                className="ImgCarousel"
                src={Imagem2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{maxHeight: 'calc(95vh - var(--bodyPaddingTop))', padding: '0.5rem'}}>
                <img
                className="ImgCarousel"
                src={Imagem3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item style={{maxHeight: 'calc(95vh - var(--bodyPaddingTop))', padding: '0.5rem'}}>
                <img
                className="ImgCarousel"
                src={Imagem1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
} 

export default CarouselCustom;