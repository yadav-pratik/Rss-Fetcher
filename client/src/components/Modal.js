import React from "react"

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