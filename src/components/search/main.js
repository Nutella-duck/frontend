import React from 'react';
import home from './home';
import { useParams } from 'react-router-dom';
import Charts from './WorkSpaceComponent';
const Main = () => {
  const { id } = useParams();
  return <Charts id={id}></Charts>;
};

export default Main;
