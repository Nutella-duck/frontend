import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import * as Actions from '../../../store/actions';
import { useDispatch } from 'react-redux';

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
  return <Pagination className="mr-auto">{items}</Pagination>;
};
export default ProjectFooter;
