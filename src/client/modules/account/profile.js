
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';

import profileView from '../../views/account/profile-view.jsx';

/****************************************************************************************/

class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.query = gql`
			query q {
				membershipSchools { identifier name userRole }
			}
		`;
	}

	render() {
		return profileView.call(this);
	}
}

/****************************************************************************************/

export default Profile;

/****************************************************************************************/
