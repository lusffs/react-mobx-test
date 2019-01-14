import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { appState } from './AppState'


@observer
class ButtonForm extends Component {
  
  render() {
    return (
      <div>
        <button onClick={ () => { appState.increaseClickCount() } }>KLICKA Från form</button>
      </div>
    );
  }
}

export default ButtonForm;
