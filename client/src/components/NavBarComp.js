import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import {Navbar, Container, Button} from 'react-bootstrap'

const NavBarComp = (props) => {
    const isLogged = useSelector((state)=>{
        return state.isLogged
    })
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
                    {isLogged ? (
                            <>
                                <Navbar.Text>
                                    Signed in as: Mark Otto
                                </Navbar.Text>
                                <Button variant="dark">Logout</Button>
                            </>
                        ) : (
                            <>
                                <Navbar.Text>
                                    Welcome User
                                </Navbar.Text>
                                <Button variant="dark">Sign In</Button>
                            </>
                        )
                    }
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarComp