import React from 'react';

const DeleteBtn = ({ id, onDelete = () => {} }) => (
  <button onClick={() => onDelete(id)} className="favBtn">
    <i className="fa fa-trash del-btn"></i>
  </button>
);

export default DeleteBtn;
