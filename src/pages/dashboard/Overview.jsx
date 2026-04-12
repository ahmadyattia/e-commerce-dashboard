import React from "react";
import StatCard from "../../components/ui/StatCard";

const Overview = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back 👋</h1>
        <p className="text-gray-500 text-sm">
          Here’s what’s happening with your store today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Revenue"
          value="$12,500"
          icon="💰"
          trend="↑ +8% this week"
        />
        <StatCard
          title="Orders"
          value="320"
          icon="📦"
          trend="↑ +8% this week"
        />
        <StatCard title="Users" value="1,240" icon="👤" trend="↑ +5% growth" />
        <StatCard
          title="Products"
          value="58"
          icon="🛒"
          trend="↑ +8% this week"
        />
      </div>

      {/* Chart */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm mb-6">
        <h2 className="font-semibold mb-4">Sales Overview</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          Chart goes here
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="font-semibold mb-4">Recent Orders</h2>
        {/* <RecentOrders /> */}
      </div>
    </div>
  );
};

export default Overview;
