
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Mutation } from 'react-apollo';

import ErrorCard from '../../components/card/error-card.component';
import IconMain from '../../../both/components/icons/icon-main.jsx';

/****************************************************************************************/

function verifyEmailView() {
	let user = window.user,
		hash = this.props.match.params.hash;

	if(hash) {
		return (
			<main>
				<div className="verify-email-container">
					<div className="card">
						<div>
							<IconMain className="verify-email-icon"/>
						</div>
						<h4>Verificación de correo electrónico</h4>
						<Mutation mutation={this.mutation.verifyEmail} errorPolicy="all">
							{(mutation, { loading, error, data }) => {
								let loadMsg = (<p>Gracias por unirte a Qelq. Por favor espere mientras verificamos tu dirección de correo electrónico.</p>);
								if(this.state.sentVerify) {
									if(loading) return loadMsg;
									if(error) return (<ErrorCard data={error}/>);
									if(data && data.verifyEmail) return user.login(data.verifyEmail.authorization, '/cuenta/perfil');
									return (<ErrorCard data="Error al verificar."/>);
								} else {
									this.state.sentVerify = true;
									setTimeout(() => { mutation({ variables: { hash }}); }, 2000);
									return loadMsg;
								}
							}}
						</Mutation>
					</div>
				</div>
			</main>
		);
	} else {
		return (
			<main>
				<div className="verify-email-container">
					<div className="card">
						<div>
							<IconMain className="verify-email-icon"/>
						</div>
						<h4>Confirma tu dirección de correo electrónico</h4>
						<p>Gracias por unirte a Qelq. Acabamos de enviarte un mensaje de confirmación a <span className="verify-email">{user.email}</span>.</p>
						<p>Haz clic en el enlace de confirmación del mensaje para completar tu registro.</p>

						<Mutation mutation={this.mutation.resendConfirmationMessage} errorPolicy="all">
							{(mutation, { loading, error, data }) => {
								if(error) return (<ErrorCard data={error}/>);
								if(this.state.sentMail) return (
									<div>
										<p>¿No reciviste el email de confirmación?</p>
										<div>
											<button onClick={this.onResend.bind(this, mutation)}>
												Reenviar email de confirmación
											</button>
										</div>
									</div>
								);
								return null;
							}}
						</Mutation>
					</div>
				</div>
			</main>
		);
	}
}

/****************************************************************************************/

export default verifyEmailView;

/****************************************************************************************/
