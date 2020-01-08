import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import personReducer from '../src/store/reducer';
import './index.css';
import App from './App';

const store = createStore(personReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
