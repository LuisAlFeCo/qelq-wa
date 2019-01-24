
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import SchoolOwnerIndex from '../../modules/school/owner/school-owner-index';
//import TeacherIndex from '../../modules/school/teacher/teacher-index';

import LoaderModal from '../../components/modal/loader/loader-modal.component';
import ErrorModal from '../../components/modal/error/error-modal.component';

/****************************************************************************************/

class School extends React.Component {
	constructor(props) {
		super(props);

		this.query = gql`
			query q($schoolId: String!) {
				userSchool(identifier: $schoolId) { userRole }
			}
		`;
	}

	render() {
		let schoolId = this.props.match.params.ue;

		return (
			<Query query={this.query} variables={{ schoolId }} errorPolicy="all">
				{({ loading, error, data }) => {
					if(loading) return (
						<LoaderModal visible={true}/>
					);
					if(error) return (
						<ErrorModal data={error} accept={false}/>
					);

					switch(data.userSchool.userRole) {
					case 'owner':
						return (<SchoolOwnerIndex schoolId={schoolId}/>);
					default:
						return (<ErrorModal data={`Rol de usuario desconocido para la unidad educativa "${schoolId}"`} accept={false}/>);
					}

					//if(sb.userRole === 'owner') return (<AdmIndex school={sb}/>);
					//if(sb.userRole === 'teacher') return (<TeacherIndex school={sb}/>);
				}}
			</Query>
		);
	}
}

/****************************************************************************************/

export default School;

/****************************************************************************************/
