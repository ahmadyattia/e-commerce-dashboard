import React from "react";

const SummaryCard = ({ title, value }) => {
  return (
    <div className="bg-gray-50 p-3 rounded-xl">
      <p className="text-xs text-gray-500">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
};

export default SummaryCard;
