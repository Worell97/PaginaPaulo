import React from 'react';
import './styles.css';
import PageDefault from '../../components/PageDefault';
import CarouselCustom from '../../components/Carousel';
import CardBox from '../../components/CardBox';
export default function Profile(){
    return(
        <PageDefault>
            <h1>Produtos</h1>            
            <CardBox/>
        </PageDefault>
    )
}