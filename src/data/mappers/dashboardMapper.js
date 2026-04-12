export const mapDashboardStats = (stats) => {
  return [
    {
      title: "Revenue",
      value: `$${stats.revenue.value}`,
      icon: "💰",
      trend: {
        change: `↑ ${stats.revenue.trend.change}%`,
        label: `${stats.revenue.trend.label}`,
      },
    },

    {
      title: "Orders",
      value: stats.orders.value,
      icon: "📦",
      trend: {
        change: `↑ ${stats.orders.trend.change}%`,
        label: `${stats.orders.trend.label}`,
      },
    },

    {
      title: "Users",
      value: stats.users.value,
      icon: "👤",
      trend: {
        change: `↑ ${stats.users.trend.change}%`,
        label: `${stats.users.trend.label}`,
      },
    },

    {
      title: "Products",
      value: stats.products.value,
      icon: "🛒",
      trend: stats.products.warning,
    },
  ];
};
