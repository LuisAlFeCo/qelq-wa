
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Query } from 'react-apollo';

import LoaderModal from '../../../../components/modal/loader/loader-modal.component';
import ErrorModal from '../../../../components/modal/error/error-modal.component';

import StudentsRegisterForm from '../../../../modules/school/owner/students/students-register-form';

/****************************************************************************************/

function studentsInsertView() {
	let schoolId = this.props.match.params.ue,
		rude = this.props.match.params.rude;

	return (
		<div className="students-insert-container">
			<div className="school-register-row school-register-title">
				<h3>Actualizar datos de estudiante</h3>
				<span>Ingrese los datos del estudiante. Los campos marcados con (*) son obligatorios</span>
			</div>
			<Query query={this.query} variables={{schoolId, rude}}>
				{({ loading, error, data }) => {

					if(loading) return (<LoaderModal visible={loading}/>);
					if(error) return (<ErrorModal data={error}/>);
			
					return (
						<StudentsRegisterForm
							mutation={this.mutation}
							onCancel={this.onCancel.bind(this)}
							onSubmit={this.onSubmit.bind(this)}
							defaultValues={data.student}/>
					);
				}}
			</Query>
		</div>
	);
}

/****************************************************************************************/

export default studentsInsertView;

/****************************************************************************************/
