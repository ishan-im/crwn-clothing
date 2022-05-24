
import React, { Component } from 'react'

import shopData from './shop.data'

export class ShopComponent extends Component {
  constructor(props){
      super(props);

      this.state = {

        collections: shopData


      }
  }

  render() {
    return (
      <div>ShopComponent</div>
    )
  }
}

export default ShopComponent