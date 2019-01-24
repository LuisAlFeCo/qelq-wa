
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import guestHomeView from '../../views/guest/guest-home.view.jsx';

/****************************************************************************************/

class GuestHome extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return guestHomeView.call(this);
	}
}

/****************************************************************************************/

export default GuestHome;

/****************************************************************************************/
