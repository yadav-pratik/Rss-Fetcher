import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {Navbar, Container, Button} from 'react-bootstrap'

import { doLoginToggle } from "../actions/loginToggleActions"
import { toggleIsLogged } from "../actions/isLoggedActions"
import { startGetUser, logoutUser } from "../actions/userActions"

import { handleLogout } from "../sweetAlerts/sweetAlerts"

const NavBarComp = (props) => {
    const dispatch = useDispatch()

    const isLogged = useSelector((state)=>{
        return state.isLogged
    })

    const user = useSelector((state)=> {
        return state.user
    })

    useEffect(()=>{
        if(isLogged){
            dispatch(startGetUser())
        }
    }, [isLogged, dispatch])

    const handleLogoutClick = () => {
        const logoutAndDispatch = () => {
            localStorage.removeItem('token')
            dispatch(toggleIsLogged())
            dispatch(logoutUser())
        }

        handleLogout(logoutAndDispatch)
    }

    return (
        <div className="sticky-top">
            <Navbar 
                bg="primary" 
                variant="dark"
            >
                <Container>
                <Navbar.Brand as={Link} to="/">RSS Fetcher</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {isLogged ? (
                            <>
                                <Navbar.Text>
                                    Signed in as: {user.name}
                                </Navbar.Text>
                                <Button variant="dark" onClick={handleLogoutClick}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <Navbar.Text>
                                    Welcome User
                                </Navbar.Text>
                                <Button variant="dark" onClick={()=>{dispatch(doLoginToggle())}}>Sign In</Button>
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