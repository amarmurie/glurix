import React from 'react';

const CategoryBox = ({ icon, text }) => (
  <div className="category-box">
    <span style={{ fontSize: '2em' }}>{icon}</span>
    <div>{text}</div>
  </div>
);

export default CategoryBox;