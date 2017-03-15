import React, { Component } from 'react';
import { Link } from 'react-router';
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Invoice App</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                <Nav>
                    <LinkContainer to='/invoices'>
                        <NavItem>Invoices</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/products'>
                        <NavItem>Products</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/customers'>
                        <NavItem>Customers</NavItem>
                    </LinkContainer>
                </Nav>
                </Navbar>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        )
    }
}
