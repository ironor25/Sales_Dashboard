import React, { useState } from 'react';
import { DownOutlined, UpOutlined, PlusOutlined } from '@ant-design/icons';

const SidebarMenu = () => {
  const [expanded, setExpanded] = useState({
    dashboardShared: true,
    reportsShared: true,
    myReports: true,
  });

  const toggle = key =>
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  const dashboardSharedItems = [
    'Cargo2go',
    'Cloudz3r',
    'Idioma',
    'Syllables',
    'x-0b',
  ];

  const reportsSharedItems = ['Deals by user', 'Deal duration'];

  const myReportsItems = [
    'Emails received',
    'Deal duration',
    'New report',
    'Analytics',
  ];

  return (
    <div className="sidebar-menu">
      {/* PROJECT SELECTOR */}
      <div className="project-selector">
        Codename.com <DownOutlined style={{ fontSize: 10 }} />
      </div>

      {/* TOP LINKS */}
      <div className="menu-group">
        <div className="menu-link">☆ Starred</div>
        <div className="menu-link">⟲ Recent</div>
        <div className="menu-link">Sales list</div>
        <div className="menu-link">Goals</div>

        {/* DASHBOARD */}
        <div className="menu-link active">
          Dashboard
          <PlusOutlined style={{ fontSize: 10 }} />
        </div>

        <div className="tree-root">
          <div className="tree-item parent">Codename</div>

          <div
            className="tree-item parent dropdown-toggle"
            onClick={() => toggle('dashboardShared')}
          >
            Shared with me
            {expanded.dashboardShared ? (
              <UpOutlined style={{ fontSize: 8 }} />
            ) : (
              <DownOutlined style={{ fontSize: 8 }} />
            )}
          </div>

          {expanded.dashboardShared && (
            <div className="tree-children">
              {dashboardSharedItems.map(item => (
                <div
                  key={item}
                  className={`tree-item child ${
                    item === 'Cloudz3r' ? 'active' : ''
                  }`}
                >
                  {item}
                  {item === 'Cloudz3r' && (
                    <span className="badge">2</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* REPORTS */}
      <div className="menu-group">
        <div className="menu-label">
          Reports <PlusOutlined />
        </div>

        <div className="tree-root">
          {/* SHARE WITH ME */}
          <div
            className="tree-item parent dropdown-toggle"
            onClick={() => toggle('reportsShared')}
          >
            Share with me
            {expanded.reportsShared ? (
              <UpOutlined style={{ fontSize: 8 }} />
            ) : (
              <DownOutlined style={{ fontSize: 8 }} />
            )}
          </div>

          {expanded.reportsShared && (
            <div className="tree-children">
              {reportsSharedItems.map(item => (
                <div key={item} className="tree-item child">
                  {item}
                </div>
              ))}
            </div>
          )}

          {/* MY REPORTS */}
          <div
            className="tree-item parent dropdown-toggle"
            onClick={() => toggle('myReports')}
          >
            My reports
            {expanded.myReports ? (
              <UpOutlined style={{ fontSize: 8 }} />
            ) : (
              <DownOutlined style={{ fontSize: 8 }} />
            )}
          </div>

          {expanded.myReports && (
            <div className="tree-children">
              {myReportsItems.map(item => (
                <div
                  key={item}
                  className={`tree-item child ${
                    item === 'New report' ? 'highlight' : ''
                  }`}
                >
                  {item}
                  {item === 'Analytics' && (
                    <span className="badge">7</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MANAGE FOLDERS */}
        <div className="menu-link" style={{ marginTop: 12 }}>
          📎 Manage folders
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
