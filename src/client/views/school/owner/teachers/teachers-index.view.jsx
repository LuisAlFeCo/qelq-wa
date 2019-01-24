
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import ErrorModal from '../../../../components/modal/error/error-modal.component';

/****************************************************************************************/

function teachersIndexView() {
	let schoolId = this.props.match.params.ue,
		stds = [{}, {}];

	return (
		<div className="container">
			
			<div className="school-register-row school-register-title">
				<h3>Lista de docentes</h3>
				<span>Dar continuidad, iniciar o aprobar una solicitud de acceso</span>
			</div>

			<div className="student-tools-section">
				<div className="access-list-filter-section">

				</div>
				<div style={{width: '12rem'}}>
					<Link className="button" to={`/ue/${schoolId}/docentes/nuevo`}>Nuevo registro</Link>
				</div>
			</div>



		</div>
	);
}

/****************************************************************************************/

export default teachersIndexView;

/****************************************************************************************/
