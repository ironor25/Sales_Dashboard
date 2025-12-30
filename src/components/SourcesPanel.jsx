import React from "react";
import { BarsOutlined, BarChartOutlined, DownOutlined } from "@ant-design/icons";
import { ShoppingBag } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SourcesPanel = () => {
  const sources = [
    { id: 1, name: "Dribbble", icon: "fa-brands fa-dribbble", color: "#ea4c89", money: "$227,459", percentage: "43%", height: 110 },
    { id: 2, name: "Instagram", icon: "fa-brands fa-instagram", color: "#d62976", money: "$142,823", percentage: "27%", height: 85 },
    { id: 3, name: "Behance", icon: "fa-brands fa-behance", color: "#1769ff", money: "$89,935", percentage: "11%", height: 70 },
    { id: 4, name: "Google", icon: FcGoogle, color: "#555", money: "$37,028", percentage: "7%", height: 100, striped: true },
  ]; 

const bar_sources = [
  {
    id: 1,
    name: "Behance",
    icon: "fa-brands fa-behance",
    color: "#1769ff",
    height: 100,
  },
  {
    id: 2,
    name: "Dribbble",
    icon: "fa-brands fa-dribbble",
    color: "#ea4c89",
    height: 130,
  },
  {
    id: 3,
    name: "Google",
    icon: FcGoogle,
    color: "",
    height: 80,
  },
  {
    id: 4,
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    color: "#d62976",
    height: 60,
  },
  
  
  {
    id: 5,
    name: "Shop",
    icon: ShoppingBag,   
    color: "black",
    height: 115,
    striped: true,
  },
];


  return (
    <div className="split-container">
      {/* LEFT */}
      <div className="grey-panel">
        <div className="panel-head">
          <BarsOutlined className="icon-filter" />
          <div className="pill-label">
            Filters <BarsOutlined style={{ fontSize: 9 }} />
          </div>
        </div>

        {sources.map((s) => (
          <div key={s.id} className="list-item">
            <div className="brand-name">
              <div className="b-icon" style={{color:s.color}} >
               {typeof s.icon ==="string" ? ( <i className={s.icon}></i>) : (<s.icon />)}
              </div>
              {s.name}
            </div>
            <div className="list-val">
              <div className="lv-money">{s.money}</div>
              <div className="lv-pct">{s.percentage}</div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="grey-panel flex flex-col">
        <div className="panel-head">
          <BarChartOutlined className="icon-filter" />
          <div className="pill-label">
            Filters <BarsOutlined style={{ fontSize: 9 }} />
          </div>
        </div>

        <div className="bar-chart-ui">
          {bar_sources.map((s) => (
            <div key={s.id} className="bar-col">
              <div
                className={`v-bar ${s.striped ? "striped" : ""}`}
                style={{ height: `${s.height}px` }}
              >
                <div className="v-bar-icon">
                    {typeof s.icon === "string" ? (
                      <i className={s.icon} style={{ color: s.color }} />
                    ) : (
                      <s.icon size={18}  />
                    )}
                  </div>

              </div>
            </div>
          ))}
        </div>

        <div className="grey-caption">
          Deals amount
          <br />
          <span>
            by referrer category <DownOutlined />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SourcesPanel;
