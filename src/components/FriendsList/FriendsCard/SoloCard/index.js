import React from 'react';
import DeleteBtn from './DeleteBtn';
import FavBtn from './FavBtn';
import FriendName from './FriendName';
import './SoloCard.css';

const SoloCard = ({ name, isFav, id, toggleFav, onDelete }) => {
  return (
    <div className="soloCard">
      <FriendName name={name} />
      <div className="soloCardActions">
        <FavBtn isFav={isFav} toggleFav={toggleFav} id={id} />
        <DeleteBtn id={id} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default SoloCard;
