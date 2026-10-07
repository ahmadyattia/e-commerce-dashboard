import StatCard from "../../components/ui/StatCard.jsx";
import useRevenue from "../../components/features/overview/hooks/useRevenue.js";
import useOrdersCount from "../../components/features/overview/hooks/useOrdersCount.js";
import useProductsCount from "../../components/features/overview/hooks/useProductsCount.js";
import useUsersCount from "../../components/features/overview/hooks/useUsersCount.js";
import AnalyticsChart from "@/components/features/overview/AnalyticsChart.js";

const Overview = () => {
  const revenue = useRevenue();
  const ordersCount = useOrdersCount();
  const productsCount = useProductsCount();
  const usersCount = useUsersCount();

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back 👋</h1>
        <p className="text-gray-500 text-sm">
          Here’s what’s happening with your store today.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mb-6">
        {<StatCard title="Revenue" icon="💰" value={revenue} />}
        {<StatCard title="Orders" icon="📦" value={ordersCount} />}
        {<StatCard title="Products" icon="🛒" value={productsCount} />}
        {<StatCard title="Users" icon="👤" value={usersCount} />}
      </div>

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
