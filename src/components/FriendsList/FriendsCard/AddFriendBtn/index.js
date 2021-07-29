import React from 'react';
import './AddFriendBtn.css'

const AddFriendBtn = ({ addFriend = () => {} }) => {
  return (
    <div>
      <button className="add-friend-btn" onClick={addFriend}>
        Add new friend
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
};

export default AddFriendBtn;
