
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import schoolOwnerIndexView from '../../../views/school/owner/school-owner-index.view.jsx';

/****************************************************************************************/

class SchoolOwnerIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	onLogout() {
		window.user.logout('/iniciar');
	}

	render() {
		return schoolOwnerIndexView.call(this);
	}
}

/****************************************************************************************/

export default SchoolOwnerIndex;

/****************************************************************************************/
