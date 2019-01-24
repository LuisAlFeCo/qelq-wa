
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import http from 'http';
import path from 'path';

import express from 'express';
import jsonfile from 'jsonfile';
import { renderToString } from 'react-dom/server';

import Routes from './routes.js';
import TemplatesController from './controllers/templates-controller';

/****************************************************************************************/

class App {
	constructor() {
		this.config = jsonfile.readFileSync(path.join(__dirname, 'config.json'));

		this.express = express();
		this.express.use(express.static(path.join(__dirname, 'assets')));
		this.express.use(this.onRequest.bind(this));
        
		if(process.env.NODE_ENV) {
			//let webpackConfig = require(path.join(__dirname, 'config.json'));

			//let compiler = webpack(webpackConfig);
		}
		this.init();
	}

	async init() {
		this.controller = {
			templates: new TemplatesController(this)
		};

		let routes = new Routes(this);

		this.express.use('/', routes.router);
        
		this.server = http.createServer(this.express);
		this.server.listen(this.config.port, this.onStart.bind(this));
	}

	onStart() {
		console.log('[INFO]: Server is up and running on port:', this.config.port);
	}

	onRequest(req, res, next) {
		res.render = function(Component) {
			return res.send(renderToString(Component));
		};
        
		next();
	}
}

/****************************************************************************************/

export default App;

/****************************************************************************************/
