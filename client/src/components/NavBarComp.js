import React from "react"
import { Link } from "react-router-dom"

import {Navbar, Container, Button} from 'react-bootstrap'

const NavBarComp = (props) => {
    return (
        <div>
            <Navbar 
                bg="primary" 
                variant="dark"
                sticky="top"
            >
                <Container>
                <Navbar.Brand as={Link} to="/">RSS Fetcher</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: Mark Otto
                    </Navbar.Text>
                    <Button variant="dark">Logout</Button>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarComp