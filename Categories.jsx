import React from "react";
import CategoryBox from "../components/CategoryBox";
import { Link } from "react-router-dom";

const categories = [
  { icon: "👗", text: "Women's Fashion", id: "women" },
  { icon: "👞", text: "Men's Shoes", id: "men" },
  { icon: "💻", text: "Electronics", id: "electronics" },
  { icon: "🧴", text: "Beauty Products", id: "beauty" },
  { icon: "🍽️", text: "Café Equipment", id: "cafe" },
];

const Categories = () => (
  <section className="categories">
    <h2>Categories</h2>
    {categories.map((c) => (
      <Link key={c.id} to={`/categories/${c.id}`}>
        <CategoryBox icon={c.icon} text={c.text} />
      </Link>
    ))}
  </section>
);

export default Categories;