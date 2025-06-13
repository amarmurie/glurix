import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

// بيانات تجريبية للمنتجات
const products = [
  { id: 1, name: "Dress Elegant", price: 120, desc: "Elegant dress for special occasions." },
  { id: 2, name: "Men's Sneakers", price: 85, desc: "Comfortable sneakers for daily use." },
  { id: 3, name: "Smartphone X", price: 999, desc: "Latest technology smartphone." },
  { id: 4, name: "Face Cream", price: 32, desc: "Premium face cream." },
  { id: 5, name: "Coffee Machine", price: 450, desc: "Brew your favorite coffee at home." },
];

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <section className="about">
      <h2>{product.name}</h2>
      <div style={{ fontSize: "1.2em", margin: "10px 0" }}>{product.desc}</div>
      <div style={{ fontWeight: "bold", marginBottom: 20 }}>${product.price}</div>
      <button onClick={() => addToCart(product)} style={{ background: "#00b4d8", color: "#fff", border: "none", padding: "10px 22px", borderRadius: "8px" }}>
        Add to Cart
      </button>
    </section>
  );
};

export default Product;