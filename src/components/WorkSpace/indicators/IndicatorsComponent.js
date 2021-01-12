import React from 'react';
import IndicatorsHeadComponent from './IndicatorsHeadComponent';
import IndicatorsCards from './IndicatorsCards';
import { useSelector } from 'react-redux';

const SectionsComponent = ({ models, graph, isLoading }) => {
 
  return (
    <div style={{ paddingBottom: '3rem' }}>
      <IndicatorsHeadComponent></IndicatorsHeadComponent>

    
        <IndicatorsCards
          models={models}
          graph={graph}
          isLoading={isLoading}
        ></IndicatorsCards>
    
    </div>
  );
};

export default SectionsComponent;
