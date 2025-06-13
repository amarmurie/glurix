import React from "react";

// بيانات أوامر وهمية
const orders = [
  { id: 1, date: "2025-06-13", status: "قيد الشحن", tracking: "TRK123456" },
  { id: 2, date: "2025-06-10", status: "تم التوصيل", tracking: "TRK654321" },
];

export default function Orders() {
  return (
    <div style={{ padding: 32 }}>
      <h2>طلباتي</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#e3f6fd" }}>
            <th>رقم الطلب</th>
            <th>التاريخ</th>
            <th>الحالة</th>
            <th>تتبع الشحنة</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} style={{ textAlign: "center" }}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <a href={`https://track.example.com/${order.tracking}`} target="_blank" rel="noopener noreferrer">
                  {order.tracking}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}