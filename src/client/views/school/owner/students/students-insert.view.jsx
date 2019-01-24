
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import StudentsRegisterForm from '../../../../modules/school/owner/students/students-register-form';

/****************************************************************************************/

function studentsInsertView() {
	return (
		<div className="students-insert-container">
			<div className="school-register-row school-register-title">
				<h3>Registrar nuevo estudiante</h3>
				<span>Ingrese los datos para el nuevo estudiante. Los campos marcados con (*) son obligatorios</span>
			</div>
			<StudentsRegisterForm mutation={this.mutation} onCancel={this.onCancel.bind(this)} onSubmit={this.onSubmit.bind(this)}/>
		</div>
	);
}

/****************************************************************************************/

export default studentsInsertView;

/****************************************************************************************/
