import React, { useEffect, useState } from "react";

export type ApiResponse = {
  id: number;
  name: string;
  email: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
};

type ApiComponentProps = {
  children: (data: ApiResponse[]) => React.ReactNode;
};

const ApiComponent: React.FC<ApiComponentProps> = ({ children }) => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: ApiResponse[] = await response.json();
        console.log(result);
        setData(result);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <>{children(data)}</>;
};

export default ApiComponent;
