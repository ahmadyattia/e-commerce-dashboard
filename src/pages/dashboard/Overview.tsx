import AnalyticsChart from "@/components/features/overview/AnalyticsChart.js";

import StatCards from "@/components/features/overview/StatCards.js";

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
      <StatCards />

      {/* Chart */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm mb-6">
        <h2 className="font-semibold mb-4">Sales Overview</h2>
        <div className="h-100 flex items-center justify-center text-gray-400">
          <AnalyticsChart />
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
