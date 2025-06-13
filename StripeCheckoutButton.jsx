import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_YourStripePublicKey"); // ضع مفتاحك هنا

export default function StripeCheckoutButton({ amount }) {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    // عادة ترسل طلب للباك اند ليُنشئ لك Session حقيقي
    const response = await fetch("/api/stripe/create-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount })
    });
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <button onClick={handleCheckout} style={{ background: "#635bff", color: "#fff", padding: 12, borderRadius: 8, fontWeight: "bold", margin: 8 }}>
      دفع بالبطاقة البنكية (Stripe)
    </button>
  );
}