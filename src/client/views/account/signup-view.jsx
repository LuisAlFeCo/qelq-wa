
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import ErrorCard from '../../components/card/error-card.component';
import ModalLoader from '../../components/loader/modal-loader.component';

import IconMain from '../../../both/components/icons/icon-main.jsx';

/****************************************************************************************/

function signUpView() {
	let inputs = {},
		ps = this.state.passwordStrength, psc = this.state.passwordStrengthColor,
		v = this.state.validations;

	return (
		<main>
			<div className="signup-header">
				<Link to="/">
					<IconMain className="signup-icon"/>
				</Link>
				<div>
					<h4>Regístrate en Qelq</h4>
				</div>
			</div>
			<Mutation mutation={this.mutation} errorPolicy="all">
				{(mutation, { loading, error, data }) => (
					<div className="signup-container">
						{
							loading ? <ModalLoader visible={true}/> : null
						}
						{
							error ? <ErrorCard data={error}/> : null
						}
						{
							data && data.signUp ?
								window.user.login(data.signUp.authorization, '/registro/verificar') : null
						}
						<div className="card">
							<form onSubmit={this.onSubmit.bind(this, inputs, mutation)}>
								<div>
									<h6>Datos personales</h6>
								</div>
								<div className="input-group">
									<input ref={node => { inputs.firstName = node; }} type="text" placeholder="Nombre"/>
									<label className="input-label">Nombre</label>
									{
										v.firstName ? <label className="input-error-label">{v.firstName}</label> : null
									}
								</div>
								<div className="input-group">
									<input ref={node => { inputs.lastName = node; }} type="text" placeholder="Apellido"/>
									<label className="input-label">Apellido</label>
									{
										v.lastName ? <label className="input-error-label">{v.lastName}</label> : null
									}
								</div>
								<div>
									<h6>Datos de usuario</h6>
								</div>
								<div className="input-group">
									<input ref={node => { inputs.email = node; }} type="email" placeholder="Email"/>
									<label className="input-label">Email</label>
									{
										v.email ? <label className="input-error-label">{v.email}</label> : null
									}
								</div>
								<div className="input-group">
									<input ref={node => { inputs.password = node; }} type="password" placeholder="Contraseña" onChange={this.onPasswordChange.bind(this)}/>
									<label className="input-label">Contraseña</label>
									<div className="password-strength">
										<div style={{width: `${ps}%`, height: '100%', backgroundColor: psc}}></div>
									</div>
									{
										v.password ? <label className="input-error-label">{v.password}</label> : null
									}
								</div>
								<div className="input-group">
									<input ref={node => { inputs.confirmPassword = node; }} type="password" placeholder="Confirmar contraseña"/>
									<label className="input-label">Confirmar contraseña</label>
									{
										v.confirmPassword ? <label className="input-error-label">{v.confirmPassword}</label> : null
									}
								</div>
								<div style={{marginTop: '1.6rem'}}>
									<button className="button">Registrarme</button>
								</div>
							</form>
							<div className="signup-ad">
								<span style={{fontSize: '0.8rem'}}>
									Al registrarte, aceptas nuestros <Link to="/iniciar">Términos de servicio</Link> y la <Link to="/iniciar">Política de privacidad.</Link>
								</span>
							</div>
							<div className="signup-ad">
								<span >
									Ya tienes una cuenta? <Link to="/iniciar">Inicia sesión</Link>
								</span>
							</div>
						</div>
						<div className="signup-trademark">
							<span>
								Retby Software Bolivia &reg; Todos los derechos reservados
							</span>
						</div>
					</div>
				)}
			</Mutation>
		</main>
	);
}

/****************************************************************************************/

export default signUpView;

/****************************************************************************************/
