import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAkv75vy-wR7VgOdnoZWlEHBau-_q4x1IE',
      authDomain: 'scheduler-f826b.firebaseapp.com',
      databaseURL: 'https://scheduler-f826b.firebaseio.com',
      storageBucket: 'scheduler-f826b.appspot.com',
      messagingSenderId: '646933483131'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
