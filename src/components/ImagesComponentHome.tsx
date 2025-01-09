import React from "react";
import styles from "./ImagesComponentHome.module.css";
import { useNavigate } from "react-router-dom";

import foto1 from '../assets/imagesHome/1.jpg'
import foto2 from '../assets/imagesHome/2.jpg'
import foto3 from '../assets/imagesHome/3.jpg'
import foto4 from '../assets/imagesHome/4.jpg'
import foto5 from '../assets/imagesHome/5.jpg'
import foto6 from '../assets/imagesHome/6.jpg'
import foto7 from '../assets/imagesHome/7.jpg'

export type ApiResponse = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const products = [
  {
    id: 111,
    name: "Sofa",
    image: foto1,
    price: 100,
    description: 'aaaa'
  },
  {
    id: 112,
    name: "Product 3",
    image: foto2,
    price: 100,
    description: 'aaaa'
  },
  {
    id: 113,
    name: "Product 3",
    image: foto3,
    price: 100,
    description: 'aaaa'
  },
  {
    id: 114,
    name: "Product 4",
    image: foto4,
    price: 100,
    description: 'aaaa'
  },
  {
    id: 115,
    name: "Product 4",
    image: foto5,
    price: 100,
    description: 'aaaa'
  },
  {
    id: 116,
    name: "Product 4",
    image: foto6,
    price: 100,
    description: 'aaaa'
  },
  {
    id: 117,
    name: "Product 4",
    image: foto7,
    price: 100,
    description: 'aaaa'
  },
]

const ImagesComponentHome: React.FC = () => {

  const navigate = useNavigate();

  const handleImageClick = (productId: number) => {
    const product = products.find(p => p.id === productId);
    navigate(`/product/${productId}`, { state: { product } });
  };
  
  return (
    <div className={styles.container}>
        {products.map((product => (
          <div className={styles.containerProduct} key={product.id}>
          {/* <h3 className={styles.title}>{product.name}</h3> */}
          <img onClick={() => handleImageClick(product.id)}
          className={styles.image} src={product.image} alt={product.name} />
          {/* <p className={styles.price}>Price: ${product.price}</p> */}
          {/* <p className={styles.description}>{product.description}</p> */}
        </div>
        )))}
        
    </div>
  );
}

export default ImagesComponentHome;

