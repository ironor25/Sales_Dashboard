import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis } from 'recharts';
import { 
  Dribbble, 
  Instagram, 
  MoreHorizontal, 
  ChevronUp, 
  ThumbsUp, 
  Flame, 
  BicepsFlexed,
  ShoppingBag
} from 'lucide-react';
import { FaMedium } from "react-icons/fa6";

// Mock Data for the graph to match the curve shape
const data = [
  { name: 'W1', value1: 4000, value2: 2400 },
  { name: 'W2', value1: 3000, value2: 3500 },
  { name: 'W3', value1: 4500, value2: 3000 },
  { name: 'W4', value1: 5500, value2: 4500 },
  { name: 'W5', value1: 4800, value2: 3800 },
  { name: 'W6', value1: 5200, value2: 4200 },
  { name: 'W7', value1: 4100, value2: 3000 },
  { name: 'W8', value1: 4300, value2: 3200 },
  { name: 'W9', value1: 4000, value2: 4500 },
  { name: 'W10', value1: 5800, value2: 3500 },
  { name: 'W11', value1: 6200, value2: 3000 },
  { name: 'W12', value1: 6000, value2: 4000 },
];

// Custom Google Icon since it's multicolor
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.5 12.2857C23.5 11.4571 23.4286 10.6571 23.3 9.9H12V14.5286H18.4714C18.1857 15.9857 17.3143 17.2286 16.0286 18.0857V21.0571H19.9C22.1571 18.9714 23.5 15.9 23.5 12.2857Z" fill="#4285F4"/>
    <path d="M12 24C15.2286 24 17.9429 22.9286 19.9 21.0571L16.0286 18.0857C14.9571 18.8 13.5857 19.2286 12 19.2286C8.88571 19.2286 6.25714 17.1286 5.31429 14.2857H1.28571V17.3714C3.25714 21.3 7.31429 24 12 24Z" fill="#34A853"/>
    <path d="M5.31429 14.2857C5.07143 13.5571 4.94286 12.7857 4.94286 12C4.94286 11.2143 5.07143 10.4429 5.31429 9.71429V6.62857H1.28571C0.457143 8.25714 0 10.0857 0 12C0 13.9143 0.457143 15.7429 1.28571 17.3714L5.31429 14.2857Z" fill="#FBBC05"/>
    <path d="M12 4.77143C13.7571 4.77143 15.3286 5.37143 16.5714 6.55714L20.0143 3.11429C17.9286 1.17143 15.2143 0 12 0C7.31429 0 3.25714 2.7 1.28571 6.62857L5.31429 9.71429C6.25714 6.87143 8.88571 4.77143 12 4.77143Z" fill="#EA4335"/>
  </svg>
);

const Avatar = ({ src, name }) => (
  <div className="avatar-wrapper">
    <img src={src} alt={name} className="avatar-img" />
  </div>
);

const DashboardCard = () => {
  return (
    <div className="dashboard-container">
      {/* Main Card */}
      <div className="main-card">
        
        {/* Header */}
        <div className='flex'>
          <div className="card-header">
            <div className="tr-user">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name="Mikasa" />
              <span className="user-name">Mikasa A.</span>
              
            </div>
            <div>$156,841</div>
          
            <div className='leads-cell'>
            <span className="pill-dark">54</span>
            <span className="pill-light">103</span>
            </div>
            <div className=''>
            <span className="">0.89</span>
            </div>
            <div className='kpi-row'>
            <span className="pill-light">39%</span>
            <span className="pill-dark">21</span>
            
            <span className="pill-light">33</span>
            </div>

            </div>
            <div>
                <button className="expand-btn">
                <ChevronUp size={16} color="white" />
              </button>
              </div>
        </div>
        


        {/* Tags */}
        <div className="tags-row">
          <div className="tag">Top sales <span role="img" aria-label="muscle">💪</span></div>
          <div className="tag">Sales streak <span role="img" aria-label="fire">🔥</span></div>
          <div className="tag">Top review <span role="img" aria-label="thumbsup">👍</span></div>
        </div>

        {/* Platforms Section */}
        <div className="section-header">
          <h3>Work with platforms</h3>
          <div className="header-badges">
            <span className="red-badge"><ChevronUp size={10} strokeWidth={4} /> 3</span>
            <span className="red-pill">$156,841</span>
          </div>
        </div>

        <div className="platforms-grid">
          {/* Large Card - Dribbble */}
          <div className="platform-card large dribbble-card">
            <div className="card-top">
              <div className="icon-row">
                <Dribbble size={20} color="#EA4C89" />
                <span className="platform-name">Dribbble</span>
              </div>
            </div>
            <div className="card-bottom">
              <span className="big-percent">45.3%</span>
              <span className="grey-value">$71,048</span>
            </div>
            <div className="stripe-overlay"></div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Instagram */}
            <div className="platform-card small">
              <div>
              <div className="icon-row">
                <i class="fa-brands fa-instagram text-pink-500" ></i>
                <span className="platform-name">Instagram</span>
              </div>
              <div className="card-stats">
                <span className="med-percent">28.1%</span>
                <span className="grey-value small-text">$44,072</span>
              </div>
              </div>
              <div>
                    <div className=''>
                        <div className="google-card small">
                            <div className="card-content-wrapper">
                              <div className="google-top">
                                  <div className="icon-row">
                                      <GoogleIcon />
                                      <span className="platform-name">Google</span>
                                  </div>
                              </div>
                              <div className="google-stats">
                                  <span className="med-percent">14.1%</span>
                                  <span className="grey-value small-text">$22,114</span>
                              </div>
                                
                            </div>
                            
                          <div className="stripe-overlay-small"></div>
                        </div>
                  </div>
                    <div className="google-metrics small-card">
                          <div className="circles">
                              <FaMedium/>
                          </div>
                          <span className="metric-val">5.4%</span>
                          <span className="grey-value xsmall-text">$8,469</span>
                      </div>
                </div>
            </div>

            {/* Google */}
          

            {/* Other */}
            <div className="platform-card flat-row">
               <div className="icon-row">
                <ShoppingBag size={18} color="#000" />
                <span className="platform-name">Other</span>
              </div>
              <div className="row-stats">
                <span className="med-percent">7.1%</span>
                <span className="grey-value small-text">$11,135</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-section">
            <div className="chart-header">
                <h3>Sales dynamic</h3>
                <div className="arrow-icon">↗</div>
            </div>
            
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={120}>
                    <LineChart data={data}>
                        <defs>
                            <linearGradient id="colorValue1" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="5%" stopColor="#E91E63" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#E91E63" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: '#ccc', fontSize: 10}} 
                            interval={1}
                            dy={-120} // Move labels to top
                        />
                        <Line 
                            type="monotone" 
                            dataKey="value1" 
                            stroke="#D81B60" 
                            strokeWidth={3} 
                            dot={false} 
                        />
                        <Line 
                            type="monotone" 
                            dataKey="value2" 
                            stroke="#FF8A65" 
                            strokeWidth={2} 
                            strokeDasharray="4 4" 
                            dot={false} 
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Custom Bottom Progress Track */}
            <div className="timeline-track">
                {/* Track Lines */}
                <div className="track-segment red"></div>
                <div className="track-segment yellow"></div>
                <div className="track-segment green"></div>

                {/* Floating Icons on Track */}
                <div className="track-marker marker-1">
                     <div className="marker-icon behance">Be</div>
                </div>
                <div className="track-marker marker-2">
                    <div className="marker-icon dribbble"><Dribbble size={10} /></div>
                </div>
                <div className="track-marker marker-3">
                    <div className="marker-icon user">
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="" />
                         <div className="star-badge">★</div>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Footer / Second User Strip */}
      <div className="table-row">
        <div className="tr-user">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name="Mikasa" />
              <span className="user-name">Mikasa A.</span>
              
            </div>
            <div>$156,841</div>
          
            <div className='leads-cell'>
            <span className="pill-dark">54</span>
            <span className="pill-light">103</span>
            </div>
            <div className=''>
            <span className="">0.89</span>
            </div>
            <div className='kpi-row'>
            <span className="pill-light">39%</span>
            <span className="pill-dark">21</span>
            
            <span className="pill-light">33</span>
            </div>

            </div>
            <div>
      </div>
    </div>
  );
};

export default DashboardCard;