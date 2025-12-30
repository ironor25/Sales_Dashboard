import React from 'react';
import { PlusOutlined, DownOutlined } from '@ant-design/icons';
import { HiOutlineDownload } from "react-icons/hi";
import { PiSlidersHorizontal } from "react-icons/pi";
import { PiUpload } from "react-icons/pi";


const DashboardControls = () => {
  const users = [
    { id: 1, initials: 'A', name: 'Armin A.', avatarUrl: 'https://i.pravatar.cc/150?u=11' },
    { id: 2, initials: 'E', name: 'Eren Y.', avatarUrl: 'https://i.pravatar.cc/150?u=12' },
    { id: 3, initials: 'M', name: 'Mikasa A.', avatarUrl: 'https://i.pravatar.cc/150?u=5' },
  ];

  return (
    <div className="dash-controls">
      <div className='w-full'>
        <div className="user-stack " style={{ justifyContent: "space-between"}}>
          <div style={{display:"flex"}}>
          <div className="add-user-mini">
            <PlusOutlined />
          </div>
          {users.map((user) => (
            <div key={user.id} className="user-chip">
              <div
                className="avatar"
                style={{
                  backgroundImage: `url('${user.avatarUrl}')`,
                }}
              ></div>
              {user.name}
            </div>
          ))}
          <div className="black-c-btn">C</div>
          </div>
          <div className='flex'>
            
            {/* <i className="fa-solid fa-sliders" ></i> */}
            <PiSlidersHorizontal size={30} className='border-2 border-gray-300 rounded-4xl ' style={{padding:"3px", marginLeft:"10px", marginRight:"10px"}}/>
            <HiOutlineDownload size={30} className='border-2 border-gray-300 rounded-4xl' style={{padding:"3px", marginLeft:"10px", marginRight:"10px"}}/>
            {/* <i className="fa-solid fa-download" style={{marginLeft:"15px", marginRight:"15px",padding:"5px", borderRadius:"50%", border:"2px solid #ddd"}}></i> */}
            {/* <i className="fa-solid fa-arrow-up-from-bracket" style={{marginLeft:"15px",padding:"5px", borderRadius:"50%", border:"2px solid #ddd"}}></i> */}
            <PiUpload size={30} className='border-2 border-gray-300 rounded-4xl ' style={{padding:"3px", marginLeft:"10px", marginRight:"10px"}}/>
          </div>
        </div>
          <div className='flex justify-between'>
          <h1 className="page-heading">New report</h1>
          <div className="filter-row">
          <div className="toggle-label">
            <div className="toggle-bg">
              <div className="toggle-dot"></div>
            </div>
            Timeframe
          </div>
          <div className="date-select">
            Sep 1 – Nov 30, 2023
            <i className="fa fa-chevron-down" style={{ fontSize: '10px' }}></i>
          </div>
        </div>
        </div>
      </div>

      
    </div>
  );
};

export default DashboardControls;
