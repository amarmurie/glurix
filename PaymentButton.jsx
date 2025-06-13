import React from "react";

// في التطبيق الفعلي: اربط مع backend لإتمام الدفع الحقيقي
const PaymentButton = ({ total }) => {
  const handlePay = () => {
    alert(`جارٍ تحويلك لبوابة الدفع لإتمام عملية بقيمة ${total} ريال`);
    // هنا ترسل الطلب للباك اند ليعيد عليك رابط الدفع من Stripe أو PayPal
  };

  return (
    <button onClick={handlePay} style={{ marginTop: 16, background: "#28a745", color: "#fff", padding: "10px 22px", borderRadius: 8 }}>
      الدفع الآمن
    </button>
  );
};

export default PaymentButton;