interface StatCardProps {
  icon?: string;
  title?: string;
  value?: number;
  error?: string | null;
}

const StatCard = ({ icon, title, value, error }: StatCardProps) => {
  return (
    <div className="w-max bg-white py-5 px-10 text-center rounded-xl shadow-sm hover:shadow-md transition">
      {/* Top row: icon + title */}
      <div className="flex items-center justify-center gap-1 text-gray-500 text-sm">
        <img src={icon} />
        <span>{title}</span>
      </div>

      {error && <p className="text-2xl mt-3 text-red-500">{error}</p>}

      {/* Main value */}
      <div className="mt-3 text-gray-800">
        {value ? (
          <p>
            <span className="text-2xl font-bold">
              {title === "Revenue" && <span>$</span>}
              {value}
            </span>
            <span className="text-gray-400 text-sm mx-2">total</span>
          </p>
        ) : (
          <span className="invisible">placeholder</span>
        )}
      </div>
    </div>
  );
};

export default StatCard;
