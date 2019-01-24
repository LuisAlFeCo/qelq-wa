
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import schoolOwnerHomeView from '../../../views/school/owner/school-owner-home.view.jsx';

/****************************************************************************************/

class SchoolOwnerHome extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return schoolOwnerHomeView.call(this);
	}
}

/****************************************************************************************/

export default SchoolOwnerHome;

/****************************************************************************************/
