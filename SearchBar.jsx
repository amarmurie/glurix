import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const nav = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) nav(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} style={{ display: "flex", justifyContent: "center", margin: 12 }}>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="ابحث عن منتج..." style={{ padding: 8, width: 250 }} />
      <button type="submit" style={{ marginLeft: 8, padding: 8, background: "#00b4d8", color: "#fff", border: "none", borderRadius: 6 }}>بحث</button>
    </form>
  );
};

export default SearchBar;