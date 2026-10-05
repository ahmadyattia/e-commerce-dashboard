import { api } from "../../services/api";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import tableSize from "@/data/pageSize";

interface PaginationProps {
  tableName: "users" | "products" | "orders";
}

const Pagination = ({ tableName }: PaginationProps) => {
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState<string>("1");

  useEffect(() => {
    if (!tableSize) return;

    const fetchCount = async () => {
      setLoading(true);

      try {
        const response = await api(`/${tableName}/count`);

        const count = response.data.count;

        setPageCount(Math.ceil(count / tableSize)); // set page count according to data count and page size
      } catch (error) {
        setError("Error loading pagination..");
        console.error("Error computing pages count.");
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  useEffect(() => {
    setSearchParams((prevParams) => {
      // 1. Create a fresh copy to avoid mutating state directly
      const newParams = new URLSearchParams(prevParams);

      // 2. Natively append or change 'size' without triggering property clashes
      newParams.set("page", pageNumber);

      return newParams;
    });
  }, [pageNumber]);

  const handleClick = () => {};

  if (loading) return <p>Loading pagination...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="text-center m-5">
      {pageCount &&
        Array.from({ length: pageCount }, (_, i) => {
          return (
            <span
              onClick={() => setPageNumber(`${i + 1}`)}
              className="p-3 m-1 bg-gray-300 hover:bg-gray-400 rounded-[0.2rem] cursor-pointer"
              key={i}
            >
              {i + 1}
            </span>
          );
        })}
    </div>
  );
};

export default Pagination;
