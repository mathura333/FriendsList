import React from 'react';
import './AddAndSearchBox.css';

const AddAndSearchBox = ({ onChange = () => {}, addFriend = () => {} }) => {
  return (
    <input
      type="text"
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          addFriend();
        }
      }}
      className="addAndSearchBox"
      onChange={onChange}
      placeholder="Enter your friend's name"
    />
  );
};

export default AddAndSearchBox;
