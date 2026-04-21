import { onValue, orderByChild, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../../../services/firebase";

export const useOrders = () => {
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ordersRef = ref(db, "/orders");

    const unsubscribe = onValue(
      ordersRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const allOrders = snapshot.val();

          if (typeof allOrders === "object" && allOrders !== null) {
            const ordersValues = Object.values(allOrders);

            setOrders(ordersValues);
          }
        }
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setError(`Error fetching orders from the database: ${err}`);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  return { orders, loading, error };
};
