import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styles from './ProductDetail.module.css';  // Necesitarás crear este archivo CSS
import { ApiResponse } from './ApiComponentWomen';


import foto1 from '../assets/imagesHome/1.jpg'
import foto2 from '../assets/imagesHome/2.jpg'
import foto3 from '../assets/imagesHome/3.jpg'
import foto4 from '../assets/imagesHome/4.jpg'
import foto5 from '../assets/imagesHome/5.jpg'
import foto6 from '../assets/imagesHome/6.jpg'
import foto7 from '../assets/imagesHome/7.jpg'

const localProducts = [
  { id: 111, name: "Planta Decorativa", image: foto1, price: 29.99, description: 'Planta decorativa en maceta negra para añadir frescura a cualquier espacio.', title: 'Planta Decorativa', category: 'Decoración' },
  { id: 112, name: "Comedor moderno", image: foto2, price: 2249.99, description: 'Comedor moderno acogedor con cojines y una mesa rústica.', title: 'Rincón de Lectura', category: 'Sala de estar' },
  { id: 113, name: "Cama king size", image: foto3, price: 999.99, description: 'Cama king size moderna con estantes flotantes.', title: 'Cama king size', category: 'Habitación' },
  { id: 114, name: "Zona de Estudio Infantil", image: foto4, price: 799.99, description: 'Espacio infantil con escritorio, silla y decoración temática.', title: 'Cama Matrimonial', category: 'Dormitorio' },
  { id: 115, name: "Rincón de Lectura", image: foto5, price: 549.99, description: 'Rincón de Lectura tapizado con estilo contemporáneo.', title: 'Zona de Estudio Infantil', category: 'Habitación infantil' },
  { id: 116, name: "Rincón de Lectura", image: foto6, price: 299.99, description: 'Rincón de lectura tapizado con estilo contemporáneo.', title: 'Sillón de Lectura', category: 'Sala de estar' },
  { id: 117, name: "Mesa Auxiliar de Madera", image: foto7, price: 99.99, description: 'Mesa auxiliar redonda con acabado en madera natural.', title: 'Mesa Auxiliar de Madera', category: 'Mobiliario' },
];



const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false); // Mostrar el mensaje de añadido a la cesta

  useEffect(() => {
    const cachedData = localStorage.getItem("products");
    let foundProduct: ApiResponse | undefined = undefined;

    if (cachedData) {
      const products = JSON.parse(cachedData);
      foundProduct = products.find((p: ApiResponse) => p.id === Number(id));
    }

    if (!foundProduct) {
      const productFromLocal = localProducts.find(p => p.id === Number(id));
      setProduct(productFromLocal || null);
    } else {
      setProduct(foundProduct);
    }
    
    setLoading(false);
  }, [id, location.state]);

  if (loading) return <p>Loading... <span className="spinner">⏳</span></p>;
  if (!product) return <p>Producto no encontrado</p>;

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
  const message = () => {
    setShowMessage(true);  
    setTimeout(() => setShowMessage(false), 3000); 
  };
  return (
    <div className={styles.detailContainer}>
      <button 
        onClick={() => {
          navigate(-1);
        }}
        className={styles.backButton}
      >
        ← Volver
      </button>
      <div className={styles.productDetail}>
        <img src={product.image} alt={product.title} className={styles.detailImage} />
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.category}>Categoría: {product.category}</p>
          <p className={styles.description}>{product.description}</p>
          <button onClick={() => {
          addToCart();
          message()
        }} className={styles.buyBtn}>Añadir a la cesta</button>
              {showMessage && <div className={styles.message}>Producto añadido con éxito</div>}

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
