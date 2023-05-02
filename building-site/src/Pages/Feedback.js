import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Feedback extends Component {
    render() {
        return (
            <Container style={{ width: '400px' }}>
                <h1 className='text-center m-4'>Контакты для обратной связи</h1>

                <Form method='POST'>
                    <Form.Group className='m-3' controlId="formBasicEmail">
                        <Form.Label>Введите Ваш адрес электронной почты:</Form.Label>
                        <Form.Control type="email" placeholder="Ваш адрес эл. почты" />
                    </Form.Group>

                    <Form.Group className='m-3' controlId="formBasicPhone">
                        <Form.Label>Введите Ваш номер телефона:</Form.Label>
                        <Form.Control type="text" placeholder="+7 (9**) ***-**-**" />
                    </Form.Group>

                    <Form.Group className='m-3' controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Согласие на обработку персональных данных" />
                        <Button variant='primary' type='submit'>Отправить</Button>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}
