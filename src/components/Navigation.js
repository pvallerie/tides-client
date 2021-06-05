import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedNav = (
    <Fragment>
        <Nav.Link href='#/sign-out'>Sign Out</Nav.Link>
    </Fragment>
)

const unauthenticatedNav = (
    <Fragment>
        <Nav.Link href="#/sign-up">Sign Up</Nav.Link>
        <Nav.Link href="#/sign-in">Sign In</Nav.Link>
    </Fragment>
)

const Navigation = ({ user }) => {
    return (
        <Navbar>
            <Navbar.Brand>
                Tides
            </Navbar.Brand>
            <Nav>
                { user ? authenticatedNav : unauthenticatedNav }
            </Nav>
        </Navbar>
    )
}

export default Navigation