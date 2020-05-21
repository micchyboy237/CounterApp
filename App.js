import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Counter from './src/Counter';
import store from './src/CreateStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
