
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';

import studentsIndexView from '../../../../views/school/owner/students/students-index.view.jsx';

/****************************************************************************************/

class StudentsIndex extends React.Component {
	constructor(props) {
		super(props);

		this.query = gql`
			query q($schoolId: String!) {
				students(schoolId: $schoolId) {
					rude ci firstName lastName1 lastName2 sex birdDate
				}
			}
		`;
	}

	render() {
		return studentsIndexView.call(this);
	}
}

/****************************************************************************************/

export default StudentsIndex;

/****************************************************************************************/
