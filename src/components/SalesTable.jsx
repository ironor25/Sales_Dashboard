import React from 'react';
import { UpOutlined } from '@ant-design/icons';

const SalesTable = () => {
  const salesData = [
    {
      id: 1,
      name: 'Armin A.',
      avatarUrl: 'https://i.pravatar.cc/150?u=11',
      revenue: '$209,633',
      leads: { dark: '41', light: '118' },
      kpi: '0.84',
     wl: [
  { type: "light", value: "29" },
  { type: "dark", value: "31%" },
  { type: "light", value: "12" }
]
,
    }
  ];

  return (
    <div className='z-10'>
      <div className="table-header">
      <span>Sales</span>
      <span>Revenue</span>
      <span>Leads</span>
      <span>KPI</span>
      <span>W/L</span>
      <span/>
    </div>

{salesData.map((row) => (
  <div
    key={row.id}
    className={`table-row `}
  >
    <div className="tr-user">
      <div
        className="avatar"
        style={{
          backgroundImage: `url('${row.avatarUrl}')`,
          width: 24,
          height: 24,
        }}
      />
      {row.name}
    </div>

    <div>{row.revenue}</div>

    <div className="leads-cell">
      <span className="pill-dark">{row.leads.dark}</span>
      <span className="pill-light">{row.leads.light}</span>
    </div>

    <div className=''>{row.kpi}</div>

   <div className="kpi-row">
  
  {row.wl.map((v, i) => (
  <span
    key={i}
    className={v.type === "light" ? "pill-light" : "pill-dark"}
  >
    {v.value}
  </span>
))}

  
</div>

{/* ACTION COLUMN */}
      <div className="row-action">
        {row.wl.hasArrow && (
          <div className="up-arrow-circle">
            <UpOutlined />
          </div>
        )}
      </div>


  
  </div>
))}
    </div>)}
// /* <table className="sales-table">
//   <thead>
//     <tr>
//       <th>Sales</th>
//       <th>Revenue</th>
//       <th>Leads</th>
//       <th>KPI</th>
//       <th>W/L</th>
//       <th></th>
//     </tr>
//   </thead>
//   <tbody>
//     {salesData.map((row) => (
//       <tr key={row.id} className={row.wl.hasArrow ? "active" : ""}>
//         <td className="user-cell">
//           <div className="tr-user">
//             <div className="avatar" style={{ backgroundImage: `url(${row.avatarUrl})` }} />
//             {row.name}
//           </div>
//         </td>

//         <td>{row.revenue}</td>

//         <td>
//           <div className="leads-cell">
//             <span className="pill-dark">{row.leads.dark}</span>
//             <span className="pill-light">{row.leads.light}</span>
//           </div>
//         </td>

//         <td className="kpi-cell">{row.kpi}</td>

//         <td>
//           <div className="kpi-row">
//               {row.wl.dark && <span className="pill-dark">{row.wl.dark}</span>}
//               {row.wl.light && <span className="pill-light">{row.wl.light}</span>}
//               {row.wl.lights?.map((v, i) => (
//                 <span key={i} className="pill-light">{v}</span>
//               ))}
//               {row.wl.darks?.map((v, i) => (
//                 <span key={i} className="pill-dark">{v}</span>
//               ))}
//           </div>
//         </td>

//         <td className="action-cell">
//           {row.wl.hasArrow && (
//             <div className="up-arrow-circle">
//               <UpOutlined />
//             </div>
//           )}
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table> */

//   );
// };

export default SalesTable;
