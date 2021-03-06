
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import basicHomeView from '../../views/basic/basic-home-view.jsx';

/****************************************************************************************/

class BasicHome extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return basicHomeView.call(this);
	}
}

/****************************************************************************************/

export default BasicHome;

/****************************************************************************************/
