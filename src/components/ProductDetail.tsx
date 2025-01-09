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
  { id: 111, name: "Sofá de Esquina", image: foto1, price: 799.99, description: 'Sofá de esquina moderno y cómodo, ideal para salas de estar amplias.', title: 'Sofá de Esquina', category: 'Sala de estar' },
  { id: 112, name: "Mesa de Comedor", image: foto2, price: 599.99, description: 'Mesa de comedor de madera robusta con espacio para seis personas.', title: 'Mesa de Comedor', category: 'Comedor' },
  { id: 113, name: "Cama King Size", image: foto3, price: 129.99, description: 'Cama king size con cabecera tapizada y estructura de madera sólida.', title: 'Silla de Oficina', category: 'Oficina' },
  { id: 114, name: "Cama King Size", image: foto4, price: 899.99, description: 'Cama king size con cabecera tapizada y estructura de madera sólida.', title: 'Cama King Size', category: 'Dormitorio' },
  { id: 115, name: "Mesa de Centro", image: foto5, price: 149.99, description: 'Mesa de centro minimalista con diseño moderno y acabados en vidrio.', title: 'Mesa de Centro', category: 'Sala de estar' },
  { id: 116, name: "Estantería Modular", image: foto6, price: 199.99, description: 'Estantería modular con múltiples compartimentos para almacenamiento.', title: 'Estantería Modular', category: 'Almacenamiento' },
  { id: 117, name: "Lámpara de Pie", image: foto7, price: 89.99, description: 'Lámpara de pie elegante con luz regulable y diseño contemporáneo.', title: 'Lámpara de Pie', category: 'Iluminación' },
];



const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className={styles.detailContainer}>
      <button 
        onClick={() => navigate(-1)}
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
