import React from 'react';
import { PiTreeView  } from "react-icons/pi";
import { BsCommand } from "react-icons/bs";
import { TbLayersSelected, TbBrandHipchat } from "react-icons/tb";


const SidebarNav = () => {
  const navItems = [
    { id: 1, icon: 'fa-solid fa-chart-pie', active: false },
    { id: 2, icon: PiTreeView, active: true },
    { id: 3, icon: 'fa-regular fa-file-lines', active: false },
    { id: 4, icon: BsCommand , active: false },
    { id: 5, icon: TbLayersSelected, active: false },
    { id: 6, icon: TbBrandHipchat, active: false, bottom: true },
    { id: 7, icon: 'fa-solid fa-gear', active: false },
  ];

  return (
    <div className="sidebar-nav">
      <div className="app-logo">C</div>
      <div className="nav-items">
        {navItems.map((item) => (
          (typeof item.icon === "string")?(
          <div
            key={item.id}
            className={`nav-item ${item.active ? 'active' : ''} ${item.bottom ? 'bottom' : ''}`}
          >
            <i className={item.icon} style={{ fontSize: '14px' }}></i>
          </div>):(
            <div key={item.id}
            className={`nav-item ${item.active ? 'active' : ''} ${item.bottom ? 'bottom' : ''}`}>
              <item.icon />
            </div>
            
          )
          
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
