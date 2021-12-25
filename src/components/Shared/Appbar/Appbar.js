import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Appbar.css';

const Appbar = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar className="bg" bg="none" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">Birdy</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className="link" to="/home">Home</NavLink>
                        <NavLink className="link" to="/addServices">AddServices</NavLink>
                        <NavLink className="link" to="myOrders">My Orders</NavLink>
                        <NavLink className="link" to="/allProducts">AllProducts</NavLink>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <NavLink className="link" to="/login">Login</NavLink>}
                        <Navbar.Text>
                            <a className="link" href="#login">  {user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Appbar;