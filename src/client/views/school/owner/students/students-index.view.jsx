
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

function studentsIndexView() {
	let schoolId = this.props.match.params.ue,
		stds = [{}, {}];

	return (
		<div className="container">
			
			<div className="school-register-row school-register-title">
				<h3>Lista de estudiantes</h3>
				<span>Dar continuidad, iniciar o aprobar una solicitud de acceso</span>
			</div>

			<div className="student-tools-section">
				<div className="access-list-filter-section">

				</div>
				<div style={{width: '12rem'}}>
					<Link className="button" to={`/ue/${schoolId}/estudiantes/nuevo`}>Nuevo registro</Link>
				</div>
			</div>

			<Query query={this.query} variables={{schoolId}}>
				{({ loading, error, data }) => {
					if(loading) return (<div>Loading...</div>);
					if(error) return (<ErrorModal data={error}/>);

					return (
						<div>
							{
								data.students.map((st, i) => (
									<div key={i} className="student-item">
										<div>
											<img src="/images/user.png" alt=""/>
										</div>
										<div>
											<div className="student-item-name">
												<Link to={`/ue/${schoolId}/estudiantes/${st.rude}`}>
													{st.lastName1} {st.lastName2} {st.firstName}
												</Link>
											</div>
											<div className="student-item-summary">
												<span>RUDE: {st.rude}</span>
												{
													st.ci ? <span>CI: {st.ci}</span> : null
												}
											</div>
										</div>
									</div>
								))
							}
						</div>
					);
				}}
			</Query>

			
		</div>
	);
}

/****************************************************************************************/

export default studentsIndexView;

/****************************************************************************************/
