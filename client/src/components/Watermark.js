import React from 'react';
import '../styles/Watermark.css';

const Watermark = ({ name }) => {
  return (
    <div className="watermark">
      {name}
    </div>
  );
};

export default Watermark;
