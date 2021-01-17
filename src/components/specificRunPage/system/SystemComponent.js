import React from 'react';

import SystemComponents from './SystemComponents';
import { useSelector } from 'react-redux';

const SystemComponent = ({ models, graph, isLoading }) => {
  //const systems = useSelector((state) => state.system.cards);

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {/* {systems.map((system, index) => (
        <SystemComponents
          key={index}
          models={models}
          graph={graph}
          isLoading={isLoading}
        ></SystemComponents>
      ))} */}
        <SystemComponents
          models={models}
          graph={graph}
          isLoading={isLoading}
        ></SystemComponents>
    </div>
  );
};

export default SystemComponent;
