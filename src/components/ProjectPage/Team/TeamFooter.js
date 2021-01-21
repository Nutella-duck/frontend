import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import '../Run/Run.css';
const TeamFooter = () => {
  const [select, setSelect] = useState(1);
  const handleClick = (id) => {
    setSelect(id);
  };

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === select}
        onClick={() => handleClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination className="RunFooter">{items}</Pagination>;
};
export default TeamFooter;
