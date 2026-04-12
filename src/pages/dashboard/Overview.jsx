import React from "react";
import StatCard from "../../components/ui/StatCard";

const Overview = () => {
  return (
    <div>
      <StatCard
        title="Revenue"
        value="$12,500"
        icon="💰"
        trend="↑ +8% this week"
      />
      <StatCard title="Orders" value="320" icon="📦" trend="↑ +8% this week" />
      <StatCard title="Users" value="1,240" icon="👤" trend="↑ +5% growth" />
      <StatCard title="Products" value="58" icon="🛒" trend="↑ +8% this week" />
    </div>
  );
};

export default Overview;
