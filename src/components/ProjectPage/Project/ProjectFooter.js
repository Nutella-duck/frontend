import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import * as Actions from '../../../store/actions';
import { useDispatch } from 'react-redux';
import '../Run/Run.css';
const ProjectFooter = () => {
  const dispatch = useDispatch();

  const [select, setSelect] = useState(1);
  const handleClick = (id) => {
    dispatch(Actions.getAllPorject(id));
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
      </Pagination.Item>,
    );
  }
  return <Pagination className="RunFooter">{items}</Pagination>;
};
export default ProjectFooter;
