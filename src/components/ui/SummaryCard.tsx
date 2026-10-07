import React from "react";

interface SummaryCardProps {
  title: string;
  value: string;
}

const SummaryCard = ({ title, value }: SummaryCardProps) => {
  return (
    <div className="bg-gray-50 p-3 rounded-xl">
      <p className="text-xs text-gray-500">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
};

export default SummaryCard;
