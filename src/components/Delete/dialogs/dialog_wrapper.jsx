import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from 'react-bootstrap/Modal';


function DialogWrapper(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.body}
                </p>
            </Modal.Body>
            <Modal.Footer>

                {props.footer}
            </Modal.Footer>
        </Modal >
    );
}

export default DialogWrapper