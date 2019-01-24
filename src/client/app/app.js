
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import ReactDOM from'react-dom';
import { setContext } from 'apollo-link-context';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import Main from './main.jsx';

import config from './config';
import '../styles/app.scss';

/****************************************************************************************/

class App {
	constructor() {
		document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded.bind(this));

		let authLink = setContext((_, { headers }) => {
			const token = localStorage.getItem('authorization');
			return {
				headers: {
					headers,
					authorization: token,
				}
			};
		});

		this.client = new ApolloClient({
			link: authLink.concat(new HttpLink({uri: config.GRAPHQL_API_URL})),
			cache: new InMemoryCache(),
			defaultOptions: {
				watchQuery: {
					fetchPolicy: 'network-only',
					errorPolicy: 'ignore',
				},
				query: {
					fetchPolicy: 'network-only',
					errorPolicy: 'all',
				},
			}
		});
	}

	onDOMContentLoaded() {
		this._mainSection = window.document.getElementById('app-main');
		this.render();
	}

	render() {
		ReactDOM.render(
			<ApolloProvider client={this.client}>
				<BrowserRouter><Main/></BrowserRouter>
			</ApolloProvider>
			, this._mainSection);
	}
}

/****************************************************************************************/

new App();

/****************************************************************************************/
