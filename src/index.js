// let's go!
// begin with 25

import React from 'react';
import { render } from 'react-dom'; // react-dom render method only, import ReactDOM from 'react-dom'; // if we wanted the whole package
// import { BrowserRouter, Match, Miss } from 'react-router'; // if doing Routing from this file.

import './css/style.css';
import Routes from './components/Routes';


// import App from './components/App';
// import StorePicker from './components/StorePicker';
// import Order from './components/Order';
// import NotFound from './components/NotFound';

// const Routes = () => {
// 	return (
// 		<BrowserRouter>
// 			<div>
// 				<Match exactly pattern="/" component={StorePicker} />
// 				<Match exactly pattern="/store/:storeId" component={App} />
// 				<Match exactly pattern="/order" component={Order} />
// 				<Miss component={NotFound} />
// 			</div>
// 		</BrowserRouter>
// 	)
// }

render(<Routes/>, document.getElementById('main'));