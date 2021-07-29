import React from 'react';
import './AddAndSearchBox.css';

const AddAndSearchBox = ({
  onChange = () => {},
  addFriend = () => {},
  filter,
}) => {
  return (
    <input
      type="text"
      onKeyUp={(e) => {
        console.log(e);
        if (e.keyCode === 13) {
          e.preventDefault();
          addFriend();
        }
      }}
      value={filter}
      className="addAndSearchBox"
      onChange={onChange}
      placeholder="Enter your friend's name"
    />
  );
};

export default AddAndSearchBox;
