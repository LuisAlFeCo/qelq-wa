
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';

import studentsUpdateView from '../../../../views/school/owner/students/students-update.view.jsx';

/****************************************************************************************/

class StudentsUpdate extends React.Component {
	constructor(props) {
		super(props);

		this.query = gql`
			query q($schoolId: String!, $rude: String!) {
				student(schoolId: $schoolId, rude: $rude) {
					rude ci firstName lastName1 lastName2 sex birdDate
				}
			}
		`;

		this.mutation = gql`
			mutation m($schoolId: String!, $rude: String!, $data: IStudent!) {
				updateStudent(schoolId: $schoolId, rude: $rude, data: $data) { rude }
			}
		`;
	}

	onSubmit(data, mutation) {
		let schoolId = this.props.match.params.ue,
			rude = this.props.match.params.rude;

		mutation({ variables: { schoolId, rude, data } })
			.then(result => {
				this.props.history.goBack();
			});
	}

	onCancel() {
		this.props.history.goBack();
	}

	render() {
		return studentsUpdateView.call(this);
	}
}

/****************************************************************************************/

export default StudentsUpdate;

/****************************************************************************************/
