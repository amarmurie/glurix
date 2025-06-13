import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/fakeApi";
import { useCart } from "../contexts/CartContext";
import useNotify from "../components/Notify";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [NotifyBar, notify] = useNotify();

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>جارٍ التحميل...</p>;

  return (
    <div style={{ display: "flex", gap: 32, padding: 24 }}>
      <img src={product.img} alt={product.name} style={{ width: 320, borderRadius: 12 }} />
      <div>
        <h2>{product.name}</h2>
        <div>★ {product.rating}</div>
        <div style={{ color: "#00b4d8", fontWeight: "bold", fontSize: 24 }}>{product.price} ﷼</div>
        <p>{product.desc}</p>
        <button onClick={() => { addToCart(product); notify("تمت الإضافة للسلة!"); }}
          style={{ background: "#00b4d8", color: "#fff", border: "none", padding: "10px 22px", borderRadius: "8px" }}>
          أضف للسلة
        </button>
        {NotifyBar}
      </div>
    </div>
  );
}