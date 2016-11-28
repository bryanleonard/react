import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './App';
import StorePicker from './StorePicker';
import Order from './Order';
import NotFound from './NotFound';

const Routes = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" 				 component={StorePicker} />
				<Match exactly pattern="/store/:storeid" component={App} />
				<Match exactly pattern="/order" 		 component={Order} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

export default Routes;