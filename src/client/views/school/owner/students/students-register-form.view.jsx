
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Mutation } from 'react-apollo';

import LoaderModal from '../../../../components/modal/loader/loader-modal.component';
import ErrorModal from '../../../../components/modal/error/error-modal.component';

/****************************************************************************************/

function studentsRegisterForm() {
	let v = this.state.validations,
		dv = this.state.input;

	return (
		<Mutation mutation={this.props.mutation} errorPolicy="all">
			{(mutation, { loading, error, data }) => (
				<div className="student-register-form">

					<LoaderModal visible={loading}/>
					<ErrorModal data={error}/>

					<form onSubmit={this.onSubmit.bind(this, mutation)}>
						<div className="school-register-row school-register-section">
							<div className="input-group">
								<input type="text" placeholder="Nombre" value={dv.firstName} onChange={this.__setText.bind(this, 'firstName')}/>
								<label className="input-label">Nombre (*)</label>
								{
									v.firstName ? <label className="input-error-label">{v.firstName}</label> : null
								}
							</div>
							<div className="input-group">
								<input type="text" placeholder="Apellido paterno" value={dv.lastName1} onChange={this.__setText.bind(this, 'lastName1')}/>
								<label className="input-label">Apellido paterno (*)</label>
								{
									v.lastName1 ? <label className="input-error-label">{v.lastName1}</label> : null
								}
							</div>
							<div className="input-group">
								<input type="text" placeholder="Apellido materno" value={dv.lastName2 || ''} onChange={this.__setText.bind(this, 'lastName2')}/>
								<label className="input-label">Apellido materno</label>
							</div>
						</div>
						<div className="school-register-row school-register-section">
							<div className="input-group input-smw">
								<input type="text" placeholder="RUDE del estudiante" value={dv.rude} onChange={this.__setText.bind(this, 'rude')}/>
								<label className="input-label">RUDE (*)</label>
								{
									v.rude ? <label className="input-error-label">{v.rude}</label> : null
								}
							</div>
							<div className="input-group input-smw">
								<input type="text" placeholder="CI" value={dv.ci || ''} onChange={this.__setText.bind(this, 'ci')}/>
								<label className="input-label">CI</label>
							</div>
						</div>
						<div className="school-register-row school-register-section">
							<div className="input-group">
								<input type="datalist" list="sex-lst" placeholder="Sexo" value={dv.sex} onChange={this.__setText.bind(this, 'sex')}/>
								<datalist id="sex-lst">
									<option value="Masculino"/>
									<option value="Femenino"/>
								</datalist>
								<label className="input-label">Sexo (*)</label>
								{
									v.sex ? <label className="input-error-label">{v.sex}</label> : null
								}
							</div>
							<div className="input-group input-smw">
								<input type="date" placeholder="Fecha de nacimiento" value={this.__stdDate(dv.birdDate)} onChange={this.__setDate.bind(this, 'birdDate')}/>
								<label className="input-label">Fecha de nacimiento (*)</label>
								{
									v.birdDate ? <label className="input-error-label">{v.birdDate}</label> : null
								}
							</div>
						</div>
						<div className="row school-register-row school-register-section">
							<div className="col s6">
								<button type="submit" className="button">Guardar</button>
							</div>
						</div>
					</form>
				</div>
			)}
		</Mutation>
	);
}

/****************************************************************************************/

export default studentsRegisterForm;

/****************************************************************************************/
