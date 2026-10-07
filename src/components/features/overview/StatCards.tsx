import StatCard from "@/components/ui/StatCard.jsx";
import { useEffect, useState } from "react";
import { api } from "@/services/api.js";

const StatCards = () => {
  const [revenue, setRevenue] = useState<number | undefined>(undefined);
  const [ordersCount, setordersCount] = useState<number | undefined>(undefined);
  const [productsCount, setProductsCount] = useState<number | undefined>(
    undefined,
  );
  const [usersCount, setUsersCount] = useState<number | undefined>(undefined);
  const [revenueCountError, setRevenueCountError] = useState<string | null>(
    null,
  );
  const [ordersCountError, setOrdersCountError] = useState<string | null>(null);
  const [productsCountError, setProductsCountError] = useState<string | null>(
    null,
  );
  const [usersCountError, setUsersCountError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      setRevenueCountError(null);
      setOrdersCountError(null);
      setProductsCountError(null);
      setUsersCountError(null);

      const [revenueRes, ordersCountRes, productsCountRes, usersCountRes] =
        await Promise.allSettled([
          api("/orders/revenue"),
          api("/orders/count"),
          api("/products/count"),
          api("/users/count"),
        ]);

      revenueRes.status === "fulfilled"
        ? setRevenue(revenueRes.value.data.revenue)
        : setRevenueCountError("Error...");
      ordersCountRes.status === "fulfilled"
        ? setordersCount(ordersCountRes.value.data.count)
        : setOrdersCountError("Error...");
      productsCountRes.status === "fulfilled"
        ? setProductsCount(productsCountRes.value.data.count)
        : setProductsCountError("Error...");
      usersCountRes.status === "fulfilled"
        ? setUsersCount(usersCountRes.value.data.count)
        : setUsersCountError("Error...");
    };

    fetchStats();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {
        <StatCard
          title="Revenue"
          icon="💰"
          value={revenue}
          error={revenueCountError}
        />
      }
      {
        <StatCard
          title="Orders"
          icon="📦"
          value={ordersCount}
          error={ordersCountError}
        />
      }
      {
        <StatCard
          title="Products"
          icon="🛒"
          value={productsCount}
          error={productsCountError}
        />
      }
      {
        <StatCard
          title="Users"
          icon="👤"
          value={usersCount}
          error={usersCountError}
        />
      }
    </div>
  );
};

export default StatCards;
