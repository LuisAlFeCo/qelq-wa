
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';
import getPasswordStrength from 'password-strength-calc';

import signUpView from '../../views/account/signup-view.jsx';

import Validator from '../../gears/validator';

/****************************************************************************************/

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			passwordStrength: 0,
			passwordStrengthColor: 'red',
            
			validations: {}
		};

		this.mutation = gql`
			mutation m($data: ISignUp!) {
				signUp(data: $data) {
					authorization
				}
			}`;
	}

	onPasswordChange(e) {
		let ps = getPasswordStrength(e.target.value),
			psc = 'red';
		switch(true) {
		case (ps > 80): psc = 'LimeGreen'; break;
		case (ps > 60): psc = 'YellowGreen'; break;
		case (ps > 40): psc = 'yellow'; break;
		case (ps > 20): psc = 'orange'; break;
		}
		this.setState({passwordStrength: ps, passwordStrengthColor: psc});
	}

	onSubmit(inputs, mutation, e) {
		let data = {
				firstName: inputs.firstName.value,
				lastName: inputs.lastName.value,
				email: inputs.email.value,
				password: inputs.password.value,
				confirmPassword: inputs.confirmPassword.value
			},
			val = this.__validate(data);

		e.preventDefault();

		if(val.isValid) {
			this.setState({ validations: {}});
			mutation({ variables: { data } });
		} else {
			this.setState({validations: val.validations});
		}
	}

	render() {
		return signUpView.call(this);
	}
    
	__validate(data) {
		let v = Validator;

		return Validator.validate({
			firstName: {
				validator: v.isEmpty,
				message: 'Debes ingresar tu nombre'
			},
			lastName: {
				validator: v.isEmpty,
				message: 'Debes ingresar tu apellido'
			},
			email: {
				validator: v.isNotEmail,
				message: 'Debes ingresar un correo electrónico válido'
			},
			password: {
				validator: v.isEmpty,
				message: 'Debes ingresar una contraseña'
			},
			confirmPassword: {
				validator: v.isNotEquals,
				message: 'Las contraseñas no coinciden',
				params: { a: data.password, b: data.confirmPassword }
			},
			passwordStrength: {
				validator: v.isIntLessThan,
				message: 'Tu contraseña es muy débil',
				params: { a: this.state.passwordStrength, b: 80 },
				field: 'password'
			}
		}, data);
	}
}

/****************************************************************************************/

export default SignUp;

/****************************************************************************************/
