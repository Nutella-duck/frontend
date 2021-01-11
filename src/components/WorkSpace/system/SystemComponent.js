import React from 'react';

import SystemComponents from './SystemComponents';
import { useSelector } from 'react-redux';

const SystemComponent = ({ models, graph, isLoading, cards }) => {
  const systems = useSelector((state) => state.system.cards);

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {systems.map((system, index) => (
        <SystemComponents
          key={index}
          models={models}
          graph={graph}
          isLoading={isLoading}
          cards={cards}
        ></SystemComponents>
      ))}
    </div>
  );
};

export default SystemComponent;
