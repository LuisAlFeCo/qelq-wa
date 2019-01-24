
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import express from 'express';

/****************************************************************************************/

class Routes {
	constructor(app) {
		let templates = app.controller.templates;

		this.router = express.Router();

		/*this.router.get('/', templates.main.bind(templates));
		this.router.get('/iniciar', templates.main.bind(templates));
		this.router.get('/registro', templates.main.bind(templates));
		this.router.get('/registro/verificar', templates.main.bind(templates));
		this.router.get('/registro/verificar/:hash', templates.main.bind(templates));

		this.router.get('/cuenta/perfil', templates.main.bind(templates));

		this.router.get('/nuevo', templates.main.bind(templates));

		this.router.get('/ue/:ue', templates.main.bind(templates));
		this.router.get('/ue/:ue/estudiantes/:opt?', templates.main.bind(templates));*/

		this.router.use(templates.main.bind(templates));
	}
}

/****************************************************************************************/

export default Routes;

/****************************************************************************************/
