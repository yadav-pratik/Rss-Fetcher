import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "react-bootstrap"

import Login from "./user/Login"

import { doLoginToggle } from "../actions/loginToggleActions"

const ModalComp = (props) => {
    const dispatch = useDispatch()

    const loginToggle = useSelector((state)=> {
        return state.loginToggle
    })

    return (
        <Modal show={loginToggle} 
        onHide={()=>{dispatch(doLoginToggle())}}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {loginToggle ? 'Login to your Account' : 'Register with us'}
                </Modal.Title>
                
            </Modal.Header>
            
            <Modal.Body> 
                {loginToggle ? <Login /> : null}
            </Modal.Body>
        </Modal>
    )
}

export default ModalComp