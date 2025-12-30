import React from "react";

const CardsCluster = () => {
  const collaborators = [
    {
      id: 1,
      amount: "$209,633",
      percentage: "39.63%",
      avatarUrl: "https://i.pravatar.cc/150?u=11",
    },
    {
      id: 2,
      amount: "$156,841",
      percentage: "29.65%",
      avatarUrl: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 3,
      amount: "$117,115",
      percentage: "22.14%",
      avatarUrl: "https://i.pravatar.cc/150?u=60",
    },
    {
      id: 4,
      amount: "$45,386",
      percentage: "8.58%",
      avatarUrl: null,
      initials: "C",
      muted: true,
    },
  ];

  return (
    <div className="flex gap-2">
    <div className="collab-row">
      <div className="collab-stats">
        {collaborators.map((collab) => (
          <div
            key={collab.id}
            className={`collab-stat-item ${
              collab.muted ? "muted" : ""
            }`}
            style={{ flexGrow: parseFloat(collab.percentage) }}
          >
            {collab.avatarUrl ? (
              <div
                className="avatar"
                style={{
                  backgroundImage: `url(${collab.avatarUrl})`,
                }}
              />
            ) : (
              <div className="black-c-btn  h-5 text-[10px] m-0">
                {collab.initials}
              </div>
            )}

            <div className="collab-data">
              <span >{collab.amount}</span>
              <span>{collab.percentage}</span>
            </div>
          </div>
        ))}
      </div>

      
    </div>
    <button className="btn-details">Details</button>
    </div>
  );
};

export default CardsCluster;
