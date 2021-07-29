import React from 'react';

const FavBtn = ({ isFav = false, toggleFav = () => {}, id }) => (
  <button onClick={() => toggleFav(id)} className="favBtn">
    <i className={isFav ? 'fa fa-star fav-star' : 'fa fa-star'}></i>
  </button>
);

export default FavBtn;
