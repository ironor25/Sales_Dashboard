import React from 'react';
import { ArrowUpOutlined, DownOutlined } from '@ant-design/icons';
import { RightOutlined, StarOutlined } from '@ant-design/icons';

const RevenueBlock = () => {
 

  return (
    <div className="revenue-block flex">
      <div>
      <div className="metric-title">Revenue</div>
      <div className="big-number-row">
        <div className="big-val">
          $528,976<span>.82</span>
        </div>
        <div className="tag-row">
          <div className="stat-tag pink">
            <ArrowUpOutlined style={{ fontSize: '9px', marginRight: '4px' }} />
            7.9%
          </div>
          <div className="stat-tag red">$27,335.09</div>
        </div>
      </div>
      <div className="sub-comparison">
        vs prev. $501,641.73 Jun 1 - Aug 31, 2023
        <DownOutlined />
      </div>
      </div>
      <div>
        <div className="cards-cluster">
      <div className="dash-card">
        <div className="card-top">Top sales</div>
        <div className="card-mid-val">72</div>
        <div className="card-bottom">
          <div className="mini-user">
            <div
              className="avatar"
              style={{
                backgroundImage: "url('https://i.pravatar.cc/150?u=5')",
              }}
            ></div>
            Mikasa
          </div>
          <div className="arrow-circle">
            <RightOutlined style={{ fontSize: '8px' }} />
          </div>
        </div>
      </div>

      <div className="dash-card dark">
        <div className="card-top">
          Best deal <StarOutlined style={{ fontSize: '10px' }} />
        </div>
        <div className="card-mid-val">$42,300</div>
        <div className="card-bottom">
          <div className="mini-user ">
            Rolf Inc.
          </div>
          <div className="arrow-circle">
            <RightOutlined style={{ fontSize: '8px' }} />
          </div>
        </div>
      </div>

      <div className="vertical-stats">
        <div className="v-stat-box">
          <div className="v-label">Deals</div>
          <div className="v-pill">256</div>
          <div className="v-trend">↓ 5</div>
        </div>
        <div className="v-stat-box highlight">
          <div className="v-label">Value</div>
          <div className="v-pill">528k</div>
          <div className="v-trend up">↑ 7.9%</div>
        </div>
        <div className="v-stat-box">
          <div className="v-label">Win rate</div>
          <div className="v-pill">44%</div>
          <div className="v-trend up">↑ 1.2%</div>
        </div>
      </div>
    </div>
      </div>

      
    </div>
  );
};

export default RevenueBlock;
