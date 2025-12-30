import React from 'react';
import SidebarNav from './components/SidebarNav';
import SidebarMenu from './components/SidebarMenu';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <SidebarNav />
      <SidebarMenu />
      <MainContent />
    </div>
  );
};

export default App;
