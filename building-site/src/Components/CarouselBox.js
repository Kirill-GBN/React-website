import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import demolition1 from '../assets/demolition1.jpg';
import demolition2 from '../assets/demolition2.jpg';
import demolition3 from '../assets/demolition3.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ demolition1 }
                        alt='DemolitionOne'
                    />
                    <Carousel.Caption>
                        <h3>Гарантия качества</h3>
                        <p>Работы "под ключ". Доверьтесь профессионалам.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ demolition2 }
                        alt='DemolitionTwo'
                    />
                    <Carousel.Caption>
                        <h3>15 лет на рынке услуг</h3>
                        <p>Многолетний опыт работы специалистов. Найдем подход к каждому клиенту.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ demolition3 }
                        alt='DemolitionThree'
                    />
                    <Carousel.Caption>
                        <h3>Международные стандарты</h3>
                        <p>Работаем только по проверенным и утвержденным технологиям. Главное - безопасность.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}