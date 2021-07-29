import React from 'react';
import './PaginationBar.css';

const PaginationBar = ({ list, activePage, setActivePage }) => {
  const noOfPage = Math.ceil(list.length / 4);
  return (
    <div className="pagination">
      <button
        disabled={activePage === 0}
        onClick={() => setActivePage((prev) => prev - 1)}>
        &laquo;
      </button>
      {[...Array(noOfPage).keys()].map((value) => (
        <button
          className={activePage === value ? 'active' : ''}
          onClick={() => setActivePage(value)}>
          {value + 1}
        </button>
      ))}
      <button
        disabled={activePage === noOfPage - 1}
        onClick={() => setActivePage((prev) => prev + 1)}>
        &raquo;
      </button>
    </div>
  );
};

export default PaginationBar;
