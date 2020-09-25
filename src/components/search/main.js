import React from 'react';

import { useParams } from 'react-router-dom';
import Matrixs from './Matrixs/MatrixsPage';
const Main = () => {
  const { id } = useParams();
  return <Matrixs id={id}></Matrixs>;
};

export default Main;
