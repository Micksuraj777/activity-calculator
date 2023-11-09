import React from 'react'


import DropDown from '../elements/DropDown.jsx'
import Modal from "../elements/Modal.jsx"

import AddButton from '../assets/images/add_button.svg'

import './FileUploadModal.css'

function FileUploadModel({isOpen,onClose}) {

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <section>
          <h1>Upload files</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="drop-files">
              <h4>Drop your files here!</h4>
              <p className='click-here'>or click</p>
            </div>
            <div id="add-files">
              <img className='add-icon' src={AddButton} alt="add_icon" />
              {/* <input type="file" name="add_file" /> */}
              <p>Add files</p>
            </div>

            <div className="options">
              <h4>OPTIONS</h4>
              <hr />

              <div className="options-wrapper">
                <DropDown value="Category" />
                <DropDown value="Activity Name" />
                <DropDown value="Levels" />
                <DropDown value="Points" items={[1, 2, 3, 4, 5, 6, 9]} />
              </div>
            </div>
            <div className="form-footer">
              <div className="footer-left">
                <button type='submit'>Upload files</button>
                <span>or</span>
                <a href="#">Cancel</a>
              </div>
              <button onClick={onClose}>Done</button>
            </div>
          </form>
        </section>
      </Modal>
    </>
  )
}




export default FileUploadModel