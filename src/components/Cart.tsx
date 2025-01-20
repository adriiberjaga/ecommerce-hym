import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css'; // Archivo de estilos, si tienes uno.

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity: number; 
}

const Cart: React.FC = () => {
  const noFinish = true

  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(product => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const updateItems = (id: number) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(item => item.id === id);
    
    if (productIndex >= 0) {
      updatedCart[productIndex].quantity += 1;
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  
  const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  if (cart.length === 0) {
    return <p  className={styles.cartContainer}>Tu carrito está vacío.</p>;
  }

  if (noFinish) {
    return (
      <p className={styles.cartContainer}>Cart in process</p>
    );
  } else {
    return (
      <div className={styles.cartContainer}>
      <h1>Carrito de Compras</h1>
      {cart.map(product => (
  <div key={product.id} className={styles.cartItem}>
    <img src={product.image} alt={product.title} className={styles.cartImage} />
    <div className={styles.cartDetails}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <p>Cantidad: {product.quantity}</p>
      <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
      <button onClick={() => updateItems(product.id)}>Agregar uno más</button>
    </div>
  </div>
))}

        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
    )
  }
};

export default Cart;
