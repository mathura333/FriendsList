import React from 'react';
import AddFriendBtn from './AddFriendBtn';
import './FriendsCard.css';
import SoloCard from './SoloCard';

const FriendsTable = ({
  allFriendsList,
  setAllFriendsList,
  filter,
  addFriend,
  activePage,
}) => {
  const comparator = (firstVal, secondVal) => {
    if (firstVal.isFav && !secondVal.isFav) {
      return -1;
    } else if (!firstVal.isFav && secondVal.isFav) {
      return 1;
    }
    return 0;
  };

  const toggleFav = (cardId) => {
    setAllFriendsList((prev) =>
      prev.map((friend) => {
        if (friend.id === cardId) {
          return {
            ...friend,
            isFav: !friend.isFav,
          };
        }
        return friend;
      })
    );
  };

  const onDelete = (cardId) => {
    setAllFriendsList((prev) => prev.filter(({ id }) => id !== cardId));
  };

  return (
    <div className="friendsCard">
      {allFriendsList
        .sort(comparator)
        .filter(({ name }, index) =>
          filter
            ? name.toLowerCase().includes(filter.toLowerCase())
            : true && index >= 4 * activePage && index < 4 * (activePage + 1)
        )
        .map(({ name, isFav, id }) => (
          <SoloCard
            key={id}
            name={name}
            id={id}
            isFav={isFav}
            toggleFav={toggleFav}
            onDelete={onDelete}
          />
        ))}
      {filter && <AddFriendBtn addFriend={addFriend} />}
    </div>
  );
};

export default FriendsTable;
