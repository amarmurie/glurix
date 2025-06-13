import React from "react";
import BannerSlider from "../components/BannerSlider";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const categories = [
  { id: 'electronics', name: "إلكترونيات", icon: "💻" },
  { id: 'fashion', name: "أزياء", icon: "👗" },
  { id: 'beauty', name: "تجميل", icon: "🧴" },
  { id: 'home', name: "منزل", icon: "🏠" },
];

const hotProducts = [
  { id: 1, name: "ساعة ذكية", price: 299, img: "/product1.jpg", rating: 4.3 },
  { id: 2, name: "حذاء رجالي", price: 120, img: "/product2.jpg", rating: 4.7 },
  { id: 3, name: "ماكينة قهوة", price: 850, img: "/product3.jpg", rating: 4.5 },
  { id: 4, name: "قميص نسائي", price: 80, img: "/product4.jpg", rating: 4.6 },
];

const Home = () => (
  <div>
    <BannerSlider />
    <section style={{ textAlign: "center", margin: "40px 0" }}>
      <h2>تسوق حسب التصنيف</h2>
      <div>
        {categories.map((cat) => (
          <Link key={cat.id} to={`/category/${cat.id}`}>
            <CategoryCard name={cat.name} icon={cat.icon} />
          </Link>
        ))}
      </div>
    </section>
    <section style={{ textAlign: "center", margin: "40px 0" }}>
      <h2>عروض اليوم</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {hotProducts.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  </div>
);

export default Home;