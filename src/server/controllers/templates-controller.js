
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import MainView from '../views/main-view.jsx';

/****************************************************************************************/

class TemplatesController {
	constructor(app) {
	}

	main(req, res) {
		res.render(<MainView title="QELQ"/>);
	}
}

/****************************************************************************************/

export default TemplatesController;

/****************************************************************************************/
