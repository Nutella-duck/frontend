import React from 'react';
import SectionHeadComponent from './SectionHeadComponent';
import SectionComponents from './SectionComponents';
import { useSelector } from 'react-redux';

const SectionsComponent = ({ models, graph, isLoading }) => {
  const sectoions = useSelector((state) => state.section.cards);
  return (
    <div style={{ paddingBottom: '3rem' }}>
      <SectionHeadComponent></SectionHeadComponent>

      {sectoions.map((section, index) => (
        <SectionComponents
          models={models}
          key={index}
          graph={graph}
          isLoading={isLoading}
        ></SectionComponents>
      ))}
    </div>
  );
};

export default SectionsComponent;
