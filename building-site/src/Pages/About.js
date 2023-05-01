import React, { Component } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container className='mt-4'>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">О Компании</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Команда</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Работы</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src='https://s3-eu-central-1.amazonaws.com/news.pr-cy.ru/535312/7582.png' />
                                    <p>
                                        Наша компания существует с 2008 года.
                                        За всё время работы нам удалось достичь значительных успехов в сфере демонтажных работ.
                                        Наша компания работает по всей России.
                                        Из изветных клиентов и заказчиков такие компании как ПАО "Сбербанк", АО "Газпром", ПАО "Татнефть" и другие.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src='https://www.kharkov-stroy.com.ua/wp-content/uploads/2016/03/brigada-1.jpg' />
                                    <p>
                                        Наша команда специалистов состоит из профессионалов высокой квалицфикации.
                                        В наличии специалисты разного профиля:
                                        машинист крана, машинист экскаватора, инженер-проектировщик, взрывотехник, рабочий-демонтажник, грузчик, разнорабочий и другие специалисты.
                                        Все специалисты прошли соответсвующее обучение и обладают большим практическим опытом в своей сфере.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src='https://imgp24.ru/i/u_items/16198933942817.jpg' />
                                    <ul>Мы занимаемся сделующими работами и услугами:
                                        <li>Снос зданий и сооружений</li>
                                        <li>Демонтаж строительных контрукций</li>
                                        <li>Уборка и вывоз строительного мусора</li>
                                        <li>Проектирование и реализация иных строительных работ</li>
                                    </ul>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}