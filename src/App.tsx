import React, { Component } from 'react';
import { observer } from 'mobx-react'
import logo from './logo.svg';
import './App.css';

import ButtonForm from './ButtonForm';
import Product from './Product';

import { appState } from './AppState'


@observer
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>{ appState.numberOfCartItems }</span>
          <ul>
          {
            appState.cartItems.map((c, i) => {
              return <li key={c.id}>{ c.name }</li>
            })
          }
          </ul>
          
          <Product productName="Data" id="0" price={ 100 } />
          <Product productName="TV" id="1" price={ 200 } />
          <Product productName="Tröja" id="2" price={ 300 }/>
          <Product productName="Keps"id="3" price={ 400 } />
          <Product productName="Sko" id="4"  price={ 50 } />

        </header>
      </div>
    );
  }
}

export default App;
