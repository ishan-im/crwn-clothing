import React from 'react'

import {withRouter} from 'react'

import './menu-item.styles.scss'

function MenuItem({title,imageUrl,size, history,linkUrl,match}) {
  return (
    <div className={`menu-item ${size}` } onclick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className={'content'}>
          <div className="title">{title.toUpperCase()}</div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MenuItem) 