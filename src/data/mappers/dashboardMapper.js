export const mapDashboardStats = (stats) => {
  return [
    {
      title: "Revenue",
      value: `$${stats.revenue.value}`,
      icon: "💰",
      trend: `↑ ${stats.revenue.trend.value}% ${stats.revenue.trend.label}`,
    },

    {
      title: "Orders",
      value: stats.orders.value,
      icon: "📦",
      trend: `↑ ${stats.orders.trend.value}% ${stats.orders.trend.label}`,
    },

    {
      title: "Users",
      value: stats.users.value,
      icon: "👤",
      trend: `↑ ${stats.users.trend.value}% ${stats.users.trend.label}`,
    },

    {
      title: "Products",
      value: stats.products.value,
      icon: "🛒",
      trend: stats.products.warning,
    },
  ];
};
