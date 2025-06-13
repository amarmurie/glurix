import React, { useState } from "react";
import StripeCheckoutButton from "../components/StripeCheckoutButton";
import useNotify from "../components/Notify";

export default function Checkout({ total }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [NotifyBar, notify] = useNotify();

  const payOnDelivery = () => {
    notify("تم اختيار الدفع عند الاستلام! سيتم تأكيد الطلب والتواصل معك.");
    // أضف هنا منطق حفظ الطلب في قاعدة البيانات
  };

  const bankTransfer = () => {
    notify("يرجى تحويل المبلغ إلى حسابنا البنكي الآتي: 1234567890 - بنك البلاد");
    // يمكن إرسال إثبات التحويل لاحقاً
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>الدفع</h2>
      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <div
          className={paymentMethod === "card" ? "pay-option active" : "pay-option"}
          onClick={() => setPaymentMethod("card")}
        >
          💳 بطاقة بنكية
        </div>
        <div
          className={paymentMethod === "cod" ? "pay-option active" : "pay-option"}
          onClick={() => setPaymentMethod("cod")}
        >
          📦 عند الاستلام
        </div>
        <div
          className={paymentMethod === "bank" ? "pay-option active" : "pay-option"}
          onClick={() => setPaymentMethod("bank")}
        >
          🏦 تحويل بنكي
        </div>
      </div>
      {paymentMethod === "card" && <StripeCheckoutButton amount={total} />}
      {paymentMethod === "cod" && <button onClick={payOnDelivery} style={{ background: "#00b4d8", color: "#fff", padding: 12, borderRadius: 8, fontWeight: "bold", margin: 8 }}>تأكيد الدفع عند الاستلام</button>}
      {paymentMethod === "bank" && <button onClick={bankTransfer} style={{ background: "#ffc300", color: "#222", padding: 12, borderRadius: 8, fontWeight: "bold", margin: 8 }}>تفاصيل التحويل البنكي</button>}
      {NotifyBar}
    </div>
  );
}