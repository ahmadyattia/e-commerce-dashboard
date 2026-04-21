// fetch products from firebase database

import { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../../../services/firebase";

export const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = ref(db, "products");

    const unsubscribe = onValue(
      productsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedProducts = snapshot.val();

          if (typeof fetchedProducts === "object" && fetchedProducts !== null) {
            const productsArray = Object.keys(fetchedProducts).map((key) => ({
              productId: key,
              ...fetchedProducts[key],
            }));

            setProducts(productsArray);
          } else {
            setError("There are no products in the database.");
          }
        }
        setLoading(false);
      },
      (err) => {
        setError("Error fetching products,", err);
        console.error(err);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  return { products, error, loading };
};
