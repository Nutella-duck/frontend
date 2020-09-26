import React from 'react';

import SystemComponents from './SystemComponents';
import { useSelector } from 'react-redux';

const SystemComponent = ({ models, graph, isLoading }) => {
  const systems = useSelector((state) => state.system.cards);
  console.log('시스템 렌더링 중...');
  console.log('시스템 그래프', systems);

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {systems.map((system, index) => (
        <SystemComponents
          key={index}
          models={models}
          graph={graph}
          isLoading={isLoading}
        ></SystemComponents>
      ))}
    </div>
  );
};

export default SystemComponent;
