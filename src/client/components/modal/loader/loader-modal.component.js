
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import loaderModalView from './loader-modal.view.jsx';

/****************************************************************************************/

class LoaderModal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return loaderModalView.call(this);
	}
}

LoaderModal.defaultProps = {
	visible: false
};

/****************************************************************************************/

export default LoaderModal;

/****************************************************************************************/
