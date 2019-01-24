
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import IconError from '../../../../both/components/icons/icon-error.jsx';

/****************************************************************************************/

function errorModalView() {
	let data = this.state.data,
		msg = null,
		msgs = null;

	if(!data) return null;

	if(typeof(data) === 'string') {
		msg = data;
	} else if(data.graphQLErrors.length) {
		msgs = data.graphQLErrors.map(err => err.message);
	} else if(data.message.indexOf('Network error') > -1) {
		msg = 'Error de red: No se encontró el servidor o no se tiene acceso a internet.';
	} else {
		msg = data.message;
		msgs = data.messages;
	}

	return (
		<div className="modal error-modal">
			<div className="error-card">
				<div className="error-card-head">
					<div>
						<h5>Gestión de errores</h5>
					</div>
				</div>
				<div className="error-card-body">
					<div>
						<IconError/>
					</div>
					<div>
						<ul>
							{ msg ? <li><span>{msg}</span></li>:null }
							{
								msgs ? msgs.map((_msg, i) => (<li key={i}><span>{_msg}</span></li>)) : null
							}
						</ul>
					</div>
				</div>
				<div className="error-card-foot">
					<div></div>
					{
						this.props.accept ?
							<div>
								<button onClick={this.onClose.bind(this)}>Aceptar</button>
							</div> : null
					}
				</div>
			</div>
		</div>
	);
}

/****************************************************************************************/

export default errorModalView;

/****************************************************************************************/
