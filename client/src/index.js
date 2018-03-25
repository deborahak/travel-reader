import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './style/index.css';

import App from './containers/App';
import SearchResults from './containers/search_results';
import About from './components/about';
import Faqs from './components/faqs';
import Navbar from './components/navbar';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Navbar/>
				<Route exact={true} path="/" component={App} />
					<Route path="/about" component={About} />
					<Route path="/faqs" component={Faqs} />
					<Route path="/search_results" component={SearchResults} />
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('#root'));

registerServiceWorker();

















