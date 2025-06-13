import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, img, rating }) => (
  <div className="product-card">
    <Link to={`/product/${id}`}>
      <img src={img} alt={name} style={{ width: "100%", borderRadius: 8 }} />
      <div style={{ fontWeight: "bold", marginTop: 8 }}>{name}</div>
      <div style={{ color: "#00b4d8", fontWeight: "bold" }}>{price} ﷼</div>
      <div style={{ color: "#FFD700" }}>★ {rating}</div>
    </Link>
  </div>
);

export default ProductCard;