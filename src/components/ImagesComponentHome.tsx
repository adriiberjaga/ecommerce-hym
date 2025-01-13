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

// export type ApiResponse = {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   description: string;
//   image: string;
// };

const products = [
  { id: 111, name: "Planta Decorativa", image: foto1, price: 29.99, description: 'Planta decorativa en maceta negra para añadir frescura a cualquier espacio.', title: 'Planta Decorativa', category: 'Decoración' },
  { id: 112, name: "Comedor moderno", image: foto2, price: 2249.99, description: 'Comedor moderno acogedor con cojines y una mesa rústica.', title: 'Rincón de Lectura', category: 'Sala de estar' },
  { id: 113, name: "Cama king size", image: foto3, price: 999.99, description: 'Cama king size moderna con estantes flotantes.', title: 'Cama king size', category: 'Habitación' },
  { id: 114, name: "Zona de Estudio Infantil", image: foto4, price: 799.99, description: 'Espacio infantil con escritorio, silla y decoración temática.', title: 'Cama Matrimonial', category: 'Dormitorio' },
  { id: 115, name: "Rincón de Lectura Acogedor", image: foto5, price: 549.99, description: 'Rincón de Lectura acogedor con sofa tapizado con estilo contemporáneo.', title: 'Zona de Estudio Infantil', category: 'Habitación infantil' },
  { id: 116, name: "Rincón de Lectura", image: foto6, price: 299.99, description: 'Rincón de lectura tapizado con estilo contemporáneo.', title: 'Sillón de Lectura', category: 'Sala de estar' },
  { id: 117, name: "Mesa Auxiliar de Madera", image: foto7, price: 99.99, description: 'Mesa auxiliar redonda con acabado en madera natural.', title: 'Mesa Auxiliar de Madera', category: 'Mobiliario' }
]

const ImagesComponentHome: React.FC = () => {

  const navigate = useNavigate();

  const handleImageClick = (productId: number) => {
    const product = products.find(p => p.id === productId);
    navigate(`/home/product/${productId}`, { state: { product } });
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

