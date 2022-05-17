import React from 'react'

import './menu-item.styles.scss'

function MenuItem({title,imageUrl,size}) {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className={size==='large'?'large-content':'content'}>
          <div className="title">{title.toUpperCase()}</div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  );
}

export default MenuItem