import React from "react";

interface StatCardProps {
  icon?: string;
  title?: string;
  value?: number;
  trendChange?: number;
  trendLabel?: string;
}

const StatCard = ({
  icon,
  title,
  value,
  trendChange,
  trendLabel,
}: StatCardProps) => {
  // const isUp = trendChange > 0;
  // const isDown = trendChange < 0;

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition">
      {/* Top row: icon + title */}
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span className="text-lg">{icon}</span>
        <span>{title}</span>
      </div>

      {/* Main value */}
      <div className="mt-3 text-2xl font-bold text-gray-800">
        {title === "Revenue" && <span>$</span>}
        {value ? value : <span className="invisible">placeholder</span>}
      </div>

      {/* Trend (optional) */}
      {trendChange && (
        <div className="mt-1 text-xs text-gray-500">
          {/* {isUp && <span className="text-green-600">↑</span>}{" "}
          {isDown && <span className="text-red-600">↓</span>} */}
          {trendChange} {trendLabel}
        </div>
      )}
    </div>
  );
};

export default StatCard;
