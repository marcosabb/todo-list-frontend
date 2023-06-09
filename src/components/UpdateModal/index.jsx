import './styles.css';
import { HiPencilAlt } from "react-icons/hi";
import { useState } from "react";

const UpdateModal = ({ toggleModal, idToUpdate, handleUpdateTask }) => {
  const [newDescription, setNewDescription] = useState('');

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewDescription(event.target.value);
  }

  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="font">Edit Task</h2>
            <i>
              <HiPencilAlt className="modal-icon-update"/>
            </i>
          
        </div>
        <input type="text" className="task-update-input" onChange={handleInputChange}/>
        
        <div className="buttons-update">
          <button onClick={toggleModal} className="button cancel font">
            Cancel
          </button>
          <button className="button update font" onClick={() => handleUpdateTask(idToUpdate, newDescription)}>      
            Update
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default UpdateModal;