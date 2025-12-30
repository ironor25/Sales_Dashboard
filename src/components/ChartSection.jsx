import React from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';

const ChartSection = () => {
  return (
    <div className="chart-section">
      <div className="cs-head">
        Sales dynamic <ArrowUpOutlined />
      </div>

      <div className="svg-container">
        <div className="chart-tooltip" style={{ top: '5px', left: '80%' }}>
          <div
            className="b-icon b-dribbble"
            style={{ width: '14px', height: '14px', fontSize: '8px' }}
          ></div>
        </div>
        <div className="chart-tooltip" style={{ top: '35px', left: '40%' }}>
          <div
            className="b-icon b-insta"
            style={{ width: '14px', height: '14px', fontSize: '8px' }}
          ></div>
        </div>
        <div className="chart-tooltip" style={{ top: '50px', left: '18%' }}>
          <div
            className="b-icon b-behance"
            style={{ width: '14px', height: '14px', fontSize: '8px' }}
          ></div>
        </div>

        <svg
          className="svg-chart"
          viewBox="0 0 300 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="grad1"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: 'rgb(232, 77, 116)', stopOpacity: 0.2 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: 0 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,80 Q40,90 70,60 T150,50 T220,40 T300,20 V100 H0 Z"
            fill="url(#grad1)"
          />
          <path
            d="M0,80 Q40,90 70,60 T150,50 T220,40 T300,20"
            fill="none"
            stroke="#E84D74"
            strokeWidth="2"
          />
          <circle
            cx="70"
            cy="60"
            r="3"
            fill="white"
            stroke="#E84D74"
            strokeWidth="2"
          />
          <circle
            cx="150"
            cy="50"
            r="3"
            fill="white"
            stroke="#E84D74"
            strokeWidth="2"
          />
          <circle cx="270" cy="28" r="3" fill="#E84D74" />
        </svg>
      </div>

      <div className="x-axis">
        <span>W 1</span>
        <span>W 3</span>
        <span>W 5</span>
        <span>W 7</span>
        <span>W 9</span>
        <span>W 11</span>
      </div>

      <div className="bottom-user-row">
        <div className="tr-user">
          <div
            className="avatar"
            style={{
              backgroundImage: "url('https://i.pravatar.cc/150?u=12')",
            }}
          ></div>
          Eren Y.
        </div>
        <div className="font-bold text-sm">$117,115</div>
        <div className="pill-dark">22</div>
        <div className="text-sm text-[#aaa]">84</div>
        <div className="text-sm font-bold">0.79</div>
        <div className="kpi-row">
          <span className="pill-light">32%</span>
          <span className="pill-dark">7</span>
          <span className="pill-light">15</span>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
