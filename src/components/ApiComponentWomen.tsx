import React, { useEffect, useState } from "react";
import styles from "./ApiComponentWomen.module.css";
import { useNavigate } from "react-router-dom";

export type ApiResponse = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const selectedIds = [15, 16, 7, 17, 19, 1];

const ApiComponentWomen: React.FC = () => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("products");
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const result: unknown = await response.json();
        if (!Array.isArray(result)) {
          throw new Error("Invalid data format from API");
        }

        const validatedData = result.map((item) => item as ApiResponse);
        localStorage.setItem("products", JSON.stringify(validatedData));
        setData(validatedData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (productId: number) => {
    navigate(`/women/product/${productId}`);
  };

  if (loading) return <p>Loading... <span className="spinner">⏳</span></p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      {data
        .filter(item => selectedIds.includes(item.id))
        .map((item) => (
          <div className={styles.containerProduct} key={item.id}>
            <img 
              className={styles.image} 
              src={item.image} 
              alt={item.title} 
              onClick={() => handleImageClick(item.id)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
    </div>
  );
};

export default ApiComponentWomen;