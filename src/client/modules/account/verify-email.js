
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';

import verifyEmailView from '../../views/account/verify-email.jsx';

/****************************************************************************************/

class VerifyEmail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sentMail: false,
			sentVerify: false
		};

		this.mutation = {
			verifyEmail: gql`
				mutation m($hash: String!) {
					verifyEmail(hash: $hash) {
						user { userName displayName email roles status }
						authorization
					}
				}`,
			resendConfirmationMessage: gql`
				mutation m {
					resendConfirmationMessage {
						message
					}
				}`,
		};

		if(!props.match.params.hash) {
			setTimeout(() => { this.setState({ sentMail: true }); }, 10000);
		}
	}

	onResend(mutation) {
		mutation();
		this.setState({ sentMail: false });
		setTimeout(() => { this.setState({ sentMail: true }); }, 10000);
	}

	render() {
		return verifyEmailView.call(this);
	}
}

/****************************************************************************************/

export default VerifyEmail;

/****************************************************************************************/
