import React from 'react';
import RevenueBlock from './RevenueBlock';
import CardsCluster from './CardsCluster';

const MetricsGrid = () => {
  return (
    <div className="metrics-grid">
      <RevenueBlock />
      <CardsCluster />
    </div>
  );
};

export default MetricsGrid;
