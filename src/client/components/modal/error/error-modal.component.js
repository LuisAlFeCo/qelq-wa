
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import errorModalView from './error-modal.view.jsx';

/****************************************************************************************/

class ErrorModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: props.data
		};
	}

	componentWillReceiveProps(nextProps) {
		let data = nextProps.data;
		if(data) this.setState({data});
	}

	onClose() {
		this.setState({data: null});
	}

	render() {
		return errorModalView.call(this);
	}
}

/****************************************************************************************/

ErrorModal.defaultProps = {
	accept: true
};

/****************************************************************************************/

export default ErrorModal;

/****************************************************************************************/
