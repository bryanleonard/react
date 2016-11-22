// let's go!
// begin with 9 Routing

import React from 'react';
import { render } from 'react-dom'; // react-dom render method only
// import ReactDOM from 'react-dom'; // if we wanted the whole package
import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';;

render(<App/>, document.getElementById('main'));