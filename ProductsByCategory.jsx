import React from "react";
import { useParams, Link } from "react-router-dom";

// بيانات تجريبية للمنتجات
const products = [
  { id: 1, name: "Dress Elegant", price: 120, category: "women" },
  { id: 2, name: "Men's Sneakers", price: 85, category: "men" },
  { id: 3, name: "Smartphone X", price: 999, category: "electronics" },
  { id: 4, name: "Face Cream", price: 32, category: "beauty" },
  { id: 5, name: "Coffee Machine", price: 450, category: "cafe" },
];

const ProductsByCategory = () => {
  const { id } = useParams();
  const filtered = products.filter((p) => p.category === id);

  return (
    <section className="categories">
      <h2>Products</h2>
      {filtered.length === 0 && <p>No products found.</p>}
      {filtered.map((p) => (
        <Link key={p.id} to={`/product/${p.id}`}>
          <div className="category-box">
            <div style={{ fontWeight: "bold" }}>{p.name}</div>
            <div>${p.price}</div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProductsByCategory;