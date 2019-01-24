
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import errorCardView from './error-card.view.jsx';

/****************************************************************************************/

class ErrorCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return errorCardView.call(this);
	}
}

/****************************************************************************************/

export default ErrorCard;

/****************************************************************************************/
