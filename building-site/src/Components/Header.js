import React, { Component } from "react";
import { Button, Container, Form, FormControl, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import logo from './Dismantling.png'
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export default class Header extends Component {
    render() {
        
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img 
                            src={logo}
                            height="70"
                            width="70"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <NavLink href="/" > Главная страница </NavLink>
                            <NavLink href="/about" > О нас </NavLink>
                            <NavLink href="/feedback" > Отзывы </NavLink>
                            <NavLink href="/contacts" > Контакты </NavLink>
                        </Nav>
                    </NavbarCollapse>
                    <Form inline >
                            <FormControl
                                type="text"
                                placeholder="Поиск"
                                className="mr-sm-2"
                            />
                        </Form>
                        <Button variant="outline-info">Найти</Button>
                </Container>
            </Navbar>
          );
    }
}