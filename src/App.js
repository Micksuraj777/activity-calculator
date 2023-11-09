import { useState } from 'react';
import './App.css';
import FileUploadModal from './components/popup/FileUploadModal';
import Faculty from './components/faculty/faculty';
import Table from './components/table/Table'
function App() {

  const [isFileUploadModalOpen,setFileUploadModalOpen] = useState(false);

  function handleClose(){
    setFileUploadModalOpen(!isFileUploadModalOpen)
  }

  return (
    <div className="App">
      <Faculty/>
      {/* <button onClick={handleClose}>Open File Model</button>
      <FileUploadModal isOpen={isFileUploadModalOpen} onClose={handleClose}/> */}
      <Table/>
    </div>
  );
}

export default App;
