import React from "react";
import { FaDribbble } from "react-icons/fa";

const PlatformBox = () => {
  const bars = [
    // September
    { month: "Sep", h: 48, avatar: "https://i.pravatar.cc/150?u=12", value: "$6,901" },
    { month: "Sep", h: 38, avatar: "https://i.pravatar.cc/150?u=5" },
    { month: "Sep", h: 25, avatar: "https://i.pravatar.cc/150?u=8" },

    // October
    { month: "Oct", h: 85, avatar: "https://i.pravatar.cc/150?u=11", value: "$11,035" },
    { month: "Oct", h: 70, avatar: "https://i.pravatar.cc/150?u=15" },
    { month: "Oct", h: 38, avatar: "https://i.pravatar.cc/150?u=18" },

    // November
    { month: "Nov", h: 60, avatar: "https://i.pravatar.cc/150?u=33", value: "$9,288" },
    { month: "Nov", h: 38, avatar: "https://i.pravatar.cc/150?u=21" },
    { month: "Nov", h: 50, avatar: "https://i.pravatar.cc/150?u=27" },
  ];

  // 🔥 Find highest bar per month
  const maxByMonth = bars.reduce((acc, b) => {
    acc[b.month] = Math.max(acc[b.month] || 0, b.h);
    return acc;
  }, {});

  return (
    <div className="platform-box">
      {/* Header */}
      <div className="pb-header">
        <div className="flex ">
          <div className="w-10 h-8"><FaDribbble fill="#e84d74" size={35}/> </div>
          
          <div>
          <div className="pb-title">Platform value</div>
          <div className="pb-sub">
            
            Dribbble <i className="fa fa-chevron-down" />
          </div>
          </div>
        </div>

        <div className="switch-tabs">
          <div className="s-tab active">Revenue</div>
          <div className="s-tab">Leads</div>
          <div className="s-tab">W/L</div>
        </div>
      </div>

      {/* Chart */}
      <div className="chart-shell">
        {/* Pink left block */}
          <div className="pink-stats">
            <div className="pink-rotate">Average monthly</div>

            <div className="pink-content">
              <div >
              <div className="pink-label">Revenue</div>
              <div className="pink-val">$18,552</div>
              </div>
              <div className="pb-3">
              <div className="pink-label">Leads</div>
              <div className="pink-sub">
                373 <span>97/276</span>
              </div>
              </div>
              <div className="pb-3">
              <div className="pink-label">Win/lose</div>
              <div className="pink-sub">
                16% <span>51/318</span>
              </div>
              </div>
            </div>
          </div>

          {/* Bars */}
          <div className="bars-wrap">
            {Object.entries(
              bars.reduce((acc, b) => {
                acc[b.month] = acc[b.month] || [];
                acc[b.month].push(b);
                return acc;
              }, {})
            ).map(([month, group]) => {
              const maxH = Math.max(...group.map(b => b.h));

              return (
                <div key={month} className="month-group">
                  <div className="month-bars">
                    {group.map((b, i) => (
                      <div key={i} className="bar-col">
                        {b.value && (
                          <div className="bar-pill">
                            {b.value}
                          </div>
                        )}

                        <div
                          className={`bar ${b.h === maxH ? "striped" : ""}`}
                          style={{ height: `${b.h}px` }}
                        >
                          <div
                            className="bar-avatar"
                            style={{ backgroundImage: `url(${b.avatar})` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="month-label">{month}</div>
                </div>
              );
            })}
          </div>
            <div className="y-axis">
          <div>$14,500</div>
          <div>$11,000</div>
          <div>$7,500</div>
          <div>$4,000</div>
        </div>
        </div>


        {/* Y Axis */}
      
      </div>
    
  );
};

export default PlatformBox;
