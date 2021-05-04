import React from 'react';
import SystemCards from './SystemCards';


const SystemComponent = ({ models, graph, isLoading, cards }) => {
 

  return (
    <div style={{ paddingBottom: '3rem' }}>
      
        <SystemCards
          models={models}
          graph={graph}
          isLoading={isLoading}
          cards={cards}
           
        ></SystemCards>
    
    </div>
  );
};

export default SystemComponent;
