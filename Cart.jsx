import React from "react";
import { useCart } from "../contexts/CartContext";
import Checkout from "./Checkout";

export default function Cart() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!cart.length) return <p>السلة فارغة.</p>;

  return (
    <div>
      <h2>سلة التسوق</h2>
      {/* ...عرض المنتجات في السلة... */}
      <Checkout total={total} />
    </div>
  );
}