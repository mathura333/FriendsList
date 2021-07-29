import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import AddAndSearchBox from './AddAndSerchBox';
import FriendsCard from './FriendsCard';
import './FriendsList.css';
import Header from './Header';
import PaginationBar from './PaginationBar';

const friendsList = [
  {
    id: nanoid(5),
    name: 'Alfreds Futterkiste',
    isFav: false,
  },
  {
    id: nanoid(5),
    name: 'Ernst Handel',
    isFav: true,
  },
  {
    id: nanoid(5),
    name: 'Island Trading',
    isFav: true,
  },
  {
    id: nanoid(5),
    name: 'Shivangi',
    isFav: false,
  },
];

const FriendsList = () => {
  const [allFriendsList, setAllFriendsList] = useState(friendsList);
  const [filter, setFilter] = useState(null);
  const [activePage, setActivePage] = useState(0);

  const onSearchBoxChange = (e) => {
    setFilter(e.target.value);
  };

  const addFriend = () => {
    setAllFriendsList((prev) => [
      ...prev,
      {
        id: nanoid(5),
        name: filter,
        isFav: false,
      },
    ]);
    setFilter('')
  };

  return (
    <div className="friendsList">
      <Header />
      <AddAndSearchBox onChange={onSearchBoxChange} addFriend={addFriend} filter={filter}/>
      <FriendsCard
        activePage={activePage}
        allFriendsList={allFriendsList}
        addFriend={addFriend}
        filter={filter}
        setAllFriendsList={setAllFriendsList}
      />
      {!filter && (
        <PaginationBar
          list={allFriendsList}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}
    </div>
  );
};

export default FriendsList;
