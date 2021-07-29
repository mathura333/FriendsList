import React from 'react'
import './DeleteDialog.css'

const DeleteDialog= ({onDelete, onClose=()=>{}, friend}) =>{
  return (
    <div id="myModal" className="modal">
  <div className="modal-content">
    <button onClick={onClose} className="close">&times;</button>
    <p>Are you sure to delete {friend.name}</p>
    <div className="delete-dialog-btn-wrapper">
    <button className="delete-dialog-btn delete-btn" onClick={()=>{
      onDelete(friend.id)
      onClose()}}>Delete</button>
    <button className="delete-dialog-btn cancel-btn" onClick={onClose}>Cancel</button>
  </div>
  </div>
</div>
  )
}

export default DeleteDialog