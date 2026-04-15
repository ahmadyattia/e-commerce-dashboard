export const mapDashboardStats = (stats) => {
  return [
    {
      title: "Revenue",
      value: `$${stats.revenue.value}`,
      icon: "💰",
      trendChange: stats.revenue.trend.change,
      trendLabel: `${stats.revenue.trend.label}`,
    },

    {
      title: "Orders",
      value: stats.orders.value,
      icon: "📦",
      trendChange: stats.orders.trend.change,
      trendLabel: stats.orders.trend.label,
    },

    {
      title: "Users",
      value: stats.users.value,
      icon: "👤",
      trendChange: stats.users.trend.change,
      trendLabel: `${stats.users.trend.label}`,
    },

    {
      title: "Products",
      value: stats.products.value,
      icon: "🛒",
      trendChange: stats.products.warning,
    },
  ];
};
