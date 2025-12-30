import React from 'react';
import Header from './Header';
import DashboardControls from './DashboardControls';
import MetricsGrid from './MetricsGrid';
import LayoutGrid from './LayoutGrid';

const MainContent = () => {
  return (
    <div className='above-main-content'>
    <Header />
    <div className="main-content">
      
      <DashboardControls />
      <MetricsGrid />
      <LayoutGrid />
    </div>
    </div>
  );
};

export default MainContent;
