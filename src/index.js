// let's go!
// begin with 5

import React from 'react';
import { render } from 'react-dom'; // react-dom render method only
// import ReactDOM from 'react-dom'; // if we wanted the whole package

import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.getElementById('main'));