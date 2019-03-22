import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {StyleSheet} from 'react-native';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './src/Router';

export default class App extends React.Component {

  componentWillMount() {
  }

  render() {
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
