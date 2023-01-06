import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "react-bootstrap"

import Login from "./user/Login"
import Register from "./user/Register"

import { doLoginToggle } from "../actions/loginToggleActions"
import { doRegisterToggle } from "../actions/registerToggleAction"

const ModalComp = (props) => {
    const dispatch = useDispatch()

    const loginToggle = useSelector((state)=> {
        return state.loginToggle
    })

    const registerToggle = useSelector((state)=>{
        return state.registerToggle
    })

    const handleModalHide = () => {
        if(loginToggle){
            dispatch(doLoginToggle())
        } else if(registerToggle){
            dispatch(doRegisterToggle())
        }
    }

    return (
        <Modal 
            show={loginToggle || registerToggle} 
            onHide={handleModalHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {loginToggle ? 'Login to your Account' : registerToggle && 'Register with us'}
                </Modal.Title>
                
            </Modal.Header>
            
            <Modal.Body> 
                {loginToggle ? <Login /> : registerToggle && <Register/>}
            </Modal.Body>
        </Modal>
    )
}

export default ModalComp