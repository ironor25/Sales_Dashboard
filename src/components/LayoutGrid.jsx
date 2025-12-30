import React from 'react';
import SourcesPanel from './SourcesPanel';
import PlatformBox from './PlatformBox';
import SalesTable from './SalesTable';
import GradientBox from './GradientBox';
import ChartSection from './ChartSection';

const LayoutGrid = () => {
  return (
    <div className="layout-grid">
      <div className="col-left">
        <SourcesPanel />
        <PlatformBox />
      </div>

      <div className="col-right">
        <SalesTable />

      
        <GradientBox />
        {/* <ChartSection /> */}
      </div>
    </div>
  );
};

export default LayoutGrid;
