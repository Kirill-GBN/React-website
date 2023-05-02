import React, { Component } from 'react';
import { Col, Container, Row, Card, Form, Button } from 'react-bootstrap';

export default class Response extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="7">
                        <Card className='mt-3'>
                            <img
                                width={120}
                                height={120}
                                className="mr-3"
                                src='https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-184330869.jpg'
                            />
                            <Card.Text>
                                <h5>Пользователь #1</h5>
                                <p className='mt-3'>
                                    Работы выполнены качественно и в срок. Остался доволен.
                                </p>
                            </Card.Text>
                        </Card>

                        <Card className='mt-3'>
                            <img
                                width={120}
                                height={120}
                                className="mr-3"
                                src='https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-184330869.jpg'
                            />
                            <Card.Text>
                                <h5>Пользователь #2</h5>
                                <p className='mt-2'>
                                    Обычная демонтажная компания. Ничего особенного в ней не нашел. Радует отношение к клиентам.
                                </p>
                            </Card.Text>
                        </Card>

                        <Card className='mt-3'>
                            <img
                                width={120}
                                height={120}
                                className="mr-2"
                                src='https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-184330869.jpg'
                            />
                            <Card.Text>
                                <h5>Пользователь #3</h5>
                                <p className='mt-2'>
                                    Хорошая компания. Буду всем рекомендовать.
                                </p>
                            </Card.Text>
                        </Card>

                    </Col>

                    <Col md="5">
                        <Form>
                            <Form.Group className='m-3' controlId="formBasicText">
                                <Form.Label>Напишите Ваш отзыв</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                                <Button className='mt-3' variant='primary' type='submit'>Отправить</Button>
                            </Form.Group>
                        </Form>
                    </Col>

                </Row>
            </Container>
        );
    }
}