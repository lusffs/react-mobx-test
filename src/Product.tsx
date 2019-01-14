import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { appState } from './AppState'
import CartItem from './CartItem'

@observer
class Product extends Component<{productName: string, id: string, price: number}> {
  
  render() {
    return (
      <div>
        <h2>{ this.props.productName }</h2>
        <button onClick={ () => { appState.addToCart(new CartItem(this.props.productName, this.props.id, this.props.price)) }}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;
