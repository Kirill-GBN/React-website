import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Feedback extends Component {
    render() {
        return (
            <Container style={{ width: '400px' }}>
                <h1 className='text-center'>Контакты для обратной связи</h1>

                <Form method='POST'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Введите Ваш адрес электронной почты:</Form.Label>
                        <Form.Control type="email" placeholder="Ваш адрес эл. почты" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Введите Ваш номер телефона:</Form.Label>
                        <Form.Control type="text" placeholder="+7 (9**) ***-**-**" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Согласие на обработку персональных данных" />
                    </Form.Group>

                    <Button variant='primary' type='submit'>Отправить</Button>

                </Form>
            </Container>
        );
    }
}
