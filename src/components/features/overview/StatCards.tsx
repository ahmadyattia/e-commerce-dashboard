import StatCard from "@/components/ui/StatCard.jsx";
import { useEffect, useState } from "react";
import { api } from "@/services/api.js";
import revenueIcon from "@/assets/icons/money_bag_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";
import usersIcon from "@/assets/icons/person_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";
import productsIcon from "@/assets/icons/local_mall_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";
import ordersIcon from "@/assets/icons/orders_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";

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
          icon={revenueIcon}
          value={revenue}
          error={revenueCountError}
        />
      }
      {
        <StatCard
          title="Orders"
          icon={ordersIcon}
          value={ordersCount}
          error={ordersCountError}
        />
      }
      {
        <StatCard
          title="Products"
          icon={productsIcon}
          value={productsCount}
          error={productsCountError}
        />
      }
      {
        <StatCard
          title="Users"
          icon={usersIcon}
          value={usersCount}
          error={usersCountError}
        />
      }
    </div>
  );
};

export default StatCards;
