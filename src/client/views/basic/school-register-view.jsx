
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Mutation } from 'react-apollo';

import ErrorModal from '../../components/modal/error/error-modal.component';
import LoaderModal from '../../components/modal/loader/loader-modal.component';

/****************************************************************************************/

function schoolRegisterView() {
	let inputs = {},
		f = this.state.form,
		v = f.validations;

	return (
		<Mutation mutation={this.mutation} errorPolicy="all">
			{(mutation, { loading, error, data }) => (
				<div className="school-register-container">

					<LoaderModal visible={loading}/>
					<ErrorModal data={error}/>

					<div className="school-register-row school-register-title">
						<h3>Registrar nueva Unidad Educativa</h3>
						<span>Una Unidad Educativa es una organización formado por docentes, estudiantes cursos y materias</span>
					</div>
					{
						data && data.createSchool ? window.user.goto('/cuenta/perfil') : null
					}
					<form onSubmit={this.onSubmit.bind(this, inputs, mutation)}>
						<div className="school-register-row school-register-section">
							<div className="input-group">
								<input ref={node => { inputs.name = node; }} type="text" name="schname"/>
								<label className="input-label" htmlFor="schname">Nombre</label>
								{
									v.name ? <label className="input-error-label">{v.name}</label> : null
								}
							</div>
							<span>El nombre completo de la Unidad Educativa</span>

							<div className="input-group">
								<input ref={node => { inputs.identifier = node; }} type="text" name="schid" className="school-id-input"/>
								<label className="input-label" htmlFor="schid">Identificador</label>
								{
									v.identifier ? <label className="input-error-label">{v.identifier}</label> : null
								}
							</div>
							<span>El identificador es un nombre abreviado para la Unidad Educativa</span>
						</div>
						<div className="school-register-row school-register-section">
							<div className="input-group">
								<input ref={node => { inputs.regCode = node; }} type="text" name="schac" className="school-id-input"/>
								<label className="input-label" htmlFor="schac">Código de registro</label>
								{
									v.registerCode ? <label className="input-error-label">{v.registerCode}</label> : null
								}
							</div>
							<span>Ingrese el código de registro. Para saber cómo obtener un código de registro haga clic aquí</span>
						</div>

						<div className="school-register-row school-register-section">
							<button className="button-r">Registrar</button>
						</div>
					</form>
				</div>
			)}
		</Mutation>
	);
}

/****************************************************************************************/

export default schoolRegisterView;

/****************************************************************************************/
