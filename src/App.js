import { useState } from 'react';
import './App.css';
import FileUploadModal from './components/FileUploadModal';
import Student from './components/Login/Student';

function App() {

  const [isFileUploadModalOpen,setFileUploadModalOpen] = useState(false);

  function handleClose(){
    setFileUploadModalOpen(!isFileUploadModalOpen)
  }

  return (
    <div className="App">
      {/* <Student/> */}
      <button onClick={handleClose}>Open File Model</button>
      <FileUploadModal isOpen={isFileUploadModalOpen} onClose={handleClose}/>
    </div>
  );
}

export default App;
