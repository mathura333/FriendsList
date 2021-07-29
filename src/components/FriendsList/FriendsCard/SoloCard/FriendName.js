import React from 'react';
import './SoloCard.css';

const FriendName = ({ name }) => {
  return (
    <div>
      <div>{name}</div>
      <div>is your friend</div>
    </div>
  );
};

export default FriendName;
