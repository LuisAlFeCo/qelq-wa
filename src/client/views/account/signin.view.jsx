
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import LoaderModal from '../../components/modal/loader/loader-modal.component';
import ErrorModal from '../../components/modal/error/error-modal.component';

import IconMain from '../../../both/components/icons/icon-main.jsx';

/****************************************************************************************/

function signInView() {
	let v = this.state.validations;

	return (
		<main>
			<div className="signin-header">
				<Link to="/">
					<IconMain className="signin-icon"/>
				</Link>
				<div>
					<h4>Inicia sesión en Qelq</h4>
				</div>
			</div>
			<Mutation mutation={this.mutation} errorPolicy="all">
				{(mutation, { loading }) => (
					<div className="signin-container">

						<LoaderModal visible={loading}/>
						<ErrorModal data={this.state.error}/>

						<div className="card">
							<form onSubmit={this.onSubmit.bind(this, mutation)}>
								<div>
									<h6>Ingresa tu nombre de usuario y contraseña</h6>
								</div>
								<div className="input-group">
									<input type="text" placeholder="Nombre de usuario o email" onChange={this.__setText.bind(this, 'user')}/>
									<label className="input-label">Nombre de usuario o email</label>
									{
										v.user ? <label className="input-error-label">{v.user}</label> : null
									}
								</div>
								<div className="input-group">
									<input type="password" placeholder="Contraseña" onChange={this.__setText.bind(this, 'password')}/>
									<label className="input-label">Contraseña</label>
									{
										v.password ? <label className="input-error-label">{v.password}</label> : null
									}
								</div>
								<div>
									<button className="button">Iniciar</button>
								</div>
							</form>
							<div className="signin-ad">
								<span>
									No tienes una cuenta? <Link to="/registro">regístrate</Link>
								</span>
							</div>
							<div className="signin-trademark">
								<span>Retby Software Bolivia &reg; Todos los derechos reservados</span>
							</div>
						</div>
					</div>
				)}
			</Mutation>
		</main>
	);
}

/****************************************************************************************/

export default signInView;

/****************************************************************************************/
