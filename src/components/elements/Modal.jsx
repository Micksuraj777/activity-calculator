import React, { useRef,useEffect,useState } from 'react'

import CloseButton from '../../assets/images/close_button.svg'

import "./Modal.css"

function Modal({ isOpen, onClose, children }) {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef(null)

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    return (
        <dialog ref={modalRef}>
            <img src={CloseButton} alt="close" id='close-button' onClick={handleCloseModal}/>
            {children}
        </dialog>
    )
}

export default Modal