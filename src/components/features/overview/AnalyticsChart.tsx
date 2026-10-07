import { api } from "@/services/api";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface MonthlyRevenue {
  month: string;
  revenue: number;
}

const AnalyticsChart = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<MonthlyRevenue[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // fetch monthly revenue (last 6 months)
    async function fetchMonthlyRevenue() {
      setError(null);
      try {
        const response = await api.get("/orders/revenue/monthly");

        const data = response.data.monthlyRevenue;
        setMonthlyRevenue(data);
      } catch (error) {
        setError("Error fetching data");
      }
    }

    fetchMonthlyRevenue();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="w-full h-full bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={monthlyRevenue}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {/* Subtle grid lines background */}
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />

          {/* X and Y Axis Configurations */}
          <XAxis dataKey="month" stroke="#888888" fontSize={12} />
          <YAxis stroke="#888888" fontSize={12} />

          {/* Interactive Hover Card and Legend toggles */}
          <Tooltip />
          <Legend />

          {/* Data Line Lines matching your object keys */}
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#4f46e5"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
