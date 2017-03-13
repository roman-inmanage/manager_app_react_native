import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import Header from './components/baseComponents/Header';

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyD1MbT6MP1ZLgesx0pe7RmNU3KvFVEIVZY",
      authDomain: "manageapp-c4fe2.firebaseapp.com",
      databaseURL: "https://manageapp-c4fe2.firebaseio.com",
      storageBucket: "manageapp-c4fe2.appspot.com",
      messagingSenderId: "433405974628"
    };
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />

      </Provider>
    );
  }
};

export default App;
