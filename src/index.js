import React from 'react';
import { render } from 'react-dom';
import ListComponent from './components/ListComponent';
import ListStore from './store';
import { Provider } from 'react-redux';
import './index.css';

const target = document.querySelector('#root');

render(<Provider store={ListStore}><div><ListComponent /></div></Provider>, target);
