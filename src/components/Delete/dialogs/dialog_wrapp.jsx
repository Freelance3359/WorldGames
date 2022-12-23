import React from 'react';
import Modal from 'react-bootstrap/Modal';


function DialogWrapp(props) {
    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="example-custom-modal-styling-title"
                size="xl"
                centered
            >
                <Modal.Header closeButton className='DialogWrapp_tital'>
                    <Modal.Title id="example-custom-modal-styling-title" >
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='DialogWrapp_body'>
                    <p>
                        {props.body}
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DialogWrapp