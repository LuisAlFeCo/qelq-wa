
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

function loaderModalView() {
	return this.props.visible ? (
		<div className="modal-loader">
			<div className="loader"></div>
		</div>
	) : null;
}

/****************************************************************************************/

export default loaderModalView;

/****************************************************************************************/
