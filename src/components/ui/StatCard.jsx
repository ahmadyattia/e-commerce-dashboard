import React from "react";

const StatCard = ({ icon, title, value, trendChange, trendLabel }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition">
      {/* Top row: icon + title */}
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span className="text-lg">{icon}</span>
        <span>{title}</span>
      </div>

      {/* Main value */}
      <div className="mt-3 text-2xl font-bold text-gray-800">{value}</div>

      {/* Trend (optional) */}
      {trendChange && (
        <div className="mt-1 text-xs text-gray-500">
          {trendChange} {trendLabel}
        </div>
      )}
    </div>
  );
};

export default StatCard;
