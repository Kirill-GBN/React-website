import React, { Component } from "react";
import { Button, Container, Form, FormControl, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import logo from './Dismantling.png'
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Feedback from "../Pages/Feedback";
import Contacts from "../Pages/Contacts";

export default class Header extends Component {
    render() {

        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand href="/">
                            <img
                                src={logo}
                                height="50"
                                width="50"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />Демонтаж зданий
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav" />
                        <NavbarCollapse id="responsive-navbar-nav" >
                            <Nav className="me-auto">
                                <NavLink href="/" > Главная страница </NavLink>
                                <NavLink href="/about" > О нас </NavLink>
                                <NavLink href="/feedback" > Отзывы </NavLink>
                                <NavLink href="/contacts" > Контакты </NavLink>
                            </Nav>
                            <Form className="inline">
                                <FormControl
                                    type="text"
                                    placeholder="Поиск"
                                    className="mr-sm-2"
                                />
                            </Form>
                            <Button variant="outline-info">Найти</Button>
                        </NavbarCollapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/feedback" element={<Feedback/>} />
                        <Route path="/contacts" element={<Contacts/>} />
                    </Routes>
                </Router>
            </>
        );
    }
}