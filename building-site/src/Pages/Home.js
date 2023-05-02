import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Container, CardDeck } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                
                <CarouselBox />

                <Container>
                    <h2 className='text-center m-2'>Наши контакты:</h2>
                    <p className='text-center'>
                        111111, г. Москва, ул. Фронтендерская, д. 1
                    </p>
                    <Card>
                        <Card.Body className='text-center m-0'> 
                            <Card.Title>Вызвать бригаду или уточнить подробности можно по номерам телефонов:</Card.Title>
                            <Card.Text>
                                Тел.: +1 (111) 111-11-11, +2 (222) 222-22-22<br/>
                                Факс: +3 (333) 333-33-33
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>


            </>
        );
    }
}
