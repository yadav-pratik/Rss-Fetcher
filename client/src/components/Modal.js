import React from "react"
import Register from "./user/Register"

import { Modal } from "react-bootstrap"

const ModalComp = (props) => {
    return (
        <Modal show={true} 
        // onHide={handleEditToggle}
        >
            <Modal.Header closeButton>
                <Modal.Title>Title</Modal.Title>
                
            </Modal.Header>
            
            <Modal.Body> 
                <Register />
                <button onClick={()=>{handleEditToggle()}}>Cancel</button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalComp