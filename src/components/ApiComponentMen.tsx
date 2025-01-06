import React, { useEffect, useState } from "react";
import styles from "./ApiComponentMen.module.css";
export type ApiResponse = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const ApiComponent: React.FC = () => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("products");
        if (cachedData) {
          // Si los datos ya están en localStorage, los usamos directamente
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
  
        // Validar y guardar los datos en el estado
        const validatedData = result.map((item) => {
          // Aquí puedes validar los datos si es necesario
          return item as ApiResponse;
        });
  
        // Guardamos los datos en localStorage
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
  

  if (loading) return <p>Loading... <span className="spinner">⏳</span></p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
    {data.slice(0, 5).map((item) => ( 
        <div className={styles.containerProduct} key={item.id}>
          <h3 className={styles.title}>{item.title}</h3>
          <img className={styles.image} src={item.image} alt={item.title} />
          <p className={styles.price}>Price: ${item.price}</p>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiComponent;
