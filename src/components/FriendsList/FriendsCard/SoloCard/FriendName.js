import React from 'react';
import './SoloCard.css';

const FriendName = ({ name }) => {
  return (
    <div className="frd-name">
      <div>{name}</div>
      <div className="is-frd-text">is your friend</div>
    </div>
  );
};

export default FriendName;
