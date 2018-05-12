import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './containers/App';
import SearchResults from './containers/search_results';
import About from './components/about';
import Faqs from './components/faqs';
import Navbar from './components/navbar';
import Footer from './components/footer';

import reducers from './reducers';
import promise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';

import './style/index.css';
import red from "material-ui/colors/red";

const primary = red[500]; // #F44336

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


const style = {
	backgroundColor: primary,
};

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div style={style}>
				<Navbar/>
				<Route exact={true} path="/" component={App} />
				<Route path="/about" component={About} />
				<Route path="/faqs" component={Faqs} />
				<Route path="/search_results" component={SearchResults} />
				<Footer/>
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('#root'));

registerServiceWorker();

















