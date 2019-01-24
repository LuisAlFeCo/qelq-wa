
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';

import studentsInsertView from '../../../../views/school/owner/students/students-insert.view.jsx';

/****************************************************************************************/

class StudentsInsert extends React.Component {
	constructor(props) {
		super(props);

		this.mutation = gql`
			mutation m($schoolId: String!, $data: IStudent!) {
				insertStudent(schoolId: $schoolId, data: $data) { rude }
			}
		`;
	}

	onSubmit(data, mutation) {
		let schoolId = this.props.match.params.ue;

		mutation({ variables: { schoolId, data } })
			.then(result => {
				//window.user.goto(`/ue/${schoolId}/estudiantes`);
				this.props.history.goBack();
			});
	}

	onCancel() {
		this.props.history.goBack();
	}

	render() {
		return studentsInsertView.call(this);
	}
}

/****************************************************************************************/

export default StudentsInsert;

/****************************************************************************************/
