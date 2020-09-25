import React from 'react';
import home from './home';
import { useParams } from 'react-router-dom';
const Main = () => {
  const { id } = useParams();
  return <div>{id} 입니다.</div>;
};

export default Main;
