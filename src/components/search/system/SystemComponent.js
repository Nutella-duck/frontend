import React from 'react';

import SystemComponents from './SystemComponents';
import { useSelector } from 'react-redux';

const SystemComponent = ({ models, graph }) => {
  const systems = useSelector((state) => state.system.cards);

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {systems.map((system, index) => (
        <SystemComponents
          key={index}
          models={models}
          graph={graph}
        ></SystemComponents>
      ))}
    </div>
  );
};

export default SystemComponent;
