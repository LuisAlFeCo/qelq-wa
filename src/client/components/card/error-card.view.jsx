
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

function errorCardView() {
	let data = this.props.data,
		msg = null,
		msgs = null;

	if(typeof(data) === 'string') {
		msg = data;
	} else if(data.graphQLErrors) {
		msgs = data.graphQLErrors.map(err => err.message);
	} else {
		msg = data.message;
		msgs = data.messages;
	}
	return (
		<div className="error-card">
			<div className="error-card-header">
				<b className="error-card-title"><b>ERROR</b></b>
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
	);
}

/****************************************************************************************/

export default errorCardView;

/****************************************************************************************/
