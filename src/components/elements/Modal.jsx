import React, { useRef } from 'react'

import CloseButton from '../../assets/images/close_button.svg'

import "./Modal.css"

function Modal({ children }) {
    const modelRef = useRef(null)
    return (
        <dialog ref={modelRef} open>
            <img src={CloseButton} alt="close" id='close-button' />
            {children}
        </dialog>
    )
}

export default Modal