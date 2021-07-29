import React from 'react';

const DeleteBtn = ({ id, onDelete = () => {} }) => (
  <button onClick={() => onDelete(id)} className="favBtn">
    <i className="fa fa-trash action-btn"></i>
  </button>
);

export default DeleteBtn;
