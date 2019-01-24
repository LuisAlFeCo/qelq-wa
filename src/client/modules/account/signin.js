
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';

import Validator from '../../gears/validator';
import signInView from '../../views/account/signin.view.jsx';

/****************************************************************************************/

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: {},
			validations: {},
			error: null
		};

		this.mutation = gql`
			mutation m($data: ISignIn!) {
				signIn(data: $data) {
					authorization
				}
			}`;
	}

	onSubmit(mutation, e) {
		e.preventDefault();

		let val = this.__validate(this.state.input);

		if(val.isValid) {
			this.setState({ validations: {} });

			mutation({ variables: { data: this.state.input } })
				.then(result => {
					window.user.login(result.data.signIn.authorization, '/cuenta/perfil');
				})
				.catch(error => {
					this.setState({ error });
				});
		} else {
			this.setState({ validations: val.validations });
		}
	}

	render() {
		return signInView.call(this);
	}

	__setText(field, e) {
		let input = this.state.input;
		input[field] = e.target.value;
		this.setState({ input, error: null });
	}

	__validate(data) {
		let v = Validator;

		return v.validate({
			user: {
				validator: v.isEmpty,
				message: 'Debes ingresar tu email o nombre de usuario'
			},
			password: {
				validator: v.isEmpty,
				message: 'Debes ingresar tu contraseña'
			}
		}, data);
	}
}

/****************************************************************************************/

export default SignIn;

/****************************************************************************************/
