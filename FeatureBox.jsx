import React from 'react';

const FeatureBox = ({ icon, text }) => (
  <div className="feature-box">
    <span style={{ fontSize: '2em' }}>{icon}</span>
    <div>{text}</div>
  </div>
);

export default FeatureBox;